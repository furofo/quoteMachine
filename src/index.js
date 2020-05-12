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

    randomQuote() { // takes quote object and returns it text or author depending on second arg
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
         
        <div id = "quoteBox">
                 <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>


            
            <div id = "text">
                <p>{this.state.quote}</p>
            </div>

            <div id = "author">
                <p id = "innerAuthor">{this.state.author}</p>

            </div>


            <div id = "new-quote">
            <button onClick = {this.randomQuote}>Quote</button>

            </div>


            <div id = "tweet-quote">

            </div>



        </div>
        )
    }
}

ReactDom.render(<QuoteContainer />, document.getElementById('root'));