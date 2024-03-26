import React from 'react'
import Singlemenu from './Singlemenu'


const Allmenu = ( { menus }) => {
  return (
    <div className="section">
    <div className='section-center'>

     {
        menus.map((menu) =>{
           return <Singlemenu key={menu.id} {...menu}></Singlemenu>
        })
     }
    </div>
    </div>
  )
}

export default Allmenu