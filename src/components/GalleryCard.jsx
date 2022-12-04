import './Card.css';
import imgDefault from '../assets/img/images.png'
import Swal from 'sweetalert2';


export default function GalleyCard(props) {
    // Funcion que llama al sweetalert con la info de la Card
    const handleClick = (params) => {
        Swal.fire({
            customClass: {
                image: 'card-img-top'
            },
            title: params.title,
            text: params.text,
            imageUrl: params.url,
            showCloseButton: true,
            showConfirmButton: false,
            imageWidth: 200,
            imageHeight: 200,
            imageAlt: params.alt_text,
        })
    }

    return (
        <div key={props.item.id} className="card card_w">
            <img src={props.item.url} className="card-img-top" alt={props.item.title} />
            <div className="card-body card-title-h">
                <h5 className="card-title">{props.item.title}</h5>
            </div>
            <div className="card-body">
                <button className='btn btn-dark'
                    onClick={() => {
                        handleClick(props.item)
                    }}>
                    Descripcion
                </button>
            </div>
        </div>
    );
};