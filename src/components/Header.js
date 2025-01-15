import { Link } from 'react-router-dom'

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <h1 className="display-1 text-center text-capitalize">my store</h1>
                <ul className="nav justify-content-around">
                    <li className="nav-item">
                    <Link to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link to='/about'>About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/store'>Store</Link>
                    </li>
                </ul>
            </div>
        </header> 
    )
}

export default Header