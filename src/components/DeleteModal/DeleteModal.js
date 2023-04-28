import './DeleteModal.scss';

function Delete({ deleteHandler, inventory, handleDelete, context }) {
    console.log(inventory);

    let deleteHeader = '';
    let deleteBody = '';

    if (context === 'inventory') {
        deleteHeader = `Delete ${inventory.item_name} item?`;
        deleteBody = `Please confirm that you’d like to delete ${inventory.item_name} from the inventory list.
        You won’t be able to undo this action.`;
    } else if (context === 'warehouse') {
        deleteHeader = `Delete ${inventory.warehouse_name} warehouse?`;
        deleteBody = `Please confirm that you’d like to delete ${inventory.warehouse_name} from the inventory list.
        You won’t be able to undo this action.`;
    }

    return (
        <div className='container'>
            <div className='body'>
                <h1>{deleteHeader}</h1>
                <p>{deleteBody}</p>
                <div>
                    <button onClick={deleteHandler}>Cancel</button>
                    <button onClick={() => handleDelete(inventory)}>Delete</button>
                </div>

            </div>
        </div>
    )
}

export default Delete;

