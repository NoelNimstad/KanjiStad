/*
    Noel Nimstad
    2023/11/28 : 2023/11/28
*/

const path = "vocabulary.js";
let key = process.env.KEY;

let headers;

function GenerateHeaders()
{
    headers = 
    {
        "WaniKani-Revision": "20170710",
        Authorization: "Bearer " + key
    };
}

GenerateHeaders();

const parameters = "?types=vocabulary"
let base = "https://api.wanikani.com/v2/subjects" + parameters;

let DATA = [];

async function GetPage(url)
{
    const res = await fetch(url, 
    {
        method: "GET",
        headers: headers
    });
    const body = await res.json();

    let data = body.data;

    data = data.map(a => 
    {
        return {
            character: a.data.characters,
            reading: a.data.readings.map(b => 
            {
                return b.reading
            }).toString().replace(/,/g, ", "),
            meaning: a.data.meanings.map(b => 
            {
                return b.meaning
            }).toString().replace(/,/g, ", "),
            level: a.data.level,
        }
    });

    DATA = DATA.concat(data);

    return body.pages.next_url;
}

async function Main()
{
    const next = await GetPage(base);
    if(next != null)
    {
        base = next;
        return Main();
    }

    DATA = DATA.sort((a, b) => a.level - b.level);
    const out = Bun.file(path);
    await Bun.write(out, JSON.stringify(DATA));
}

Main();