import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
//import {Router, Route} from 'react-router';
import { BrowserRouter,Switch, Route } from 'react-router-dom';

// Import custom components
import Main from './common/main.component.jsx'
import Home from './common/home.component.jsx'
import About from './common/about.component.jsx'
import Car from './car/car.component.jsx'
import CarDetail from './car/car-detail.component.jsx'

const data = [
{
      id: 1,
      name    : 'Galaxy s9',
      year    : '2018',
      model   : 'Samsung galaxy s9',
      make    : 'Samsung',
      media   : 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s9-1.jpg',
      price   : 'About 840 EUR'

  },
  {
      id: 2,
      name    : 'Galaxy s8',
      year    : '2017',
      model   : 'Samsung galaxy s8',
      make    : 'Samsung',
      media   : 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s8-.jpg',
      price   : 'About 530 EUR'

  },
  {
      id: 3,
      name    : 'Galaxy s7',
      year    : '2016',
      model   : 'Samsung galaxy s7',
      make    : 'Samsung',
      media   : 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s7-edge-1.jpg',
      price   : 'About 450 EUR'
  },
  {
      id: 4,
      name    : 'Galaxy s6',
      year    : '2015',
      model   : 'Samsung galaxy s6',
      make    : 'Samsung',
      media   : 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s6-1.jpg',
      price   : 'About 280 EUR'
  },
  {
      id: 5,
      name    : 'Galaxy s5',
      year    : '2014',
      model   : 'Samsung galaxy s5',
      make    : 'Samsung',
      media   : 'https://cdn2.gsmarena.com/vv/pics/samsung/samsung-galaxy-s5-g900f-4.jpg',
      price   : 'About 250 EUR'
  }
];

render(
    <BrowserRouter>

      <Main>
            <Route exact path="/" component={Home}/>
            <Route path="/phones" render={(props) => (<Car {...props} data={data}/>)}/>
            <Route path="/phones/:id" render={(props) => (<CarDetail {...props} data={data}/>)}/>
            <Route path="/about" component={About}/>
      </Main>

    </BrowserRouter>,
    document.getElementById('container')
);
