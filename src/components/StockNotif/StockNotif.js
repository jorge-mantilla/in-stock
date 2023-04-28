import React from 'react';
import '../StockNotif/StockNotif.scss';

function stockNotification() {

    // STATUS TESTING DELETE ONCE DONE
    let status = 'active';
    status = 'inactive';
    // STATUS TESTING DELETE ONCE DONE

    const statusClassName = `inventory-item__text status-${status}`;

    return (
        <p className={statusClassName}>
            {status === 'active' ? 'IN STOCK' : 'OUT OF STOCK'}
        </p>
    );
}

export default stockNotification;