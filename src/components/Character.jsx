import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Character({char}) {
    const [character, setCharacter] = useState({});

    const getCharacter = (url) =>{
        axios.get(url)
        .then((response) => {
            setCharacter(response.data)
        })
        .catch((err) => {console.log(err)})
    }

    useEffect(() => {
        getCharacter(char.url);
    })

    return (
        <div className="col-md-4">
            <div className='card border-light mt-4'>
                <div class="card-header">
                    <h5 className="card-title titulo">{character.name}</h5>
                </div>
                <div className="card-body">
                    <img src={character.image} className="card-img-top" alt="..." />
                    <p className="card-text">
                        <b>Status: </b> {character.status} <br/>
                        <b>Species: </b> {character.species} <br/>
                        <b>Gender: </b> {character.gender} <br/>
                        {/*<b>Origin: </b> {character.origin.name} <br/>*/}
                    </p>
                </div>
            </div>
        </div>
    )
}


