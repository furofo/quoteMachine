import React from 'react';
import ReactDom from 'react-dom';
function randomColor() {
    let rgbArr = [];
    for(let i = 0; i < 3; i++) {
        rgbArr.push(Math.round(Math.random() * 255));
    }
    console.log('rgb('+ rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ');');
    return 'rgb('+ rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ');';
}
let text= <div id = "text"><p></p></div>
function randomQuote(quoteObj) { // takes quote object and returns it text or author depending on second arg
       let randNumber = Math.round(Math.random() * (quoteObj.length - 1));
       let selectedObj = quoteObj[randNumber];
       let quote = selectedObj.quoteText;
       let author = selectedObj.quoteAuthor;

        text = <div id = "text"><p>{quote}</p></div>

    
   
}


let quoteObj = [
    {
        quoteText: "This is first quote",
        quoteAuthor: "Dano",
    },
    {
        quoteText: "This is second quote",
        quoteAuthor: "furafo",
    },
    {
        quoteText: "This is third quote",
        quoteAuthor: "billy",
    }
];



class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         
        <div id = "quoteBox">
                 <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>


            
            {text}

            <div id = "author">
                <p id = "innerAuthor"> Hello world!</p>

            </div>


            <div id = "new-quote">
            <button>Quote</button>

            </div>


            <div id = "tweet-quote">

            </div>



        </div>
        )
    }
}

ReactDom.render(<QuoteContainer />, document.getElementById('root'));