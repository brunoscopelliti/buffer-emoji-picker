
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');


const capitalize = require('./utils/capitalize');

Handlebars.registerHelper('capitalize', capitalize);



const tokenize = require('./utils/tokenize');

Handlebars.registerHelper('tokenize', tokenize);



const isFeatured = require('./utils/is-featured');

Handlebars.registerHelper('featured', list =>
    list.find(isFeatured).emoji);

Handlebars.registerHelper('featuredName', list =>
    capitalize(list.find(isFeatured).name));



const data = require('./emoji.json');
const tpl = require('./picker.tpl.hbs')({ emoji:data });

fs.writeFileSync(path.join(process.cwd(), 'app', 'templates', 'picker.html'), tpl, { encoding: 'utf8' });
