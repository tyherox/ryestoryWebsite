
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Buffer extends Component {

    componentDidMount(){

        var buffer = ReactDOM.findDOMNode(this.refs.buffer);

        if(this.props.size){
            buffer.style.padding = this.props.size + 'px';
        }
        else {
            buffer.style.padding = 10 + 'px';
        }
    }

    render() {
        return(<div ref="buffer"></div>)
    }
}