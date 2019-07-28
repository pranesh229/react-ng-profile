import './App.scss';
import React, { Component } from 'react';
import Tab from './tab/tab';
import Footer from './footer/footer';
import AboutMe from './about-me/about-me';
import { Route, HashRouter } from 'react-router-dom';
import Resume from './resume/resume';

export default class App extends Component {
  componentDidMount() {
    (document as any).getElementsByClassName('lds-facebook')[0].style.display =
      'none';
  }
  render() {
    return (
      <HashRouter>
        <Tab />
        <Route path="/" exact component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Footer />
      </HashRouter>
    );
  }
}
