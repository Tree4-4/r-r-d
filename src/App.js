import { Routes, Route } from 'react-router-dom'
import { useState, useEffect} from 'react'

import data from "./data"
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import Single from './components/Single'
import Error from './components/Error'

const App =()=> {

    const [ products, setProducts] = useState([])

    useEffect(()=> {
        setProducts(data)
    }, [])


    return (
        <>
            <Header />
            <Routes>
            {/** <Route path element /> */}
                <Route path='/' element={ <Home />} />
                <Route path='/about' element={ <About />} />
                <Route path='/store' element={ <Store products={products} />} />
                <Route path='/store/:id' element={ <Single />} />
                <Route path='/error' element={ <Error />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App