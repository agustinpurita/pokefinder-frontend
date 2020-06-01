import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import '../styles/pokeinfo.css'

const PokeInfo = () => {

    const [poke, setPoke] = useState({});
    const [avatar, setAvatar] = useState("");

    async function getPoke() {

        // LEO URL PARA SABER QUE POKEMON SE CLICKEO Y CONSIGO SU INFO

        let response = await axios(`https://poke-finder.herokuapp.com/api/pokemons${window.location.pathname}`);
        let responseInfo = response.data;
        let responseAvatar = responseInfo.sprites.front_default;

        console.log(response);

        setPoke(responseInfo);
        setAvatar(responseAvatar);

    }

    useEffect(() => {
        getPoke();
        // setAvatar()
    }, [])

    return (
        <div>
            {(avatar !== "") && (
                <div className="pokeinfo-container" >
                    <img className="pokeinfo-foto" alt="pokeinfo-foto" src={avatar} ></img >
                    <h1 className="pokeinfo-name">{poke.name.toUpperCase()}</h1>
                    <h2 className="pokeinfo-height">Altura:   {poke.height*10} cm</h2>
                    <h2 className="pokeinfo-weight">Peso:   {poke.weight/10} kg</h2>
                    <h2 className="pokeinfo-exp">Experiencia base:   {poke.base_experience}</h2>
                    <a href="/"><Button variant="contained" color="primary"> Volver </Button></a>
                </div>
            )}
        </div >
    )
}
export default PokeInfo;