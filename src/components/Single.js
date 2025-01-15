import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"

import data from '../data'

const Single =()=> {

    const params = useParams()

    // console.log(params.id)

    const [ product, setProducts ] = useState({})

    useEffect(()=>  {
        setProducts(data[params.id - 1])
    }, [])

    return (
        <main className="main">
            <div className="container">
                <div class="col-7">
                    <img src="https://via.placeholder.com/50x50"alt="placeholder img" class="img-fluid image" className="img-fluid image rounded" />
                </div>
                <div className="col-5">
                    <h2 classNam="display-4 text-capitalized">{product.product}</h2>
                    <p className="price-text">${product.price}.00</p>
                </div>
            </div>
        </main>
    )
}

export default Single