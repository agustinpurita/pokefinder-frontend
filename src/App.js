import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import axios from 'axios';
import Footer from './components/footer';
import Titulo from './components/titulo'
import Buscador from './components/buscador'
import PokeList from './components/pokeList'
import Pag from './components/pagination'
import PokeInfo from './components/pokeInfo'
import './styles/app.css'



function App() {

    const [pokemonsTotal, setPokemonsTotal] = useState([]);
    const [pokemonsPage, setPokemonsPage] = useState([]);


    const [currentPage, setCurrentPage] = useState(1);
    const [pokesPerPage] = useState(12);

    // CONTROL DE SHOW/HIDE SOBRE SPINNER "LOADING"
    const [loading, setLoading] = useState(false);



    async function getPokemonsPage() {

        setLoading(true);

        let response = await axios(`https://poke-finder.herokuapp.com/api/pokemons/page/${currentPage}?pokesPerPage=${pokesPerPage}`);
        response = response.data;

        setPokemonsPage(response);

        setLoading(false);

    }

    useEffect(() => {
        getPokemonsPage();
    }, [currentPage])


    // FUNCION PARA ACTUALIZAR ESTADO Y ESTABLECER POKEMONES TOTALES
    const setPokes = (pokes) => {
        setPokemonsTotal(pokes);
        console.log(pokes);
    }

    // FUNCION PARA ACTUALIZAR ESTADO Y CAMBIAR DE PAGINA

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(pageNumber);
    };

    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={() =>
                        (<div className="page-container" >
                            <div className="content-wrap" >
                                <Titulo />
                                <Buscador setPokes={setPokes} />
                                <PokeList loading={loading} pokemons={pokemonsPage} />
                            </div>
                            <Pag pokesPerPage={pokesPerPage}
                                totalPokes={pokemonsTotal.length}
                                paginate={paginate} />
                            <Footer />
                        </div>
                        )}
                />
                <Route
                    exact
                    path="/:name"
                    render={() =>
                        (<div className="page-container" >
                            <div className="content-wrap" >
                                <PokeInfo />
                            </div>
                            <Footer />
                        </div>
                        )}
                /> </Switch>
        </BrowserRouter>
    );
}

export default App;