import React from 'react';
import ReactDOM from 'react-dom';
import PokemonApp from './components/PokemonApp';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux'
import pokemonStore from './stores'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={pokemonStore}>
    <PokemonApp />
  </Provider>,
  rootElement
)
