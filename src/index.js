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

randomColor();


class QuoteContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
         
            <div id = "quoteBox">
                 <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>


            <div id = "text">
                <p>This should be text </p>
            </div>


            <div id = "author">


            </div>


            <div id = "new-quote">

            </div>


            <div id = "tweet-quote">

            </div>



            </div>
        )
    }
}

ReactDom.render(<QuoteContainer />, document.getElementById('root'));