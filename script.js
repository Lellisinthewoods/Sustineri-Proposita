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
        
        let template = `<button ID='${i}'>${goal}</button>`;
        main.insertAdjacentHTML(`beforeend`, template)
    }

    let button0 = document.getElementById(`0`); //måste ligga i funktionen pga knapparna finns inte
    button0.addEventListener(`click`, ()=>{goalInfo(1)}) //jag hade GÄRNA gjort detta i en loop
    let button1 = document.getElementById(`1`); //men hur namnger man variablerna då?
    button1.addEventListener(`click`, ()=>{goalInfo(2)})
    let button2 = document.getElementById(`2`);
    button2.addEventListener(`click`, ()=>{goalInfo(3)})
    let button3 = document.getElementById(`3`);
    button3.addEventListener(`click`, ()=>{goalInfo(4)}) //3
    let button4 = document.getElementById(`4`);
    button4.addEventListener(`click`, ()=>{goalInfo(5)}) //4
    let button5 = document.getElementById(`5`);
    button5.addEventListener(`click`, ()=>{goalInfo(6)}) //5
    let button6 = document.getElementById(`6`);
    button6.addEventListener(`click`, ()=>{goalInfo(7)}) //6
    let button7 = document.getElementById(`7`);
    button7.addEventListener(`click`, ()=>{goalInfo(8)}) //7
    let button8 = document.getElementById(`8`);
    button8.addEventListener(`click`, ()=>{goalInfo(9)}) //8
    let button9 = document.getElementById(`9`);
    button9.addEventListener(`click`, ()=>{goalInfo(10)}) //9
    let button10 = document.getElementById(`10`);
    button10.addEventListener(`click`, ()=>{goalInfo(11)}) //10
    let button11 = document.getElementById(`11`);
    button11.addEventListener(`click`, ()=>{goalInfo(12)}) //11
    let button12 = document.getElementById(`12`);
    button12.addEventListener(`click`, ()=>{goalInfo(13)}) //12
    let button13 = document.getElementById(`13`);
    button13.addEventListener(`click`, ()=>{goalInfo(14)}) //13
    let button14 = document.getElementById(`14`);
    button14.addEventListener(`click`, ()=>{goalInfo(15)}) //14
    let button15 = document.getElementById(`15`);
    button15.addEventListener(`click`, ()=>{goalInfo(16)}) //15
    let button16 = document.getElementById(`16`);
    button16.addEventListener(`click`, ()=>{goalInfo(17)}) //16
}

async function goalInfo(goalCode)
{
    new_Url = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalCode}/Target/List?includechildren=false`
    const resp = await fetch(new_Url)
    const newData = await resp.json();
    debugger;
    let codeNumber = goalCode - 1;
    console.log(newData);
    console.log(newData[codeNumber].description)
}

listGoals(BASE_URL);
