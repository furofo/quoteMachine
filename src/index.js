import React from 'react';
import ReactDom from 'react-dom';
import './style.css'; //imports index css styling file from same directory
import $ from "jquery";
let jsonStored;
$(document).ready(function(){
$("#new-quote").click(function(){
   $('#text').fadeIn(1500);
   $('#author').fadeIn(1500);
   $('#new-quote').fadeIn(1500);
   $('#tweet-quote').fadeIn(1500);
   $('tumblr-quote').fadeIn(1500);
   console.log("this worked???");
});
})
function update(response) {
    jsonStored = JSON.stringify(response);
    return jsonStored; 
                            }

function handleErr() {
    console.log("error?");
}

 let randomColor = () => { // generates random rgb color from full spectrum of colors and assigns it to everything
    let rgbArr = [];
    for(let i = 0; i < 3; i++) {
        rgbArr.push(Math.round(Math.random() * 255));
    }
   let rgbColor = 'rgb(' +rgbArr[0] + ', ' + rgbArr[1] + ', ' + rgbArr[2] + ')';
   document.body.style.background = rgbColor;
   document.getElementById('text').style.color = rgbColor;
   document.getElementById('author').style.color = rgbColor;
   document.getElementById('new-quote').style.background = rgbColor;
   document.getElementById('tweet-quote').style.background = rgbColor;
   document.getElementById('tumblr-quote').style.background = rgbColor;
}
let text= <div id = "text"><p></p></div>
document.body.style.background = 'rgb(0, 10, 40)'; // inital background color
let linkFormatter = (quote) => {
    let beginLink = 'https://twitter.com/intent/tweet?status=';
    let endLink = '';
    for(let i = 0; i < quote.length; i++) {
        if(quote[i] == ' ') {
            endLink += '%20';
        }
        else {
            endLink += quote[i];
        }
    }
    return beginLink + endLink;
}
class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: null,
            author: '',
            link: '',
        }
        this.randomQuote= this.randomQuote.bind(this);
    }
    componentDidMount() {
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
     .done(response => {
         setTimeout(() => {this.setState({quote: response.quoteText, author: response.quoteAuthor, link: ''});}, 500);
     })
    .fail(handleErr)
    }
    randomQuote() {
       
        $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
         .done(response => {
         setTimeout(() => {this.setState({quote: response.quoteText, author: response.quoteAuthor});
                            randomColor(); 
                             $('#text').hide().fadeIn(1500);
                             $('#author').hide().fadeIn(1500);
                             $('#new-quote').hide().fadeIn(1500);
                             $('#tweet-quote').hide().fadeIn(1500);
                             $('#tumblr-quote').hide().fadeIn(1500);
                            // $(document.body).hide().fadeIn(1500)
                             $('#tweet-quote').attr('href', linkFormatter(response.quoteText) + '- ' + response.quoteAuthor + "#quotes");
                        }, 500);    
     })
    .fail(handleErr);
        console.log("failed?");
        }
    render() {
        return (
    <div id = "wrapper">
    <div id = "rel-wrapper">
        <div id = "quote-box">
                 <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
            <div id = "text" className = "center">
            <i className="fa fas fa-quote-left">&nbsp;&nbsp;{this.state.quote}</i>
            </div>
            <div id = "author" className = "center">
                <p id = "innerAuthor">{this.state.author}</p>
            </div>
            <div id = "container" >
            <div id = "butwrapper1">
            <a href = "https://twitter.com/intent/tweet?status=hello%20world" target = "_blank" id = "tweet-quote"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href = "https://www.tumblr.com/dashboard" target = '_blank' id = "tumblr-quote"><i className="fa fa-tumblr-square" aria-hidden="true"></i></a>
            </div>
            <div id = "butwrapper3">
            <button id = "new-quote" onClick = {this.randomQuote}>New Quote</button>
            </div>
            </div>
        </div>
    </div>
    </div>
        )
    }
}
ReactDom.render(<QuoteContainer />, document.getElementById('root'));