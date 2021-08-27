import React, { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const PokemonSkills = ({ skills }) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Skills</Card.Title>
                <ListGroup>
                    {skills.map(skill =>
                        <ListGroup.Item 
                        key={skill.ability.name} 
                        variant={skill.is_hidden ? 'warning' : '' }
                        >
                        {skill.ability.name}
                    </ListGroup.Item>
                )}
            </ListGroup>        
            </Card.Body>
        </Card>
    )
}

const PokemonMoves = ({moves}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Moves</Card.Title>
                <ListGroup>
                    {moves.map(obj =>
                        <ListGroup.Item 
                            key={obj.move.name}>
                        {obj.move.name}
                    </ListGroup.Item>
                )}
            </ListGroup>        
            </Card.Body>
        </Card>
    )
}

const PokemonSprites = ({sprites}) => {
    const imgs = [
        sprites.back_default, sprites.back_shiny, sprites.front_default, 
        sprites.back_female, sprites.back_shiny_female, sprites.front_female
    ];
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (count === imgs.length - 1) {
                setCount(0);
            } else {
                setCount(count + 1);
            }
         }, 1000);
     
        return () => clearTimeout(timeout);
       });     

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Sprites</Card.Title>
                <Container>
                    <Row>
                        <Col>
                            <img src={imgs[count]} alt=""/>
                        </Col>
                    </Row>
                </Container>        
            </Card.Body>
        </Card>
    )
}

const PokemonDetail = ({ pokemon }) => {
    return (
        <span>
            <Row>
                <Col sm={4}>
                    <PokemonSkills skills={pokemon.abilities || []} />
                </Col>
                <Col sm={4}>
                    <PokemonMoves moves={pokemon.moves || []} />
                </Col>
                <Col sm={4}>
                    <PokemonSprites sprites={pokemon.sprites} />
                </Col>
            </Row>
        </span>
    )
}

export default PokemonDetail;