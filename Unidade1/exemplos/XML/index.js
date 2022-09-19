var fs = require('fs');
var parse = require('xml-parser');
var xml = fs.readFileSync('exemplo.xml', 'utf8');
var inspect = require('util').inspect;
 
var obj = parse(xml);

for (a = 0 ;  a < obj.root.children.length;a++)
{
    console.log(obj.root.children[a].children[0].content);
}