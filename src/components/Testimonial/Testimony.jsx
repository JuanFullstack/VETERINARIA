export default function Testimony({props}, {first}) {
    if (props.id === 1) {
        return (
            <div className="carousel-item active">
                <div className="icon-area">
                    <i className="fa fa-comments"></i>
                </div>
                <div className="content text-center">
                    <p>
                        {props.testimony}
                    </p>
                    <div className="persona">
                        <img src={props.img} alt="" />
                    </div>
                    <h5>{props.name} </h5>
                </div>
            </div>
        )
    } else {
        return (
            <div className="carousel-item">
                <div className="icon-area">
                    <i className="fa fa-comments"></i>
                </div>
                <div className="content text-center">
                    <p>
                        {props.testimony}
                    </p>
                    <div className="persona">
                        <img src={props.img} alt="" />
                    </div>
                    <h5>{props.name} </h5>
                </div>
            </div>
        )
    }

}