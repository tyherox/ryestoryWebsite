/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import Entry from '../components/blogEntry';

var key = 0;

export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {blogs:[
            {
                date: "3, February, 2017",
                title: "TESTING 3",
                content: "The state is not what it used to be. Regardless of the debate behind the allocation of power that once was largely vested in the state, it is undeniable that many modern problems render a single state action insignificant and meaningless. These global risks and problems arise in many forms and are exacerbated as the world becomes increasingly more interconnected and \"flat\". Risks include chronic unemployment, nuclear accidents, terrorism, pandemics, and cyber attacks. These problems exist on a global level that demands the action of multiple states in unison to even have a chance to resolve. However, the process is often difficult and mechanisms designed to govern groups of sovereign bodies have been met with skepticism regarding representation and legitimacy. In addition, many issues such as financial crises and global warming are in dire need of actions. Thus, to address these new and increasingly appearing issues, a technocratic network mechanism seems appropriate in tackling and preventing global problems and risks timely. ",
                preview: "The state is not what it used to be. Regardless of the debate behind the allocation of power that once was largely vested in the state, it is undeniable that many modern problems render a single state action insignificant and meaningless.",
            },
            {
                date: "2, February, 2017",
                title: "TESTING 2",
                content: "The state is not what it used to be. Regardless of the debate behind the allocation of power that once was largely vested in the state, it is undeniable that many modern problems render a single state action insignificant and meaningless. These global risks and problems arise in many forms and are exacerbated as the world becomes increasingly more interconnected and \"flat\". Risks include chronic unemployment, nuclear accidents, terrorism, pandemics, and cyber attacks. These problems exist on a global level that demands the action of multiple states in unison to even have a chance to resolve. However, the process is often difficult and mechanisms designed to govern groups of sovereign bodies have been met with skepticism regarding representation and legitimacy. In addition, many issues such as financial crises and global warming are in dire need of actions. Thus, to address these new and increasingly appearing issues, a technocratic network mechanism seems appropriate in tackling and preventing global problems and risks timely. ",
                preview: "The state is not what it used to be. Regardless of the debate behind the allocation of power that once was largely vested in the state, it is undeniable that many modern problems render a single state action insignificant and meaningless.",
            },
            {
                date: "1, February, 2017",
                title: "TESTING 1",
                content: "The state is not what it used to be. Regardless of the debate behind the allocation of power that once was largely vested in the state, it is undeniable that many modern problems render a single state action insignificant and meaningless. These global risks and problems arise in many forms and are exacerbated as the world becomes increasingly more interconnected and \"flat\". Risks include chronic unemployment, nuclear accidents, terrorism, pandemics, and cyber attacks. These problems exist on a global level that demands the action of multiple states in unison to even have a chance to resolve. However, the process is often difficult and mechanisms designed to govern groups of sovereign bodies have been met with skepticism regarding representation and legitimacy. In addition, many issues such as financial crises and global warming are in dire need of actions. Thus, to address these new and increasingly appearing issues, a technocratic network mechanism seems appropriate in tackling and preventing global problems and risks timely. ",
                preview: "The state is not what it used to be. Regardless of the debate behind the allocation of power that once was largely vested in the state, it is undeniable that many modern problems render a single state action insignificant and meaningless.",
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
        }


        return (
            <div id="blog-container">
                <div id="blog-title">Ryestory Blog</div>
                <div id="blog-entries">
                    {entry}
                </div>
            </div>
        );
    }
}
