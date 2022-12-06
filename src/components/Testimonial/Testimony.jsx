export default function Testimony(props) {
    return (
        <div class="carousel-item">
            <div class="icon-area">
                <i class="fa fa-comments"></i>
            </div>
            <div class="content text-center">
                <p>
                    {props.testimony}
                </p>
                <div class="persona">
                    <img src={props.img} alt="" />
                </div>
                <h5>{props.name} </h5>
            </div>
        </div>
    )
}