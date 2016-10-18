/**
 * Created by charlesmoncada on 18/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName": "string"
};


// table.dynamicSchema = false;
// Para que el schema sea estatico

/*
Trigger para insert
 */

table.insert(function (context) {
    context.item.idUsuario = context.user.id;
    return context.execute();
});


table.read(function (context) {
    context.query.where({idUsuario : context.user.id});
    return context.execute();
});

/*
* Permisos de acceso a la tabla, prueba
* */


table.read.access = 'anonymous';
table.update.access = 'authenticated';
table.delete.access = 'authenticated';
table.insert.access = 'authenticated';

module.exports = table;