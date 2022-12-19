import TodaContendio from "../hooks/TodaContendio"
import React, { useState, useEffect } from 'react';



function Carrito() {


  const [total , settotal ] = useState(0)
  const { carrito , actulizarvalor ,  eliminadoguitarra   } = TodaContendio()


  useEffect(() => {
    const calculototal = carrito.reduce( (total , producto )=> total+ (producto.cantidad*producto.precio) , 0  )
 
     settotal (calculototal)
 
   }, [carrito]);
 

  return (
 <>
 
 <main className='contenedor  '>
          <h1 className='heading'>carrito de compras</h1>
          <div className='contenidoX  '>
              <div className='carrito'>
                  <h2 className="articulo" >Articulo</h2>
                  {carrito?.length === 0
                      ? 'carrito vacio '
                      : carrito?.map((producto) => (
                            <div key={producto.id} className='producto'>
                                <div>
                                    <img
                                        src={producto.imagen}
                                        alt={`imagen del producto  ${producto.nombre} `}
                                    />
                                </div>
                                <div>
                                    <p className='nombre'>{producto.nombre} </p>
                                    <div className="orden">
                                    <p>Cantidad : </p>
                                    <select
                                        value={producto.cantidad}
                                        className='select'
                                        onChange={(e) =>
                                            actulizarvalor({
                                                cantidad: +e.target.value,
                                                id: producto.id,
                                            })
                                        }>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                    </div>
                                    <p className='precio'>
                                       
                                        $<span> {producto.precio} </span>
                                    </p>
                                    <p className='subtotal'>
                                     
                                        subtotal $
                                        <span>
                                           
                                            { (parseInt( producto.cantidad * producto.precio))  }
                                        </span>
                                    </p>
                                </div>
                                <button
                                    type='button'
                                    className='btn_eliminar'
                                    onClick={() => eliminadoguitarra(producto.id)}>
                                    <div className='extra'> X </div>
                                </button>
                            </div>
                        ))}
              </div>
              <aside className='resumen'>
                  <h3>Resumen del pedido</h3>
                  <p>Total a pagar :${ (parseInt(total)) } </p>
              </aside>
          </div>
      </main>
 
 
 
 
 </>

    
  )
}

export default Carrito