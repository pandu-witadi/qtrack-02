const Errors = {
    PROJECT_NOT_FOUND: {
        projectNotFound: 'Project not found',
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
        projectNotFound: {
            responseType: 'notFound',
        },
    },

    async fn(inputs) {
        await sails.helpers.utils.logApi(this.req.isSocket, `DELETE /api/projects/${inputs.id} : projects/delete`)

        const { currentUser } = this.req;

        let project = await Project.findOne(inputs.id);

        if (!project) {
            throw Errors.PROJECT_NOT_FOUND;
        }

        const isProjectManager = await sails.helpers.users.isProjectManager(currentUser.id, project.id);

        if (!isProjectManager) {
            throw Errors.PROJECT_NOT_FOUND; // Forbidden
        }

        project = await sails.helpers.projects.deleteOne.with({
            record: project,
            request: this.req,
        });

        if (!project) {
            throw Errors.PROJECT_NOT_FOUND;
        }

        return {
            item: project,
        }
    }
}
