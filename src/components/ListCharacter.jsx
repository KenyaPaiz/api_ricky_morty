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
    const [filtroStatus, setFiltroStatus] = useState("");

    const getCharacters = () => {
        axios.get('https://rickandmortyapi.com/api/character/')
        .then((response) => {
            console.log(response.data.results);
            setCharacters(response.data.results);
        })
        .catch((err) => {console.log(err)})
    }

    /** Metodo de busqueda */
    const handleChange = evento =>{
        //console.log(evento.target.value);
        setBusqueda(evento.target.value); /** setBusqueda("ricky") */
        filtrar(evento.target.value);
    }

    /** metodo devueve los nombres de los personajes en minuscula */
    const filtrar=(nameCharacter)=>{
        let resultBusqueda = characters.filter((elemento)=>{
            if(elemento.name.toString().toLowerCase().includes(nameCharacter.toLowerCase())){
                return elemento;
            }
        });
        setCharacters(resultBusqueda);
    }

    /** Filtro por estado */
    const handleCargarbyStatus = e =>{
        setFiltroStatus(e.target.value);
        filtrarStatus(e.target.value);
        /*console.log(opcion);*/
    }

    const filtrarStatus = (statusCharacter) => {
        let resultStaus = characters.filter((item) => {
            if(statusCharacter === 'Alive'){
                return item.status === 'Alive';
            }else if(statusCharacter === 'Dead'){
                return item.status === 'Dead';
            }else if(statusCharacter === 'unknown'){
                return item.status === 'unknown';
            }else{
                return item;
            }
        });
        setCharacters(resultStaus);
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
            <label htmlFor="" className='textoBusqueda'>Filtro de busqueda por estado</label><br></br>
            <select name="" id="" value={filtroStatus} onChange={handleCargarbyStatus}>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
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
