const readline = require('readline');
const logUpdate = require('log-update')
const { between, generateRandomSpace } = require('./utils');
const { stat } = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}) 

readline.emitKeypressEvents(process.stdin, rl);
    if (process.stdin.isTTY){
        process.stdin.setRawMode(true);
    }
function startnewlife (){
    
    state.life = 0
}

rl.on('close', () => {
    process.exit(0)
  })

  const bear = [
    'ʕ•ᴥ•ʔ',
    'ʕ·ᴥ·ʔ',
    'ʕºᴥºʔ'
];

//Etat
const state = {
    life :20, 
    time:0,  //temps en secondes
    chanter :false
}

function getOurs() {
    return generateRandomSpace() + bear[Math.floor(Math.random() * bear.length)]
}

function getmusic() {
    const nbmusic = Math.floor((30*state.life)/100)
    const music = new Array(nbmusic).fill("♫♩♬ ◙▒◙ ").join("")
    return music
}

function getLifeBar() {
    const nbcoeur = Math.floor((30*state.life)/100)
    const vie = new Array(nbcoeur).fill("❤").join("")

    return vie 
    // if (state.life < 60){
    //     return "❤❤❤"
    // }
    // return "❤❤❤❤❤❤ " + state.life + "/100"
    // if (state.life < 30){
    //     return "❤❤❤"
    // }
    // return "❤❤❤❤❤❤❤ " + state.life + "/100"

    // if (state.life < 70){
    //        return "🍔ԅ( ͒ ۝ ͒ )🍔ԅ( ͒ ۝ ͒ )🍔ԅ  ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤ " +state.life + "/100"   
    //    }
    //    return "❤❤❤"   
    //    if (state.life < 70){
    //     return "◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ◙▒◙ ♫♩♬ ❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤" +state.life + "/100"   
    // }
    // return "❤❤❤❤❤❤"   
}
setInterval(function(){
    const espace =[
        getOurs(),
        '',
        getLifeBar() + '  ' + getmusic()
    ]
    logUpdate(espace.join('\n'))
}, 70)

//boucle d'etat
setInterval(function() {
    state.time += 1  

    if (state.life === 100) {  
        return;

    }

    if (state.time % 3 === 0){
        state.life++       
    }
  
},100)
process.stdin.on('keypress', (character, key) => {
    
    if(key.name === 'm') {
        startnewlife();
        
        return startnewlife();
    }
})