import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo/InStock-Logo.svg';
import '../Footer/Footer.scss';

//installed axios
// npm i axios dotenv react-com react-router-dom scss
//git repo check

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className='footer__body'>
                    <p className='footer__text'>© InStock Inc. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;