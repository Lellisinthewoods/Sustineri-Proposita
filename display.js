let main = document.querySelector(`main`);
let article = document.querySelector(`article`);
let linkToPage = document.getElementById(`linkToPage`);

function printGoals(data){
    //skicka in målet i den här funktionen
    //lägg in alla mål i HTML-koden med adjacentHTML
    let goal;
    for (let i = 0; i < data.length; i++) {
        goal = data[i].title;
        let template = `<button ID='${i}'>${goal}</button>`;
        main.insertAdjacentHTML(`beforeend`, template)
    }

    let button0 = document.getElementById(`0`); //måste ligga i funktionen pga knapparna finns inte
    button0.addEventListener(`click`, ()=>{goalInfoDisplay(1)}) //jag hade GÄRNA gjort detta i en loop
    let button1 = document.getElementById(`1`); //men hur namnger man variablerna då?
    button1.addEventListener(`click`, ()=>{goalInfoDisplay(2)})
    let button2 = document.getElementById(`2`);
    button2.addEventListener(`click`, ()=>{goalInfoDisplay(3)})
    let button3 = document.getElementById(`3`);
    button3.addEventListener(`click`, ()=>{goalInfoDisplay(4)}) //3
    let button4 = document.getElementById(`4`);
    button4.addEventListener(`click`, ()=>{goalInfoDisplay(5)}) //4
    let button5 = document.getElementById(`5`);
    button5.addEventListener(`click`, ()=>{goalInfoDisplay(6)}) //5
    let button6 = document.getElementById(`6`);
    button6.addEventListener(`click`, ()=>{goalInfoDisplay(7)}) //6
    let button7 = document.getElementById(`7`);
    button7.addEventListener(`click`, ()=>{goalInfoDisplay(8)}) //7
    let button8 = document.getElementById(`8`);
    button8.addEventListener(`click`, ()=>{goalInfoDisplay(9)}) //8
    let button9 = document.getElementById(`9`);
    button9.addEventListener(`click`, ()=>{goalInfoDisplay(10)}) //9
    let button10 = document.getElementById(`10`);
    button10.addEventListener(`click`, ()=>{goalInfoDisplay(11)}) //10
    let button11 = document.getElementById(`11`);
    button11.addEventListener(`click`, ()=>{goalInfoDisplay(12)}) //11
    let button12 = document.getElementById(`12`);
    button12.addEventListener(`click`, ()=>{goalInfoDisplay(13)}) //12
    let button13 = document.getElementById(`13`);
    button13.addEventListener(`click`, ()=>{goalInfoDisplay(14)}) //13
    let button14 = document.getElementById(`14`);
    button14.addEventListener(`click`, ()=>{goalInfoDisplay(15)}) //14
    let button15 = document.getElementById(`15`);
    button15.addEventListener(`click`, ()=>{goalInfoDisplay(16)}) //15
    let button16 = document.getElementById(`16`);
    button16.addEventListener(`click`, ()=>{goalInfoDisplay(17)}) //16
}

async function goalInfoDisplay(goalCode)
{
    new_Url = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/${goalCode}/Target/List?includechildren=true`
    const resp = await fetch(new_Url)
    const newData = await resp.json();
    //let codeNumber = goalCode - 1;
    console.log(newData);
    console.log(newData[0].description)
    goalInfoArray=newData[0].targets;
    console.log(goalInfoArray)
    main.style.display=`none`;
    for (i=0;i<goalInfoArray.length;i++) //magic number!!! skapa ny array baserat på targets??
    {
        goalInformation = newData[0].targets[i].title;
        console.log(goalInformation)
        let infoDisplay = `<p>${goalInformation}</p>`;
        article.insertAdjacentHTML(`beforeend`, infoDisplay)
    }
    linkToPage.style.display="flex";
}

export {printGoals};