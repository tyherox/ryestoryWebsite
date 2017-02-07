  import React from 'react';
  import { Meteor } from 'meteor/meteor';
  import { render } from 'react-dom';
  import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

  import App from '../imports/App.jsx';
  import Home from '../imports/ui/pages/home.jsx';
  import Blog from '../imports/ui/pages/blog.jsx';
  import ContactUs from '../imports/ui/pages/contactUs.jsx';

  Meteor.startup(() => {
    render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="blog" component={Blog} />
      <Route path="contact" component={ContactUs} />
    </Route>
  </Router>
      , document.getElementById('render-target')
  );
  });
