import React, { useState, useEffect } from 'react';

import PokemonSearch from './PokemonSearch';
import PokemonDetail from './PokemonDetail';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PokemonApp = () => {
    const [currentPokemon, setCurrentPokemon] = useState(null)

    const searchPokemon = async (name) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        const data = await res.json()
        setCurrentPokemon(data)
    }

    useEffect(() => {
        searchPokemon('bulbasaur');
      }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <PokemonSearch onSearch={searchPokemon} />
                </Col>
            </Row>
            {currentPokemon
                ? <PokemonDetail pokemon={currentPokemon} />
                : 
                <Row><Col> no pokemon found</Col></Row>
            }
        </Container>
    )
}

export default PokemonApp;