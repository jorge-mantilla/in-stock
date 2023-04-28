import '../NotFound/NotFound.scss';
import ErrorBot from '../../assets/Icons/404-error.svg';

function NotFound() {
    return (
        <>
            <div className='notfound'>
                <div className='notfound__body'>
                    <h1 className="notfound__title">404</h1>
                    <p className="notfound__text">Can't find what you're looking for, sorry!</p>
                    <img className='notfound__img' src={ErrorBot} alt="Error Robot Icon" />
                </div>
            </div>
        </>
    );
}
export default NotFound;