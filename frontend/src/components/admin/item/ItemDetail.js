import React  from 'react';

const ItemDetail = (props) => {
    console.log("il", props)
    return (
    <li>
        {props.item.name}
    </li>
    )
}

export default ItemDetail;