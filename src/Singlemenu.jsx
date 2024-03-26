import React from 'react'

const Singlemenu = ({id,title,price,img,desc,categorie}) => {
  return (
    <article className='menu-item' key={id}>
        
       <div  className="single">
       <img src={img} alt={title}  className='img'/>
       <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
       </div>
    </article>
  )
}

export default Singlemenu