import React from 'react'

const Categories = ({ eachcategory,fiterfunction }) => {
  return (
    <div>
    {
        eachcategory.map((categorie) => {
            return (
                <button className='btn' key={categorie}
                 onClick={() =>fiterfunction(categorie)}>
                    
                {categorie}</button>
            )
        })
    }
    </div>
  )
}

export default Categories