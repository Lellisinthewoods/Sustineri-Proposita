import { printGoals, goalInfoDisplay } from "./display";

const BASE_URL = `https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false`;



async function listGoals(BASE_URL)
{
    //debugger;
    const resp = await fetch(BASE_URL)
    const data = await resp.json();
    console.log(data);
    printGoals(data)
}



listGoals(BASE_URL);
