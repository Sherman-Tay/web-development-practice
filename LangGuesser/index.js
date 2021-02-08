const franc = require("franc");
const langs = require("langs");
const colors = require("colors");
const input = process.argv[2];


const langCode = franc(input);

if(langCode ==='und'|'nds'|"sco"){
    console.log("sorry could not figure it out".red)
} else {
    const language = langs.where("2",langCode);
    console.log(`Óur best guess is:'${language.name}`.green)
}