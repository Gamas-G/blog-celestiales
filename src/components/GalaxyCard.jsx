import { Link, NavLink } from 'react-router-dom';


export const GalaxyCard = ( {data} ) =>{


    return(
        <div className="galaxy">
            <div className="galaxy-img">
                {/* <Link to="view" param> */}
                    <img src={data.img} alt="" />
                {/* </Link> */}
            </div>
            <h2>{data.nombre}</h2>
            <h3>Galaxia - {data.tipo}</h3>
            <p>{data.descripcion}</p>
            <br />
            <div className="bar"></div>
        </div>
    )
}