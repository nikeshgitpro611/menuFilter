import { useState } from "react";
import menu from "./data";
import "./App.css";
import Title from "./Title";
import Menu from "./Menu";
import Category from "./Category";

// const tempCategory = menu.map((item)=> item.category)
// console.log('tempCategory : ', tempCategory);
// const tempSet = new Set(tempCategory);
// console.log('tempSet : ', tempSet);
// const tempItems = ['all', ...tempSet];
// console.log('tempItems : ', tempItems);

const allCategores = ["all", ...new Set(menu.map((item) => item.category))];
// console.log("allCategores : ", allCategores);

function App() {
  const [menuItem, setMenuItem] = useState(menu);
  const [category, setCategory] = useState(allCategores);
  // console.log('category : ', category);
  const filterItems = (category) =>{
    if (category === 'all') {
      setMenuItem(menu);
      return;
    }
    const newItems  = menu.filter((items)=> items.category === category);
    console.log('filterNew : ', newItems);
    setMenuItem(newItems);
  }

  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Category categorys = {category} filterItem = {filterItems}/>
        <Menu items={menuItem} />
      </section>
    </main>
  );
}

export default App;
