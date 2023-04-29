import './DeleteModal.scss';
import IconClose from '../../assets/Icons/close-24px.svg'

function Delete({ deleteHandler, inventory, handleDelete, context }) {
    console.log(inventory);

    let deleteHeader = '';
    let deleteBody = '';

    if (context === 'inventory') {
        deleteHeader = `Delete ${inventory.item_name} inventory item?`;
        deleteBody = `Please confirm that you’d like to delete ${inventory.item_name} from the inventory list.
        You won’t be able to undo this action.`;
    } else if (context === 'warehouse') {
        deleteHeader = `Delete ${inventory.warehouse_name} warehouse?`;
        deleteBody = `Please confirm that you’d like to delete ${inventory.warehouse_name} from the inventory list.
        You won’t be able to undo this action.`;
    }

    return (
        <div className='delete-container'>
            <div className='content'>
                <div className='content__textbox'>
                <img className= 'content_icon'src={IconClose}/>
                    <h2>{deleteHeader}</h2>
                    <p>{deleteBody}</p>
                </div>
                <div className='content__btns'>
                    <button onClick={deleteHandler} className='content__btns-cancel'>Cancel</button>
                    <button onClick={() => handleDelete(inventory)} className='content__btns-delete'>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default Delete;

