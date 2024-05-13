import { Footer } from "../components/Footer"
import img from "../assets/img/galaxia1.jpg";
import img2 from "../assets/img/galaxia3.jpg";
import { useFetch } from "../hooks/useFetch";
import { GalaxyCard } from "../components/GalaxyCard";




export const BlogPage = () =>{

  const { data, isLoading } = useFetch();

  return(
    <>
      <div className="header__blog">
        <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><h1>BLOG</h1><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
      </div>
      <div className="content__galaxys">
        <section className="galaxys-container">

          {
            ( data === undefined && <p>CARGANDO...</p>)
          }

          {
            data.map( d => (
              <GalaxyCard 
                data={d}
              />
            ))
          }
          
        </section>
      </div>
      <Footer />
    </>
  )
}