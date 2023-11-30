/*
    Noel Nimstad
    2023/11/28 : 2023/11/30
*/

const path = "vocabulary.js"; // path to data export
let key = process.env.KEY; // get WaniKani API key from environment variables

let headers; // headers
function GenerateHeaders() // generate headers function
{
    headers = 
    {
        "WaniKani-Revision": "20170710", // i don't know what this means
        Authorization: "Bearer " + key // authorization making
    };
}

GenerateHeaders(); // generate the headers

const parameters = "?types=vocabulary" // we only want vocabulary in this case
let base = "https://api.wanikani.com/v2/subjects" + parameters; // generate a base URL

let DATA = []; // data array to put pulled items in

async function GetPage(url) // function to get a target page of data
{
    const res = await fetch(url, 
    {
        method: "GET",
        headers: headers
    }); // fetch data from WaniKani servers with parameters
    const body = await res.json(); // convert the response to JSON

    let data = body.data; // grab the data from the body

    data = data.map(a => // make the data usefull and concise
    {
        return {
            character: a.data.characters, // grab the characters
            reading: a.data.readings.map(b => // grab the readings 
            {
                return b.reading
            }).toString().replace(/,/g, ", "), // convert it to a nice string
            meaning: a.data.meanings.map(b => // grab the vocabulary meanings
            {
                return b.meaning
            }).toString().replace(/,/g, ", "), // convert it to a nice string
            level: a.data.level, // grab the vocabularies level
        }
    });

    DATA = DATA.concat(data); // append the data to the end of the DATA array

    return body.pages.next_url; // return the next page's url
}

async function Main() // main function
{
    const next = await GetPage(base); // call the GetPage function and wait for it to return a value
    if(next != null) // if there is a next page
    {
        base = next; // then update the base URL
        return Main(); // and call this function again, without doing any code bellow
    }

    DATA = DATA.sort((a, b) => a.level - b.level); // sort the DATA array by level
    const out = Bun.file(path); // find the vocabulary.js file
    await Bun.write(out, JSON.stringify(DATA)); // write the content to the file
}

Main(); // call the Main function