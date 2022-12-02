

function Backup() {
  return (
    <>
    <header className="contenedoruno ">
<div className="contenedordos ">
  <div className='logo'>
    <img src="//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/600px-Facebook_f_logo_%282019%29.svg.png"

    />
  </div>

  <nav className=" navegacion "  >
    <div className="navegaciondos" >
      <Link 
      className= {` ${ (location.pathname ==='/') ? 'modificado' : 'normal' } `}
      to="/"
      > Inicio </Link >
      <Link 
      className= {` ${ (location.pathname ==='/nosotros') ? 'modificado' : 'normal' } `}
      to="/nosotros" > nosotros</Link >
      <Link > Nosotros </Link >

      <Link 
      className= {` ${ (location.pathname ==='/blog') ? 'modificado' : 'normal' } `}
      to="/blog" > Blog </Link >

      <Link 
      className= {` ${ (location.pathname ==='/Contacto') ? 'modificado' : 'normal' } `}
      to="/Contacto" > Contacto </Link >

       <Link 
      className= {` ${ (location.pathname ==='/Galeria') ? 'modificado' : 'normal' } `}
      to="/Galeria" > Galeria </Link >
      
    </div>
  </nav>
</div>


</header>
    
    
    
    
    </>
  )
}

export default Backup