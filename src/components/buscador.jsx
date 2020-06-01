import React, { useEffect, useState, useRef } from 'react';
import '../styles/buscador.css'
import axios from 'axios';

const Buscador = ({ setPokes }) => {

    const [display, setDisplay] = useState(false);
    const [options, setOptions] = useState([]);
    const [search, setSearch] = useState("");
    const wrapperRef = useRef(null);



    async function getPokemonsTotal() {
        let response = await axios(`https://poke-finder.herokuapp.com/api/pokemons`);
        response = response.data;
        console.log(response);
        let arrayNombresTotal = response.map(poke => {
            return poke.name
        })
        setPokes(arrayNombresTotal);
        return (arrayNombresTotal);

    }

    useEffect(() => {
        getPokemonsTotal().then((pokes) => {
            setOptions(pokes);
        });

    }, [])

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const updatePokeDex = poke => {
        setSearch(poke);
        setDisplay(false);
    };


    return (
        <div className="buscador-container pos-rel">

            
            <input 
                placeholder="Ingrese el nombre a buscar..."
                value={search}
                onChange={event => {
                    setSearch(event.target.value)
                    setDisplay(true)
                }}
                className="buscador-input" name="busqueda" type="text" />

            {display && (search!=="") &&(
                <div ref={wrapperRef} className="autoContainer">
                    {options
                        .filter((name) => name.indexOf(search.toLowerCase()) > -1)
                        .map((value, i) => {
                            return (<a key={i} style={{ color: "inherit", textDecoration: "none" }}
                                href={`/${value}`}>
                                <div
                                    href="/hola"
                                    onClick={() => updatePokeDex(value)}
                                    className="option"
                                    key={i}
                                    tabIndex="0">
                                    <span>{value}</span>
                                </div>
                            </a>
                            );
                        })}
                </div>
            )}

        </div>
    )
}

export default Buscador;
