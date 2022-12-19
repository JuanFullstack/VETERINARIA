import { useState, useEffect } from 'react';
import StoreCard from './StoreCard';
import './css/Store.css';
import ReactPaginate from 'react-paginate';


export default function () {



    // Set de Datos tomados de archio JSON local a traves de JSON-Server (npm i --save json-server)
    const [data, setData] = useState([])
    // Pagina Actual del Paginador
    const [page, setPage] = useState(0);
    // Set de Imagenes tomados de Pixabay a traves de su API
    const [image, setImage] = useState([]);

    // Cantidad de Card's que se muestran por pagina
    const cardXPages = 15;
    // Valor desde el cual se muestran los datos
    const pagesRead = page * cardXPages;
    // Funcion que cambia de Pagina.
    const changePage = ({ selected }) => {
        setPage(selected)
    };

    // Carga de Array de Imagenes
    useEffect(() => {
        async function fetchImage() {
            const resp = await fetch(`https://pixabay.com/api/?key=31804785-7d2f4dc8a1e4079b6587c1a03&q=pill+tablet&image_type=photo&pretty=true`)
            const json = await resp.json()
            setImage(json.hits)
        }

        fetchImage()
    }, [])

    // Carga de Array de Datos
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`https://my.api.mockaroo.com/products.json?key=edb702b0`)
            const json = await resp.json()
            setData(json)
        }

        fetchData()
    }, [])

    // Funcion que retorna un map de un slice del array de datos
    const viewCards = data.slice(pagesRead, pagesRead + cardXPages)
        .map(item => {
            const index = Math.floor(Math.random() * 20);
            item.url = image[index].webformatURL;
            return (
                <StoreCard key={item.id} item={item} />
            )
        }
        );

    return (
        <section className='store'>
            <div className='title text-center'>
                <h4>Tienda para Mascotas</h4>
                <h2 className='display-3'>Lo mejor para nuestros Clientes!!!</h2>
            </div>
            <div className="items-store">
                {viewCards}
                <ReactPaginate
                    previousLabel={"<<"}
                    nextLabel={">>"}
                    pageCount={Math.ceil(data.length / cardXPages)}
                    onPageChange={changePage}
                    containerClassName={"paginationBtns"}
                    previusLinkClassName={"previousBtn"}
                    nextLinkClassName={"nextBtn"}
                    disabledClassName={"paginationDisabled"}
                    activeClassName={"paginationActive"}
                    activeLinkClassName={"paginationActive"}
                />
            </div>
        </section>
    );
}