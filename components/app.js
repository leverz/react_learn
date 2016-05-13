/**
 * Created by Lever on 16/5/12.
 */

require('./common.scss');

// import React from 'react';
const React = require('react');
import { render } from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';

import { Header } from './header';
import { Footer } from './footer';
import { Index } from './index';
import { AppInfo } from './appInfo';
import { IncInfo } from './incInfo';
import { ApplyUse } from './applyUse';


var App = React.createClass({
   render: function () {
       return (
           <div>
               <Header></Header>
               {this.props.children}
               <Footer></Footer>
           </div>
       );
   } 
});

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="index" component={Index} />
            <Route path="appInfo" component={AppInfo} />
            <Route path="incInfo" component={IncInfo} />
            <Route path="applyUse" component={ApplyUse} />
            <Route path="*" component={Index}/>
        </Route>
    </Router>
), document.getElementById('content'));
