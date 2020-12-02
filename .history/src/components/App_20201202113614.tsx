import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './pizza';

import appCss from  '../styles/App.module.scss';
import anotherCss from  '../styles/Another.module.scss';

const App = () => {  
return <ul className={[ anotherCss.pizzaList]}>{pizzas.map(item => <Pizza pizza={item}/>)}</ul>
};

export default App;