import { useState, useEffect } from 'react';
import GalleryCard from './GalleryCard';
import './css/Gallery.css';
import ReactPaginate from 'react-paginate';
// import Data from "../data/mock_data_gallery.json"


export default function Gallery() {
    // Varibles con Estados ReactJS
    // Set de Datos tomados de archio JSON local a traves de JSON-Server (npm i --save json-server)
    const [data, setData] = useState([])
    // Pagina Actual del Paginador
    const [page, setPage] = useState(0);
    // Set de Imagenes tomados de Pixabay a traves de su API
    const [image, setImage] = useState([]);

    // Cantidad de Card's que se muestran por pagina
    const cardXPages = 8;
    // Valor desde el cual se muestran los datos
    const pagesRead = page * cardXPages;
    // Funcion que cambia de Pagina.
    const changePage = ({ selected }) => {
        setPage(selected)
    };

    // Carga de Array de Imagenes
    useEffect(() => {
        async function fetchImage() {
            const resp = await fetch(`https://pixabay.com/api/?key=31804785-7d2f4dc8a1e4079b6587c1a03&q=animals+cat&image_type=photo&pretty=true`)
            const json = await resp.json()
            setImage(json.hits)
        }

        fetchImage()
    }, [])

    // Carga de Array de Datos
    useEffect(() => {
        async function fetchData() {
            const resp = await fetch(`http://localhost:3000/data`)
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
                                console.log(image[index]);
                                return (
                                    <GalleryCard item={item} />
                                )
                            }
                        );

    return (
        <div className='gallery'>
            <div className='items-gallery'>
                {viewCards}
            </div>
            <div className='cont-paginator'>
                {/* Componente ReactJS de paginado */}
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
        </div>
    );
};