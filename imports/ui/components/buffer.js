

    import React, { Component, PropTypes } from 'react';
    import ReactDOM from 'react-dom';

    export default class Buffer extends Component {

        componentDidMount(){

            var buffer = ReactDOM.findDOMNode(this.refs.buffer);

            if(this.props.size){
                buffer.style.padding = this.props.size + 'px';
            }
            else {
                buffer.style.padding = 15 + 'px';
            }
        }
<<<<<<< Updated upstream

        render() {
           return(<div ref="buffer"></div>)
        }
    }
=======


        var example_test;
        var exampleTest;

    }

    render() {
       return(<div ref="buffer" className="header-button-subscribe"></div>)
    }
}
>>>>>>> Stashed changes
