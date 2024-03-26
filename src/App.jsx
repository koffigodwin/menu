import React, { useState } from "react";
import data from './data'
import Allmenu from "./Allmenu";
import Categories from "./Categories";

const tempCategories = data.map((item) => item.category);
const tempSet = new Set(tempCategories);
const tempItems = ['all', ...tempSet];
// console.log(tempItems);

const App = ({ }) => {
  const [menu , setmenu] = useState(data)
  const [Categorie,setcategories] = useState(tempItems)
  

  const fiterfunction = (category) =>{
    if(category === 'all'){
      setmenu(data)
      return;
    }
    const newcategory = data.filter((item) =>
      item.category === category)
    setmenu(newcategory)
  }
  return (
    <main>
      <div className="headers">
        <h1>Our Menu</h1>
        <Categories eachcategory ={Categorie}  fiterfunction ={fiterfunction}/>
    </div>
      <Allmenu menus={menu} />
    </main>
  )
};
export default App;
