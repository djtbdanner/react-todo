var React = require ('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require ('react-router');

$(document).foundation();

// application styles
require('style!css!sass!applicationStyles')

ReactDOM.render(
   <p>Boilerplate for React with test modules</p>,
   document.getElementById('app')
 );
