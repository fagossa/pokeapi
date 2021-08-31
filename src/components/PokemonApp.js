import React, { useEffect } from 'react';

import PokemonSearch from './PokemonSearch';
import PokemonDetail from './PokemonDetail';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import './PokemonApp.css';

import { addPokemon } from '../actions'
import pokemonStore from '../stores'

const PokemonApp = () => {

    const searchPokemon = async (name) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await res.json()
            pokemonStore.dispatch(addPokemon(data));
        } catch (error) {
            // TODO: show error
            //pokemonStore.dispatch(...);
        }
    }

    useEffect(() => {
        // To preload a pokemon
        //searchPokemon('bulbasaur');
    }, []);

    return (
        <span>
            <header fluid="md">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <a className="navbar-brand" href="https://fagossa.github.io/pokeapi/">PokeAPI</a>
                    <button className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarCollapse"
                        aria-controls="navbarCollapse"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <PokemonSearch onSearch={searchPokemon} />
                    </div>
                </nav>
            </header>
            <main role="main" className="flex-shrink-0">
                <Container>
                {
                    pokemonStore.getState().pokemons.PokemonApp( p => 
                        <Row><Col><PokemonDetail /></Col></Row>
                    )
                }
                </Container>
            </main>
        </span>
    )
}

export default PokemonApp;