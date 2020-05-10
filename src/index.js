import React from 'react';
import ReactDom from 'react-dom';



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