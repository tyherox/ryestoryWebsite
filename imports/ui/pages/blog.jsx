/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import Entry from '../components/blogEntry';
import {Image} from 'react-bootstrap'

var key = 0;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {blogs:[
            {
                date: "3, February, 2017",
                title: "Introducing Trestle",
                content:
                    <div>
                        <Image src="/assets/whiteSheets.png" responsive />
                        <b >TESTING</b>
                    </div>,
                preview: <b>TESTING</b>
            }
        ]}
    }

    showPost(){
        
    }

    render() {

        var entry,
            self = this;

        if(this.props.params.entries){
            entry = this.state.blogs.find(function(elem){
                return elem["title"] == self.props.params.entries;
            })
            entry = <Entry date={entry.date}
                           title={entry.title}
                           content={entry.content}
                           preview={entry.preview}
                           view="full"
                           key={key++}/>
            return (
                <div id="blog-container">
                    <div id="blog-section">
                    <div id="blog-entries">
                        {entry}
                    </div>
                    </div>
                </div>
            );
        }
        else{
            entry = this.state.blogs.map(function(entry){
                return(
                    <Entry date={entry.date}
                           title={entry.title}
                           content={entry.content}
                           preview={entry.preview}
                           view="preview"
                           key={key++}/>
                )
            });
            return (
                <div id="blog-container">
                    <div className="title-section">Ryestory Blog</div>
                    <div className="description-brandname">Talking about cool stuff here</div>
                    <div id="blog-entries">
                        {entry}
                    </div>
                </div>
            );
        }
    }
}
