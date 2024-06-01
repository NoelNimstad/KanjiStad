if(localStorage.getItem("user") && localStorage.getItem("vocab"))
{
    window.location.href = "index.html";
}

const button = document.getElementById("button");
const input = document.getElementById("input");

button.addEventListener("click", async () => 
{
    const token = input.value;

    const headers = new Headers
    ({
        "Wanikani-Revision": "20170710",
        Authorization: "Bearer " + token,
    });

    { // get user data
        const endpoint = new Request("https://api.wanikani.com/v2/user", 
        {
            method: "GET",
            headers: headers
        });

        const res = await fetch(endpoint);
        const body = await res.json();

        if(!body.data)
        {
            return alert("Invalid API token");
        }

        localStorage.setItem("user", JSON.stringify
        ({
            token: token,
            level: body.data.level,
            username: body.data.username
        }));
    }

    { // get vocab data
        let endpoint = "https://api.wanikani.com/v2/subjects?types=vocabulary";
        let DATA = [];

        while(endpoint != null)
        {            
            const res = await fetch(endpoint, 
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
                    level: a.data.level
                }
            });
        
            DATA = DATA.concat(data);
        
            endpoint = body.pages.next_url;
        }

        if(!DATA)
        {
            alert("Something went wrong getting vocabulary data from WaniKani.");
        }

        localStorage.setItem("vocab", JSON.stringify(DATA));
    }

    window.location.href = "index.html";
}); 