import React, { Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import WebFont from 'webfontloader';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Sidebar from './components/Sidebar';
import Maincontent from './components/Maincontent';
import $ from 'jquery';
window.jQuery = window.$ = $;
require('bootstrap');
// window.$ = window.jQuery = require('jquery');

WebFont.load({
  google: {
    families : ['Titillium Web:300,400,700']
  }
})
class App extends Component {
  state = {
    data : [
      {
        name : "first file",
        active : "false",
        children:[
          {
            name : "first child",
            children: null,
            content : "first child content"
          },
          {
            name : "second child",
            children: null,
            content: "second child content"
          },
          {
            name : "third child",
            children:null,
            content: "third child content"
          }
        ]
      },{
        name : "second file",
        children : null,
        content : "second file content"
      },{
        name : "third file",
        children : null,
        content : "third file content"
      }
    ]
  }
  showContentHandler = (contentText) => {
    let content = document.getElementById('content');
      content.style.display = 'inline-block'
    if(contentText){
      content.innerHTML = contentText;
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-title">File Explorer</h1>
        <div  className='sidenav' id='sidenav'>
        <Sidebar data={this.state.data} clickHandler = {this.showContentHandler} />
        </div>
        <Maincontent />
      </div>
    );
  }
}

export default App;
