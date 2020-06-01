import React, { Fragment } from 'react'
import { Grid, Avatar } from '@material-ui/core';
import '../styles/pokelist.css';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    avatarImg: {
        width: "auto !important",
        height: "auto !important",
        cursor: "pointer"
    },
    containerGgrid: {
        marginTop: "40px",
        marginBottom: "5%"
    }
}

const PokeList = ({ pokemons, loading, classes, srcAvatar }) => {

    // const handleClick = (src) => {
        
    //     srcAvatar(src);
    // }

    if (loading) {
        return <div className="container-spin">
            <div className="spin" />
        </div>
    }

    return (
        <Fragment>
            <Grid className={`grid-container ${classes.containerGgrid}`} container spacing={2}>
                {pokemons.map(poke => {
                    return (
                        <Grid key={poke.id} className="grid-item" item md={4} >
                            <a href={`${poke.name}`}>
                                <Avatar className={classes.avatarImg} alt={"pokemon"} src={poke.src} ></Avatar>
                            </a>
                            <a href={`${poke.name}`}>
                                <div className="poke-name">{poke.name}</div>
                            </a>

                        </Grid>
                    )
                })
                }
            </Grid >
        </Fragment>

    )
}

export default withStyles(styles)(PokeList);