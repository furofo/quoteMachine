import React from 'react';
import ReactDom from 'react-dom';
import './style.css'; //imports index css styling file from same directory
function randomColor() {
    let rgbArr = [];
    for(let i = 0; i < 3; i++) {
        rgbArr.push(Math.round(Math.random() * 255));
    }
    console.log('rgb('+ rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ');');
    //return 'rgb('+ rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ');';
   document.body.style.background = 'rgb(' +rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ')';
}
let text= <div id = "text"><p></p></div>

document.body.style.background = 'rgb(0, 10, 40)'; // inital background color

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

//randomQuote(quoteObj);


class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
        }
        this.randomQuote= this.randomQuote.bind(this);
    }

    randomQuote() {
        randomColor(); // takes quote object and returns it text or author depending on second arg
        console.log('this rand?');
        let randNumber = Math.round(Math.random() * (quoteObj.length - 1));
        let selectedObj = quoteObj[randNumber];
        let quote = selectedObj.quoteText;
        let author = selectedObj.quoteAuthor;
 
         
         this.setState({
             quote: quote,
             author: author,
         });
     
        }
    
    render() {
        return (
    <div id = "wrapper">
        <div id = "quoteBox">
                 <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>


            
            <div id = "text" className = "center">
                <p>{this.state.quote}</p>
            </div>

            <div id = "author" className = "center">
                <p id = "innerAuthor">{this.state.author}</p>

            </div>


            <div id = "new-quote" className = "center">
            <button onClick = {this.randomQuote}>Quote</button>

            </div>


            <div id = "tweet-quote">

            </div>



        </div>
    </div>
        )
    }
}

ReactDom.render(<QuoteContainer />, document.getElementById('root'));