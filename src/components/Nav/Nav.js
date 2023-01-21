import './nav.scss'
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <header className='header'>
            
         <nav className='nav'>

            <div className='logo'>
                <h1>My Kitchen</h1>
            </div>


            <ul className='nav-links'>
                <li><Link to={'/Mexican'}>Mexican</Link></li>
                <li><Link to= {'/Korean'}>Korean</Link></li>
                <li> <Link to={'/Thai'}>Thai</Link></li>
                <li><Link to= {'/Italian'}>Italian</Link></li>
            </ul>
            

         </nav>
        </header>

    )
}

export default Nav 