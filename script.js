const BASE_URL = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false`;
let main = document.querySelector(`main`)

async function listGoals(BASE_URL){
    //debugger;
    const resp = await fetch(BASE_URL)
    const data = await resp.json();
    printGoals(data)
}

function printGoals(data){
    //skicka in målet i den här funktionen
    //lägg in alla mål i HTML-koden med adjacentHTML
    for (let i = 0; i < data.length; i++) {
        const goal = data[i].title;
        let template = `<button>${goal}</button>`;
        main.insertAdjacentHTML(`beforeend`, template)
        
        let buttons = document.querySelectorAll(`button`);
        buttons.forEach(btn => {
            btn.addEventListener(`click`, () =>{
                //skriv ut information om målet man klickade på
            })
        });
    }
}

listGoals(BASE_URL);