import React, {useState,useEffect} from 'react';
import '../styles/style.css'

function Game() {
    const [quote, setQuote] =useState("")
    const [empty,setEmpty] = useState(false)
   let i=0;
    
    function fetchQuote(){
            return fetch('http://api.quotable.io/random')
            .then(response =>response.json())
            .then(data =>data.content)
        }
        async function NextQuote(){
            const newQuote = await fetchQuote();
            setQuote(newQuote)

        }      
        useEffect(() => {
            NextQuote()
            console.log("rerendered")
            
            console.log(empty)

        },[empty]);

        const handleChange= (e) =>{
            let input = document.getElementById("quoteInput");
            let domLetters = document.getElementsByClassName("letter");
            let arrayLetters = [...domLetters]
            let splitQuote = quote.split("");
            let splitTyped = e.target.value.split("");

            if (e.target.value.localeCompare(quote) !== 0 ){
            splitQuote.forEach((letter,index)=>{

                if (letter !==splitTyped[index] && index === splitTyped.length){

                    domLetters[index].classList.add("incorrect")
                    domLetters[index].classList.remove("correct")

                }else if(letter===splitTyped[index]){

                    domLetters[index].classList.add("correct")
                    domLetters[index].classList.remove("incorrect")
                   
                } 
            })}else{
                input.value ="";
                console.log("this should erase textCOntent")
                arrayLetters.forEach(letter=>{
                    letter.classList.remove("correct")
                    letter.classList.remove("incorrect")
                })
                setEmpty(!empty)
            }

            
        }

   

  return (
    <div className="container">
        <div id="quoteDisplay" className = "quote-display">{quote.split("").map(letter =>{return<span className="letter" id={i++}>{letter}</span>})}</div>
        <textarea id ="quoteInput" className = "quote-input" onChange={handleChange}></textarea>
        

      
    </div>
  );
}

export default Game;
