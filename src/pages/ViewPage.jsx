



export const ViewPage = (data) =>{

  console.log('EN EL VIEW');
  console.log(data);
  if(data.nombre === undefined ){
    console.log('NO HAY NADA');
  }else{
    console.log('SI HAY');
    console.log(data);
  }
  return(
    <div>
    { ( data.nombre === undefined && <p>Cargando...</p>) }


    <h1>NOMBRE DE GALAXIA</h1>
    <img src="https://www.astronomia-iniciacion.com/wp-content/uploads/2013/06/m31-comolli-med.jpg.webp" style={{width:450}} alt="" />
    <h2>Tipo de galaxia</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci hic, impedit perspiciatis repellendus labore nesciunt, saepe ipsum cumque quidem expedita sequi suscipit eligendi cupiditate mollitia nulla autem vero veniam nam.</p>
    </div>
  )
}