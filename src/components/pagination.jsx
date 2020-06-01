import React from 'react';
import { Pagination } from '@material-ui/lab';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    pagination: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "1rem"
    }
}

const Pag = ({ pokesPerPage, totalPokes, paginate, classes }) => {

    const pageNumbers = [];

    // ESTABLEZCO NUMERO DE PAGINAS A PARTIR DE
    // LA DIVISION DE LOS POKEMONES TOTALES POR LOS POKEMONES A MOSTRAR POR PAG
    for (let i = 1; i <= Math.ceil(totalPokes / pokesPerPage); i++) {
        pageNumbers.push(i);
    }

    // EJECUTA FUNCION PASADA COMO PROP(paginate) PARA ACTUALIZAR ESTADO DE APP
    const handleChange = (event, value) => {
        paginate(value);
    };

    return ( <
        Pagination className = { classes.pagination }
        count = { pageNumbers.length }
        onChange = { handleChange }
        variant = "outlined"
        color = "primary" / >
    )
}

export default withStyles(styles)(Pag);