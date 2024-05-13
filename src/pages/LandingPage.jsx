import { Link, NavLink } from 'react-router-dom';



export const LandingPage = () =>{


  return(
    <div className="content">
      <div className="content__info">
        <div className="info">
          <h2 className="mio">CELESTIALES</h2>
          <button><Link className='link' to="blog">VISITAR BLOG</Link></button>
        </div>
      </div>
    </div>
  )
}