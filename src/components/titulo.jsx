import React from 'react';
import '../styles/titulo.css'

const Titulo = () =>{
    return(
        <div className= "titulos">
        {/* <h1 className="titulo-principal">Pokemon Finder</h1> */}
        <img className="titulo-img" alt="imagen-titulo"src="https://fontmeme.com/permalink/200531/a83b8751e68adc7081ab1f37b5a3c6ad.png"></img>
        <h3 className="subtitulo-principal">El que quiere Pokemons, que los busque.</h3>
        </div>
    )
}

export default Titulo;