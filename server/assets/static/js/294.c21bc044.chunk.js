"use strict";(self.webpackChunkplanka_client=self.webpackChunkplanka_client||[]).push([[294],{6294:(e,a,t)=>{t.d(a,{default:()=>b});var r={lessThanXSeconds:{one:"menos de un segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"medio minuto",lessThanXMinutes:{one:"menos de un minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"alrededor de 1 hora",other:"alrededor de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 d\xeda",other:"{{count}} d\xedas"},aboutXWeeks:{one:"alrededor de 1 semana",other:"alrededor de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"alrededor de 1 mes",other:"alrededor de {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"alrededor de 1 a\xf1o",other:"alrededor de {{count}} a\xf1os"},xYears:{one:"1 a\xf1o",other:"{{count}} a\xf1os"},overXYears:{one:"m\xe1s de 1 a\xf1o",other:"m\xe1s de {{count}} a\xf1os"},almostXYears:{one:"casi 1 a\xf1o",other:"casi {{count}} a\xf1os"}};const o=function(e,a,t){var o,i=r[e];return o="string"===typeof i?i:1===a?i.one:i.other.replace("{{count}}",a.toString()),null!==t&&void 0!==t&&t.addSuffix?t.comparison&&t.comparison>0?"en "+o:"hace "+o:o};var i=t(6840);const n={date:(0,i.Z)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.Z)({formats:{full:"{{date}} 'a las' {{time}}",long:"{{date}} 'a las' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};var d={lastWeek:"'el' eeee 'pasado a la' p",yesterday:"'ayer a la' p",today:"'hoy a la' p",tomorrow:"'ma\xf1ana a la' p",nextWeek:"eeee 'a la' p",other:"P"},s={lastWeek:"'el' eeee 'pasado a las' p",yesterday:"'ayer a las' p",today:"'hoy a las' p",tomorrow:"'ma\xf1ana a las' p",nextWeek:"eeee 'a las' p",other:"P"};const l=function(e,a,t,r){return 1!==a.getUTCHours()?s[e]:d[e]};var m=t(7325);const u={ordinalNumber:function(e,a){return Number(e)+"\xba"},era:(0,m.Z)({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","despu\xe9s de cristo"]},defaultWidth:"wide"}),quarter:(0,m.Z)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:(0,m.Z)({values:{narrow:["e","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],wide:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"]},defaultWidth:"wide"}),day:(0,m.Z)({values:{narrow:["d","l","m","m","j","v","s"],short:["do","lu","ma","mi","ju","vi","s\xe1"],abbreviated:["dom","lun","mar","mi\xe9","jue","vie","s\xe1b"],wide:["domingo","lunes","martes","mi\xe9rcoles","jueves","viernes","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:(0,m.Z)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"ma\xf1ana",afternoon:"tarde",evening:"tarde",night:"noche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},abbreviated:{am:"AM",pm:"PM",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"},wide:{am:"a.m.",pm:"p.m.",midnight:"medianoche",noon:"mediodia",morning:"de la ma\xf1ana",afternoon:"de la tarde",evening:"de la tarde",night:"de la noche"}},defaultFormattingWidth:"wide"})};var c=t(586),h=t(6884);const b={dateFns:{code:"es",formatDistance:o,formatLong:n,formatRelative:l,localize:u,match:{ordinalNumber:(0,c.Z)({matchPattern:/^(\d+)(\xba)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,h.Z)({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|a\.?\s?e\.?\s?c\.?|d\.?\s?c\.?|e\.?\s?c\.?)/i,wide:/^(antes de cristo|antes de la era com[u\xfa]n|despu[e\xe9]s de cristo|era com[u\xfa]n)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^(antes de cristo|antes de la era com[u\xfa]n)/i,/^(despu[e\xe9]s de cristo|era com[u\xfa]n)/i]},defaultParseWidth:"any"}),quarter:(0,h.Z)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,h.Z)({matchPatterns:{narrow:/^[efmajsond]/i,abbreviated:/^(ene|feb|mar|abr|may|jun|jul|ago|sep|oct|nov|dic)/i,wide:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^e/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^en/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i]},defaultParseWidth:"any"}),day:(0,h.Z)({matchPatterns:{narrow:/^[dlmjvs]/i,short:/^(do|lu|ma|mi|ju|vi|s[\xe1a])/i,abbreviated:/^(dom|lun|mar|mi[\xe9e]|jue|vie|s[\xe1a]b)/i,wide:/^(domingo|lunes|martes|mi[\xe9e]rcoles|jueves|viernes|s[\xe1a]bado)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^do/i,/^lu/i,/^ma/i,/^mi/i,/^ju/i,/^vi/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,h.Z)({matchPatterns:{narrow:/^(a|p|mn|md|(de la|a las) (ma\xf1ana|tarde|noche))/i,any:/^([ap]\.?\s?m\.?|medianoche|mediodia|(de la|a las) (ma\xf1ana|tarde|noche))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn/i,noon:/^md/i,morning:/ma\xf1ana/i,afternoon:/tarde/i,evening:/tarde/i,night:/noche/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:1}},format:{date:"M/d/yyyy",time:"p",dateTime:"$t(format:date) $t(format:time)",longDate:"MMM d",longDateTime:"MMMM d 'a' p",fullDate:"MMM d, y",fullDateTime:"MMMM d, y 'a' p"},translation:{common:{account:"Cuenta",actions:"Acciones",addAttachment_title:"A\xf1adir un adjunto",addComment:"A\xf1adir un comentario",addMember_title:"A\xf1adir un miembro",addUser_title:"A\xf1adir usuario",administrator:"Administrador",all:"Todos",allChangesWillBeAutomaticallySavedAfterConnectionRestored:"Todos los cambios ser\xe1n autom\xe1ticamente guardados<br />despu\xe9s de que se restaure la conexi\xf3n.",areYouSureYouWantToDeleteThisAttachment:"\xbfEst\xe1s seguro de que quieres borrar este adjunto?",areYouSureYouWantToDeleteThisBoard:"\xbfEst\xe1s seguro de que quieres borrar este tablero?",areYouSureYouWantToDeleteThisCard:"\xbfEst\xe1s seguro de que quieres borrar esta tarjeta?",areYouSureYouWantToDeleteThisComment:"\xbfEst\xe1s seguro de que quieres borrar este comentario?",areYouSureYouWantToDeleteThisLabel:"\xbfEst\xe1s seguro de que quieres borrar esta etiqueta?",areYouSureYouWantToDeleteThisList:"\xbfEst\xe1s seguro de que quieres borrar esta lista?",areYouSureYouWantToDeleteThisProject:"\xbfEst\xe1s seguro de que quieres borrar este proyecto?",areYouSureYouWantToDeleteThisTask:"\xbfEst\xe1s seguro de que quieres borrar esta tarea?",areYouSureYouWantToDeleteThisUser:"\xbfEst\xe1s seguro de que quieres borrar este usuario?",areYouSureYouWantToRemoveThisMemberFromProject:"\xbfEst\xe1s seguro de que quieres remover a este miembro del proyecto?",attachment:"Adjunto",attachments:"Adjuntos",authentication:"Autenticaci\xf3n",board:"Tablero",boardNotFound_title:"Tablero no encontrado",cardActions_title:"Acciones de las tarjetas",cardNotFound_title:"tarjeta no encontrada",cardOrActionAreDeleted:"La tarjeta o la acci\xf3n est\xe1 eliminada.",color:"Color",createBoard_title:"Crear Tablero",createLabel_title:"Crear Etiqueta",createNewOneOrSelectExistingOne:"Crear uno nuevo o seleccionar<br />uno existente.",createProject_title:"Crear Proyecto",createTextFile_title:"Crear archivo de Texto",currentPassword:"Contrase\xf1a Actual",date:"Fecha",dueDate_title:"Fecha de Vencimiento",deleteAttachment_title:"Eliminar Adjunto",deleteBoard_title:"Borrar Tablero",deleteCard_title:"Borrar tarjeta",deleteComment_title:"Borrar Comentario",deleteLabel_title:"Borrar Etiqueta",deleteList_title:"Borrar Lista",deleteProject_title:"Borrar Proyecto",deleteTask_title:"Borrar Tarea",deleteUser_title:"Borrar Usuario",description:"Descripci\xf3n",dropFileToUpload:"Arrastra un archivo para subirlo",editAttachment_title:"Editar adjunto",editAvatar_title:"Editar avatar",editBoard_title:"Editar Tablero",editDueDate_title:"Editar Fecha de Vencimiento",editEmail_title:"Editar Correo",editLabel_title:"Editar Etiqueta",editPassword_title:"Editar Contrase\xf1a",editStopwatch_title:"Editar Temporizador",editUsername_title:"Edit nombre de usuario",email:"Correo",emailAlreadyInUse:"El correo ya est\xe1 en uso",enterCardTitle:"Escribe el t\xedtulo de la tarjeta...",enterDescription:"Escribe la descripci\xf3n...",enterFilename:"Escribe el nombre del archivo",enterListTitle:"Escribe el t\xedtulo de la lista...",enterProjectTitle:"Escribe el nombre del proyecto",enterTaskDescription:"Escribe la descripci\xf3n de la tarea...",filterByLabels_title:"Filtrar por Etiquetas",filterByMembers_title:"Filtrar por Miembros",fromComputer_title:"Desde Computador",hours:"Horas",invalidCurrentPassword:"Contrase\xf1a actual invalida",labels:"Et\xedquetas",list:"Lista",listActions_title:"Acci\xf3nes de Lista",members:"Miembros",minutes:"Minutos",moveCard_title:"Mover tarjeta",name:"Nombre",newEmail:"Nuevo correo",newPassword:"Nueva contrase\xf1a",newUsername:"Nuevo nombre de usuario",noConnectionToServer:"Sin conexi\xf3n al servidor",noBoards:"Sin tableros",noLists:"Sin listas",noProjects:"Sin proyectos",notifications:"Notificaciones",noUnreadNotifications:"No hay notificaciones sin leer",openBoard_title:"Abrir Tablero",optional_inline:"opcional",organization:"Organizaci\xf3n",phone:"Tel\xe9fono",preferences:"Preferencias",pressPasteShortcutToAddAttachmentFromClipboard:"Tip: presiona Ctrl-V (Cmd-V en Mac) para a\xf1adir adjuntos desde el portapapeles.",project:"Proyecto",projectNotFound_title:"Proyecto no encontrado",removeMember_title:"Remover Miembro",seconds:"Segundos",selectBoard:"Seleccionar Tablero",selectList:"Seleccionar Lista",selectProject:"Seleccionar Proyecto",settings:"Configuraciones",stopwatch:"Temporizador",subscribeToMyOwnCardsByDefault:"Suscribirme a mis propias tarjetas por defecto",taskActions_title:"Acciones de Tareas",tasks:"Tareas",time:"Tiempo",title:"T\xedtulo",userActions_title:"Acciones de Usuario",userAddedThisCardToList:"<0>{{user}}</0><1> a\xf1adido a esta tarjeta en {{list}}</1>",userLeftNewCommentToCard:"{{user}} dej\xf3 un nuevo comentario \xab{{comment}}\xbb en <2>{{card}}</2>",userMovedCardFromListToList:"{{user}} movi\xf3 <2>{{card}}</2> de {{fromList}} a {{toList}}",userMovedThisCardFromListToList:"<0>{{user}}</0><1> movi\xf3 esta tarjeta de {{fromList}} a {{toList}}</1>",username:"Nombre de usuario",usernameAlreadyInUse:"El nombre de usuario ya est\xe1 en uso",users:"Usuarios",writeComment:"Escribir un comentario..."},action:{addAnotherCard:"A\xf1adir otra tarjeta",addAnotherList:"A\xf1adir otra lista",addAnotherTask:"A\xf1adir otra tarea",addCard:"A\xf1adir tarjeta",addCard_title:"A\xf1adir tarjeta",addComment:"A\xf1adir comentario",addList:"A\xf1adir lista",addMoreDetailedDescription:"A\xf1adir una descripci\xf3n m\xe1s detallada",addTask:"A\xf1adir tarea",addToCard:"A\xf1adir a la tarjeta",addUser:"A\xf1adir usuario",createBoard:"Crear tablero",createFile:"Crear archivo",createLabel:"Crear etiqueta",createNewLabel:"Crear una nueva etiqueta",createProject:"Crear proyecto",delete:"Borrar",deleteAttachment:"Borrar adjuntos",deleteAvatar:"Borrar avatar",deleteBoard:"Borrar tablero",deleteCard:"Borrar tarjeta",deleteCard_title:"Borrar tarjeta",deleteComment:"Borrar comentario",deleteImage:"Borrar imagen",deleteLabel:"Borrar etiqueta",deleteList:"Borrar lista",deleteList_title:"Borrar Lista",deleteProject:"Borrar proyecto",deleteProject_title:"Borrar Proyecto",deleteTask:"Borrar tarea",deleteTask_title:"Borrar Tarea",deleteUser:"Delete usuario",edit:"Editar",editDueDate_title:"Editar Fecha de Vencimiento",editDescription_title:"Editar Descripci\xf3n",editEmail_title:"Editar Correo",editPassword_title:"Editar Contrase\xf1a",editStopwatch_title:"Edit Temporizador",editTitle_title:"Edit T\xedtulo",editUsername_title:"Editar Nombre de Usuario",logOut_title:"Cerrar Sesi\xf3n",makeCover_title:"Hacer Cubierta",move:"Mover",moveCard_title:"Mover Tarjeta",remove:"Remover",removeBackground:"Remover fondo",removeCover_title:"Remover Cubierta",removeFromProject:"Remover del Proyecto",removeMember:"Remover miembro",save:"Guardar",showAllAttachments:"Mostrar todos los adjuntos ({{hidden}} hidden)",showFewerAttachments:"Mostrar menos adjuntos",start:"Iniciar",stop:"Parar",subscribe:"Suscribirse",unsubscribe:"Desuscribirse",uploadNewAvatar:"Subir un nuevo avatar",uploadNewImage:"Subir una nueva imagen"}}}}}]);
//# sourceMappingURL=294.c21bc044.chunk.js.map