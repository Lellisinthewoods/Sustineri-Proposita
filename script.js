const BASE_URL = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false`;
let main = document.querySelector(`main`);
let goalCode;
let goal;


async function listGoals(BASE_URL)
{
    //debugger;
    const resp = await fetch(BASE_URL)
    const data = await resp.json();
    console.log(data);
    printGoals(data)
}

function printGoals(data)
{
    //skicka in målet i den här funktionen
    //lägg in alla mål i HTML-koden med adjacentHTML
    for (let i = 0; i < data.length; i++) {
        goal = data[i].title;
        
        let template = `<button>${goal}</button>`;
        main.insertAdjacentHTML(`beforeend`, template)

    }

    let buttons = document.querySelectorAll(`button`);
    buttons.forEach(btn => {
        btn.addEventListener(`click`, () =>{
            goalCode = data[4].code;
            goalInfo(goalCode)
        })
    });
}

async function goalInfo(goalCode)
{
    new_Url = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalCode}/Target/List?includechildren=false`
    const resp = await fetch(new_Url)
    const newData = await resp.json();
    console.log(newData);
}

listGoals(BASE_URL);
