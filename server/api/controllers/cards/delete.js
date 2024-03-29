const Errors = {
    NOT_ENOUGH_RIGHTS: {
        notEnoughRights: 'Not enough rights',
    },
    CARD_NOT_FOUND: {
        cardNotFound: 'Card not found',
    },
};

module.exports = {
    inputs: {
        id: {
            type: 'string',
            // regex: /^[0-9]+$/,
            required: true,
        },
    },

    exits: {
        notEnoughRights: {
            responseType: 'forbidden',
        },
        cardNotFound: {
            responseType: 'notFound',
        },
    },

    async fn(inputs) {
        await sails.helpers.utils.logApi(this.req.isSocket, `DELETE /api/cards/${inputs.id} : cards/delete`)

        const { currentUser } = this.req;

        let { card } = await sails.helpers.cards
        .getProjectPath(inputs.id)
        .intercept('pathNotFound', () => Errors.CARD_NOT_FOUND);

        const boardMembership = await BoardMembership.findOne({
            boardId: card.boardId,
            userId: currentUser.id,
        });

        if (!boardMembership) {
            throw Errors.CARD_NOT_FOUND; // Forbidden
        }

        if (boardMembership.role !== BoardMembership.Roles.EDITOR) {
            throw Errors.NOT_ENOUGH_RIGHTS;
        }

        card = await sails.helpers.cards.deleteOne.with({
            record: card,
            request: this.req,
        });

        if (!card) {
            throw Errors.CARD_NOT_FOUND;
        }

        return {
            item: card,
        }
    }
}
