import { React, useState } from 'react';
import Button from 'react-bootstrap/Button';

const PokemonSearch = ({ onSearch }) => {
    const [name, setName] = useState('')

    return (
        <div>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            <Button onClick={() => onSearch(name)}>Search</Button>
        </div>
    )
}

export default PokemonSearch;