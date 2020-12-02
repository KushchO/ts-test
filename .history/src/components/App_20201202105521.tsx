import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './pizza';

import '../styles/App.module.scss';

const App = () => {  
return <ul className="pizzaList">{pizzas.map(item => <Pizza pizza={item}/>)}</ul>
};

export default App;