const Mustache = require("Mustache");
const fs = require("fs");
const config = require("config");

// read from args
const mustacheTemplate = "aws-task-definition-template.mustache";
const outputFile = "aws-task-definition.json";

const fileTemplate = fs.readFileSync(mustacheTemplate);
const fileString = Buffer.from(fileTemplate).toString('utf8');
let output = Mustache.render(fileString, config);
output = output.replace(new RegExp(',(\r|\n|\r\n).*]', 'g'), '\n]');
fs.writeFileSync(outputFile, JSON.stringify(JSON.parse(output)));
