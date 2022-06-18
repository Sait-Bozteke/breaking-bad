import React from 'react'

const CharacterGrid = ({items}) => {
  return (
    <div className='cards'>
        {items.map(item=>(
            <h1>{item.name}</h1>
        ))}
        
     </div>
  )
}

export default CharacterGrid