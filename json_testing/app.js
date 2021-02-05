
// old school xhr.
// const req = new XMLHttpRequest();

// req.onload = function(){
//     console.log("done with request!");
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function (){
//     console.log("Ërror");
//     console.log(this);
// }


// req.open('GET','https://api.cryptonator.com/api/ticker/btc-usd');
// req.send();



// fetch api does not work on ie., promise version,
// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res =>{
//         //it is async, so will return resolved when header is in, but not content.
//         console.log("response, wait to parse",res)
//         return res.json()
//     })
//     .then(data=>{
//         console.log("Data has been parsed",data)
//         console.log(data.ticker.price)
//     })
//     .catch(e =>{
//         console.log("error",e)
//     })

//fetch cleanly with async func.
// const fetchBtcPrice = async() =>{
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//         const data = await res.json();
//         console.log(data.ticker.price);
//     }catch(e){
//         console.log("error!",e)
//     }
// }
//     //Axios -library
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res =>{
        console.log(res.data.ticker.price)
    })
    .catch(e=>{
        console.log(e)
    })

const fetchBtcPrice = async () =>{
    try{
        const res = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log(res.data.ticker.price)
    }catch(e){
        console.log(e)
    }
}
const button = document.querySelector('#button');
const jokes = document.querySelector('#jokes');


const addNewJoke = async () =>{
    const jokeText = await getDadJoke();
    const newLI = document.createElement('LI');
    newLI.append(jokeText);
    jokes.append(newLI);

}
const getDadJoke = async()=>{
    try{
        const config = {headers:{Accept:'application/json'}}
        const res = await axios.get('https://icanhazda4djoke.com/',config);
        return res.data.joke;
    }catch(e){
        return "nope"
    }
    
}
button.addEventListener('click',addNewJoke);