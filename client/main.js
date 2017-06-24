  import React from 'react';
  import { Meteor } from 'meteor/meteor';
  import { render } from 'react-dom';
  import { Router, Route, browserHistory, IndexRedirect} from 'react-router'

  import App from '../imports/App.jsx';
  import Home from '../imports/ui/pages/home.jsx';
  import About from '../imports/ui/pages/about.jsx';
  import Blog from '../imports/ui/pages/blog.jsx';
  import ContactUs from '../imports/ui/pages/contactUs.jsx';

  Meteor.startup(() => {
    render(
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={App}>
                <IndexRedirect to={"/home"}/>
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
                <Route path="blog" component={Blog} />
                <Route path="blog/:entries" component={Blog} />
                <Route path="contact" component={ContactUs} />
            </Route>
        </Router>
        ,document.getElementById('render-target')
    );
  });
