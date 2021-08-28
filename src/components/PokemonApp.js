import React, { useState, useEffect } from 'react';

import PokemonSearch from './PokemonSearch';
import PokemonDetail from './PokemonDetail';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// import Navbar from 'react-bootstrap/Navbar';

import './PokemonApp.css';

const PokemonApp = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null)

    const searchPokemon = async (name) => {
        try {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            const data = await res.json()
            setCurrentPokemon(data)
        } catch (error) {
            setCurrentPokemon(null)
        }
    }

    useEffect(() => {
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
                {currentPokemon
                    ? <PokemonDetail pokemon={currentPokemon} />
                    : <Container><Row><Col> no pokemon found</Col></Row></Container>
                }
            </main>
        </span>
    )
}

export default PokemonApp;