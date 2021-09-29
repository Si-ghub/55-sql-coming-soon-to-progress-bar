const _data = require('../../data');
const header = require('../../components/header');

async function aboutPageHandler(data) {
    let headHTML = await _data.readTemplateHTML('head');
    // neprisijunges (false) prisijunges (true)
    const headerHTML = header(data.user);
    const footerHTML = await _data.readTemplateHTML('footer');
    const aboutHTML = await _data.readTemplateHTML('about');

    //tam kad galetume naudoti css failus is head.html {{page-css}}. Replacinam su unikalia teisinga reiksme 'about'
    // headHTML t.b let (ne const). replace grazina reiksme
    headHTML = headHTML.replace('{{page-css}}', 'about');

    const HTML = `<!DOCTYPE html>
            <html lang="en">
                ${headHTML}
                <body>
                    ${headerHTML}
                    <main>
                        ${aboutHTML}
                    </main>
                    ${footerHTML}
                    
                    <script src="/js/demo.js" type="module" defer></script>
                </body>
            </html>`;

    return { HTML }
}

module.exports = aboutPageHandler;