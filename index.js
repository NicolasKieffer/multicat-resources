/* global module */
/* jslint node: true */
/* jslint indent: 2 */
'use strict';

let fs = require('fs'),
  path = require('path');

let resources = {
  "tables": {},
  "categorizations": require("./categorizations.json"),
  "template": fs.readFileSync(path.join(__dirname, "fragment.tei.xml.tpl"), 'utf-8')
};

for (let i = 0; i < resources.categorizations.length - 1; i++) {
  resources.tables[resources.categorizations[i].id] = require("./" + path.join("tables", resources.categorizations[i].table));
}

module.exports = resources;