async function getPhonetics(spelling) {
    const page = await fetch(`https://fr.wiktionary.org/wiki/${spelling}`);
    const text = await page.text();
    // fs.writeFileSync('test-fetch.txt', text, '');
    const stringSearchStart = `<p><b>${spelling}</b> `;
    const stringSearchEnd = `</p>`;

    const start = text.indexOf(stringSearchStart, 0);
    const end = text.indexOf(stringSearchEnd, start)

    const p = text.substring(start, end + 4);

    const APIStart = p.indexOf(`<span class="API" title="Prononciation API">`);
    const APIEnd = p.indexOf(`\</span>`, APIStart);

    const phonetics = p.substring(APIStart + 45, APIEnd - 1);
    return phonetics;
}

export default getPhonetics;