import axios from 'axios';
import { useEffect, useState } from 'react';
import Character from './Character';

export default function ListCharacter() {

    const [characters, setCharacters] = useState([
        {
            name: 'Rick Sanchez',
            url: 'https://rickandmortyapi.com/api/character/1'
        }
    ]);
    
    const [busqueda, setBusqueda]= useState("");

    const getCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            //console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch((err) => {console.log(err)})
    }

    /** Metodo de busqueda */
    const handleChange = e =>{
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar=(nameCharacter)=>{
        let resultBusqueda = characters.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(nameCharacter.toLowerCase())){
                return elemento;
            }
        });
        setCharacters(resultBusqueda);
    }
    
    useEffect(() => {
        getCharacters();
    },[])

    return (
        <div>
            <br></br>
            <label htmlFor="" className='textoBusqueda'>Busqueda de personajes:</label>
            <input type="text" className='form-control' value={busqueda} placeholder='Ingrese el personaje' onChange={handleChange}/>
            <br></br>
            <h2>Filtro de busqueda por Estado</h2>
            <select name="" id="">
                <option value=""></option>
                <option value=""></option>
            </select>
            <br />
            <div className="row">
                {characters.map((val, i) => {
                    return <Character key={i} char={val} />
                })}
            </div>
        </div>
        
    )
}
