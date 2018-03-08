import React from 'react';
//import { BrowserRouter, Route,  } from 'react-router';
//import { BrowserRouter } from 'react-router-dom'

import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/pages/App/App';
import About from './components/pages/About/About';
import NotFound from './components/pages/NotFound/NotFound';
import Resume from './components/pages/Resume/Resume';
//import Error from './components/pages/Error/Error';

const Routes = (props) => (
  <BrowserRouter>
    <div>
      <Route path='/' component={App} />
      <Route path="/about" component={About} />
      <Route path="/resume" component={Resume} />
      <Route path="*" component={NotFound} />
    </div>
  </BrowserRouter>
);

export default Routes;

/* <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} /> */


    //     <Router {...props}>
    //     <Route path="/" component={App} />
    //     <Route path="/about" component={About} />
    //     <Route path="*" component={NotFound} />
    //   </Router>
    // );

    //       <Route path='/contact' component={About} />
     // <Route path='*' component={NotFound} />


     //       <Route path="*" component={NotFound} />