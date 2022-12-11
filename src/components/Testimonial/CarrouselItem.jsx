export default function CarrouselItem({props}) {
    if (props.id === 1) {
        return (
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={(props.id - 1).toString()}
                className="active"
                aria-current="true"
                aria-label={`Testimonio ${props.id}`}
            ></button>)
    }
    else {

        return (
            <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={(props.id - 1).toString()}
                aria-label={`Testimonio ${props.id}`}
            ></button>)
    }
}