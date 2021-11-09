import React from 'react'

export default function DropdownItem(props) {


    const itemClicked = () => {
        console.log('Item clicked: ' , props.text)
        props.itemChanged(props.text);
    }

    return (
        <li><a onClick={itemClicked} className="dropdown-item" href="#">{props.text}</a></li>
    )
}
