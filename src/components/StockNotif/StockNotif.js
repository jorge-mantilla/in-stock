import React from 'react';
import '../StockNotif/StockNotif.scss';

function StockNotification({ quantity }) {
    const status = quantity > 0 ? 'active' : 'inactive';
    const statusClassName = `inventory-item__text status-${status}`;

    return (
        <p className={statusClassName}>
            {status === 'active' ? 'IN STOCK' : 'OUT OF STOCK'}
        </p>
    );
}

export default StockNotification;
