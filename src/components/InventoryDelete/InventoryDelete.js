import './InventoryDelete.scss';

function InventoryDelete({ deleteHandler, inventory, handleDelete }) {
    console.log(inventory);
    return (
        <div className='container'>
            <div className='body'>

                <h1>Delete {inventory.item_name} item?</h1>
                <p>Please confirm that you’d like to delete {inventory.item_name} from the inventory list.
                    You won’t be able to undo this action.</p>
                <div>
                    <button onClick={deleteHandler}>Cancel</button>
                    <button onClick={() => handleDelete(inventory)}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default InventoryDelete;

