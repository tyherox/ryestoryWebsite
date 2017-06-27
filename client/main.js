  import React from 'react';
  import { Meteor } from 'meteor/meteor';
  import { render } from 'react-dom';
  import { Router, Route, browserHistory, IndexRedirect} from 'react-router'

  import App from '../imports/App.jsx';
  import Home from '../imports/ui/pages/home.jsx';

  Meteor.startup(() => {
    render(
        <Router history={browserHistory} onUpdate={() => window.scrollTo(0, 0)}>
            <Route path="/" component={App}>
                <IndexRedirect to={"/home"}/>
                <Route path="home" component={Home}/>
            </Route>
        </Router>
        ,document.getElementById('render-target')
    );
  });
