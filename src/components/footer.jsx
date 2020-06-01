import React from 'react';
import '../styles/footer.css';

const Footer = () =>{
    return(
    <div><hr/>
            <div className="grid">
                

                <a target="_blank" rel="noopener noreferrer" href="https://github.com/agustinpurita/pokefinder-backend">
                <p className="grid-item">https://github.com/agustinpurita/pokefinder-backend</p>
                </a>
                <p className= "grid-item">Hecho por Agustin Purita</p>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/agustinpurita/pokefinder-frontend">
                <p className="grid-item">https://github.com/agustinpurita/pokefinder-frontend</p>
                </a>

                
                
            </div>
            </div>
    )
}

export default Footer;