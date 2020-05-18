import React from 'react';
import ReactDom from 'react-dom';
import './style.css'; //imports index css styling file from same directory
import $ from "jquery"

let jsonStored;
function update(response) {
  //  console.log('this is response');
   // console.log(response);
    jsonStored = JSON.stringify(response);
   // console.log("this is json stored");
   // console.log(jsonStored);
    return jsonStored;
    
                            }

function handleErr() {
    console.log("error?");
}


 let randomColor = () => {
    //console.log('trying to figure out what htis is');
    //console.log(this);
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
     .done(update)
    .fail(handleErr)
    let rgbArr = [];
    for(let i = 0; i < 3; i++) {
        rgbArr.push(Math.round(Math.random() * 255));
    }

    let rgbColor = 'rgb(' +rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ')';
   // console.log('rgb('+ rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ');');
    //return 'rgb('+ rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ');';
   document.body.style.background = rgbColor;
   document.getElementById('text').style.color = rgbColor;
   document.getElementById('author').style.color = rgbColor;
   document.getElementById('butt').style.background = rgbColor;
   document.getElementById('tweet-quote').style.background = rgbColor;
   document.getElementById('tumblr-quote').style.background = rgbColor;
   
   
}
let text= <div id = "text"><p></p></div>

document.body.style.background = 'rgb(0, 10, 40)'; // inital background color

let quoteObj = [
    {
        quoteText: "This is first quote lets make thi sa really long urn on sentence because sometimes authors like ot go on an on and on and aon adfnas dafjsadlkfjs all thes epeopse",
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
            quote: null,
            author: '',
        }
        this.randomQuote= this.randomQuote.bind(this);
    }

    componentDidMount() {
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
     .done(response => {
         console.log("this executed");
         console.log(this);
         console.log(response);
         setTimeout(() => {this.setState({quote: response.quoteText, author: response.quoteAuthor});}, 500);
         
     })
    .fail(handleErr)
    }
    
    /* componentDidUpdate() {
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
        .done(response => {
            console.log("this executed");
            console.log(this);
            console.log(response);
            setTimeout(() => {this.setState({quote: response.quoteText, author: response.quoteAuthor});}, 500);
            
        })
       .fail(handleErr)
       } */
    

    randomQuote() {
        randomColor(); // takes quote object and returns it text or author depending on second arg
       // console.log('tryint go fiture out this confusing');
        //console.log(jsonStored);
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
     .done(response => {
         console.log("this executed");
         console.log(this);
         console.log(response);
         setTimeout(() => {this.setState({quote: response.quoteText, author: response.quoteAuthor});}, 500);
         
     })
    .fail(handleErr);
        let randNumber = Math.round(Math.random() * (quoteObj.length - 1));
        let selectedObj = quoteObj[randNumber];
       // let quote = selectedObj.quoteText;
        //let author = selectedObj.quoteAuthor;
 
         
        // this.setState({
             //quote: quote,
             //author: author,
        // });
     
        }
    
    render() {
       
        
        return (
    <div id = "wrapper">
    <div id = "rel-wrapper">
        <div id = "quoteBox">
                 <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>


            
            <div id = "text" className = "center">
                <p>{this.state.quote}</p>
            </div>

            <div id = "author" className = "center">
                <p id = "innerAuthor">{this.state.author}</p>

            </div>


            <div id = "container" >
            <div id = "butwrapper1">
            <a href = "#" id = "tweet-quote"><i className="fa fa-twitter" aria-hidden="true"></i></a>
         
            
            <a href = "#" id = "tumblr-quote"><i className="fa fa-tumblr-square" aria-hidden="true"></i></a>
            </div>
            <div id = "butwrapper3">
            <button id = "butt" onClick = {this.randomQuote}>New Quote</button>
            </div>
            
            
            
            

            </div>


           


        </div>
    </div>
    </div>
        )
    }
}


ReactDom.render(<QuoteContainer />, document.getElementById('root'));