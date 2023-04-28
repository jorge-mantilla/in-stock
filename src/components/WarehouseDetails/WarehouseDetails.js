

function WarehouseDetails(props) {

    const specificWarehouse = props.specificWarehouse


    return (
    <>
        <div>
            <div>
                <h3>Warehouse Address</h3>
                <div>{specificWarehouse.address}</div>
            </div>
            <div>
                <h3>Contact Name</h3>
                <div>{specificWarehouse.warehouse_name}</div>
            </div>
            <div>
                <h3>Contact Information</h3>
                <div>{specificWarehouse.contact_phone} <br/> {specificWarehouse.contact_email}</div>
            </div>
        </div>
    </>
);
}
export default WarehouseDetails;