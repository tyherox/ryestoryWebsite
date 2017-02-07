  import React from 'react';
  import { Meteor } from 'meteor/meteor';
  import { render } from 'react-dom';
  import { Router, Route, Link, browserHistory, IndexRoute} from 'react-router'

  import App from '../imports/App.jsx';
  import Home from '../imports/ui/pages/home.jsx';

  Meteor.startup(() => {
    render(
  <Router history={browserHistory}>
      <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      </Route>
      </Router>
      , document.getElementById('render-target')
  );
  });
