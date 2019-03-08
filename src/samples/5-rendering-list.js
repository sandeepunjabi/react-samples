import React from 'react';

function ItemList(props) {
  return (
    <div>
      {props.data.map(item => {
        return <div key={item.Id}>{item.Name}</div>;
      })}
    </div>
  );
}

export default ItemList;
