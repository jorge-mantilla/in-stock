import './DeleteModal.scss';
import IconClose from '../../assets/Icons/close-24px.svg'

function Delete({ deleteClickHandler, inventory, handleDelete, context }) {
    console.log(inventory);

    let deleteHeader = '';
    let deleteBody = '';

    if (context === 'inventory') {
        deleteHeader = `Delete ${inventory.item_name} inventory item?`;
        deleteBody = `Please confirm that you’d like to delete ${inventory.item_name} from the inventory list.
        You won’t be able to undo this action.`;
    } else if (context === 'warehouse') {
        deleteHeader = `Delete ${inventory.warehouse_name} warehouse?`;
        deleteBody = `Please confirm that you’d like to delete ${inventory.warehouse_name} from the warehouse list.
        You won’t be able to undo this action.`;
    }

    return (
        <div className='delete-container'>
            <div className='content'>
                <div className='text'>
                    <button className= 'text__btn' onClick={deleteClickHandler}>
                        <img className='text__icon' src={IconClose} alt="x icon to close window" />
                    </button>
                    <div className='text__info'>
                        <h2 className='text__title'>{deleteHeader}</h2>
                        <p className='text__body'>{deleteBody}</p>
                    </div>
                </div>
                <div className='btns'>
                    <button onClick={deleteClickHandler} className='btns__cancel'>Cancel</button>
                    <button onClick={() => handleDelete(inventory)} className='btns__delete'>Delete</button>
                </div>
            </div>

        </div>
    )
}

export default Delete;

