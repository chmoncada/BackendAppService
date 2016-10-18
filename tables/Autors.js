/**
 * Created by charlesmoncada on 18/10/16.
 */

var azureMobileApps = require('azure-mobile-apps');

var table = azureMobileApps.table();

table.columns = {
    "name" : "string",
    "secondName": "string"
};

/*
* Permisos de acceso a la tabla, prueba
* */


table.read.access = 'authenticated';
table.update.access = 'disabled';

module.exports = table;