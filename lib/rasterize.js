"use strict";
var page = require('webpage').create(),
    system = require('system');

console.log('Hi from PhantomJS')
console.log('arg1', system.args[1]);
console.log('arg2', system.args[2]);

var body = system.args[1]
var filen = system.args[2]


console.log('rendering');

page.viewportSize = { width: 1024, height: 600 };

page.setContent( body, 'https://www.google.com/');

page.paperSize = { format: 'A4', orientation: 'portrait', margin: '1cm' };
page.dpi = 95;

window.setTimeout(function () {
    page.render(filen);
    console.log('rendered');
    phantom.exit();
}, 200);
