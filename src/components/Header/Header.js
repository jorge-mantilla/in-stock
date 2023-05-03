import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/Logo/InStock-Logo.svg';
import '../Header/Header.scss';

function Header() {
    const location = useLocation();

    return (
        <>
            <header className='navbar'>
                <div className='navbar__body'>
                    <div className='navbar__sec'>
                        <div className='navbar__header'>
                            <Link to={'/'} className='logo--link'>
                                <img className='navbar__logo logo' src={Logo} alt="Instock Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className='navbar__sec'>
                        <Link to={'/warehouses'} id='navbar--link' className={`navbar__links ${location.pathname === '/warehouses' ? 'current-page--active' : 'current-page--inactive'}`}>
                            <button className='navbar__btn' type='submit'>Warehouses</button>
                        </Link>
                        <Link to={'/inventories'} id='navbar--link' className={`navbar__links ${location.pathname === '/inventories' ? 'current-page--active' : 'current-page--inactive'}`}>
                            <button className='navbar__btn' type='submit'>Inventory</button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
