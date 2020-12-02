import React from 'react';
import pizzas from '../data/pizzas.json';
import Pizza from './pizza';

import appCss from  '../styles/App.module.scss';

const App = () => {  
return <ul className={appCss.}>{pizzas.map(item => <Pizza pizza={item}/>)}</ul>
};

export default App;