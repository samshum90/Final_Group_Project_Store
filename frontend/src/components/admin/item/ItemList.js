import React from 'react';
import ItemDetail from './ItemDetail'

const ItemList = (props) => {

	if (props.items.length === 0){
		
	  return (<p>Loading...</p>)
	}

	const items = props.items.map(item => {
	  return (
	    
            
	    <ItemDetail item={item} key={item.id}/>
	
	    
      )
      
	})

	return (
	  <ul className="component-list">
	    {items}
	  </ul>
	)
}
 export default ItemList;

