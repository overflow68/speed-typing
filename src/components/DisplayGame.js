import React, {useState,useEffect} from 'react';
import '../styles/style.css'


function Game() {
    const [quote, setQuote] =useState("")
    const [newQuote,setNextQuote] = useState(false)
    const [timer,setTimer]=useState(0)
    const [reset, setReset] = useState(false)
   let i=0;

   useEffect(()=>{
    let ticker=setInterval(tick,1000)
    return () => clearInterval(ticker);
    
    })

    useEffect(()=>{
        setTimer(0)
    },[reset])

    const tick = () =>{
        setTimer(timer+1)
        
      }
    
    function fetchQuote(){
            return fetch('https://api.quotable.io/random')
            .then(response =>response.json())
            .then(data =>data.content)
        }
        async function NextQuote(){
            const newQuote = await fetchQuote();
            setQuote(newQuote)
            setReset(!reset)

        }      
        useEffect(() => {
            NextQuote()

        },[newQuote]);

        const handleChange= (e) =>{
            let input = document.getElementById("quoteInput");
            let domLetters = document.getElementsByClassName("letter");
            let arrayLetters = [...domLetters]
            let splitQuote = quote.split("");
            let splitTyped = e.target.value.split("");

            if (e.target.value.localeCompare(quote) !== 0 ){
            splitQuote.forEach((letter,index)=>{

                if (letter !==splitTyped[index] && splitTyped[index]){

                    domLetters[index].classList.add("incorrect")
                    domLetters[index].classList.remove("correct")
                    

                }
                else if(letter===splitTyped[index]){

                    domLetters[index].classList.add("correct")
                    domLetters[index].classList.remove("incorrect")
                   
                }
                else if(splitTyped.length !== splitQuote.length){
                    domLetters[index].classList.remove("incorrect")
                    domLetters[index].classList.remove("correct")
                } 
            })}else{
                input.value ="";
                arrayLetters.forEach(letter=>{
                    letter.classList.remove("correct")
                    letter.classList.remove("incorrect")
                    setNextQuote(!newQuote)
                })
            }

            
        }

   

  return (
    <div className="container">
        <div className="timer">
      <div>{timer}</div>
    </div>
        <div id="quoteDisplay" className = "quote-display">{quote.split("").map(letter =>{return<span className="letter" id={i++}>{letter}</span>})}</div>
        <textarea id ="quoteInput" className = "quote-input" onChange={handleChange}></textarea>
        

      
    </div>
  );
}

export default Game;
