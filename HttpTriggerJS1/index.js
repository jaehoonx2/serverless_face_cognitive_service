const util = require('util');
const fs = require('fs');
const pug = require('pug');

const asyncReadFile = util.promisify(fs.readFile);

async function renderTemplete(path, data) {
    const fileContent = await asyncReadFile(path);
    const tmpl = pug.compile(fileContent);
    return tmpl(data);
}

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
            headers : {
                'Content-Type' : 'text/html'
            },
            // status: 200, /* Defaults to 200 */
            body: await renderTemplete(
                __dirname + '/' + 'page.html',
                { staticFileStorage : process.env.STATIC_FILE_STORAGE }
            ),
            isRaw : true
    };
};
