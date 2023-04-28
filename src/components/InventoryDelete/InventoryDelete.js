import './InventoryDelete.css';

//try using a useState

function InventoryDelete() {

    return (
        <div className='container'>
            <div className='body'>
                <h1>Delete Television inventory item?</h1>
                <p>Please confirm that you’d like to delete Television from the inventory list.
                    You won’t be able to undo this action.</p>
                <div>
                    <button>Cancel</button>
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default InventoryDelete;