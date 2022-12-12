import './css/StoreCard.css';
import imgDefault from './img/images.png';
import { MdAddShoppingCart } from "react-icons/md";


export default function GalleyCard({item}) {
    // Funcion que llama al sweetalert con la info de la Card
    const handleClick = (params) => {
        console.log('Add to Card');
    }

    return (
        <div className="card card_w">
            <img src={item.url} className="card-img-top" alt={item.name} />
            <div className="card-body card-title-h">
                <h5 className="card-title">{item.name}</h5>
                <h5 className="card-title fw-bolder">{item.price}</h5>
            </div>
            <div className="card-body">
                <button className='btn btn-success'
                    onClick={() => {
                        handleClick(item)
                    }}>
                    <MdAddShoppingCart size={'3em'}></MdAddShoppingCart>
                </button>
            </div>
        </div>
    );
};