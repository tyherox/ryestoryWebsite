/**
 * Created by JohnBae on 12/26/16.
 */

import React, { Component, PropTypes } from 'react';
import Entry from '../components/blogEntry';
import {Image} from 'react-bootstrap'
import Buffer from '../components/buffer.js';

var key = 0;

export default class Blog extends Component {

    constructor(props){
        super(props);
        this.state = {
            blogs:[
            {
                date: "20, February, 2017",
                title: "Welcome to our blog!",
                content:
                    <div>
                        <p>Hey there guys!

                            Trestle has been in the works for several months and we finally feel comfortable introducing it to the world. With the small reveal on our Facebook page last week we wanted to create venue of communication we can establish right here on our website. With that said, it is with great pleasure that we a announce the creation of a Ryestory blog! As the first post on our lovely cozy blog, we’ll get straight to what you can expect from this new venue.
                            <br/><br/>
                            First - weekly updates! Trestle is still in it’s infancy and the product by nature is very flexible. We’re always looking for new awesome features to add and refine. With all this designign and building, it’s easy to get lost in our own head. That’s why transparency is of big concern for us at Ryestory. We want to make sure that Trestle is ultimately an app that you’d want to use. You can expect a weekly post every Friday detailing all the little changes and tweaks we’ve made before we head into the weekend.
                            <br/><br/>
                            Second, Important announcements like a major version change or a big feature implementation will also be posted here. These will differ from the weekly updates in their scope and depth. While weekly updates can tend to be technical and rather detailed, these announcements will be more consumable and big-picture stuff. However, as much as we’d love to have exciting new things to show every week or two, these announcements will be more sparse and will likely be posted monthly or bi-monthly.
                            <br/><br/>
                            Lastly, we’re planning on engaging with you guys more directly with community events. Some things we have in mind are writing competitions, showcases of how people use Trestle’s layout, interviews with some of you guys - any way for us to put the spotlight on our community. This is still in development as we have yet to ascertain how it will work but stay tuned!
                            <br/><br/>
                            And that’s about it! Check up on us often to give us feedback or concerns as we are always eager to hear from you guys. Have a good day!
                        </p>
                    </div>,
                preview: <p>Trestle has been in the works for several months and we finally feel comfortable introducing it to the world. With the small reveal on our Facebook page last week we wanted to create venue of communication we can establish right here on our website.</p>
            },
            {
                date: "22, February, 2017",
                title: "What program should I write with?",
                content:
                    <div>
                        <Buffer />
                        <p>
                            With most of us having that one writing app we unconsciously open to write that assignment or report, it’s not a question we often ask ourselves. Writing apps, for the most part, have done an adequate job in allowing us to translate our thoughts onto paper. Most are equipped with a dazzling array of tools like text formatting, font styles and sizes, graphs and tables, paragraph alignment, printing capabilities… the list goes on.
                            <br/><br/>
                            But how many of them actually help you write better?
                            <br/><br/>
                            New writing or note taking apps roll out every month but how many of them claim to streamline your writing workflow? Help you focus on your task at hand? Improve your writing productivity?
                            <br/><br/>
                            <Image src="/assets/whiteSheets.png" responsive />
                            <br/><br/>
                            Well, Trestle does. And we think it’ll do those spectacularly well.
                            <br/><br/>
                            Trestle focuses on two complementary aspects that help achieve these goals: modularity and customization. Its modular design allows the program to organize things such as tools and features into self-contained areas called widgets that can then be added and removed by the user. This modularity enables Trestle to reduce unnecessary cluster and avoid the horrid menu-within-a-menu-within-a-menu problem. This design philosophy of only showing user-selected tools ultimately allows users to create customized writing environments that suit their particular needs.
                            <br/><br/>
                            We liken this customization experience to organizing your desk. Just like how everyone has their own way of arranging contents of their desk, we imagine people will customize Trestle to suit their preference and needs. Writer’s block? How about you choose a nice soothing background and get rid of everything except one writing area? Doing a lengthy finals paper? Pop open your dictionary widget and place multiple writing areas to organize your writing. All shown and handled fluidly on one screen by Trestle’s layout mechanic of course.
                            <br/><br/>
                            So what program should you write with? Why not an app that focuses on you and how you write? Why not give Trestle a shot!
                        </p>
                    </div>,
                preview: <p>With most of us having that one writing app we unconsciously open to write that assignment or report, it’s not a question we often ask ourselves. Writing apps, for the most part, have done an adequate job in allowing us to translate our thoughts onto paper. </p>
            },
        ]}
    }

    render() {

        var entry, self = this;

        if(this.props.params.entries){
            entry = this.state.blogs.find(function(elem){
                return elem["date"] == self.props.params.entries;
            })
            console.log("FOUND:", entry);
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

            entry = this.state.blogs.map(function(blog){
                return(
                    <Entry date={blog.date}
                           title={blog.title}
                           content={blog.content}
                           preview={blog.preview}
                           view="preview"
                           key={key++}/>
                )
            });
            return (
                <div id="blog-container">
                    <Buffer size="30"/>
                    <div><h1  className="title-section">RYESTORY BLOG</h1></div>
                    <div id="blog-entries">
                        {entry}
                    </div>
                </div>
            );
        }
    }
}
