import { Link } from "react-router-dom"

const Card =(props)=> {

    return (
        <div className="col">
            <Link to={`/store/${props.id}`} key={props.id}>
            <div className="card border-success h-100 product-card">
                <div className="card-body">
                <h3 className="card-heading">{props.product}</h3>
                <p className="card-text price">${props.price}.00</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Card