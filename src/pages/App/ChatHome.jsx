import { useState } from "react";
import classes from "./Root.module.css";


const options = [
  {text : 'Category 1', value :'1'},
  {text : 'Category 2', value :'2'},
  {text : 'Category 3', value :'3'},
  {text : 'Category 4', value :'4'},
  {text : 'Category 5', value :'5'},
]
const ChatHome = () => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const layoutInputHandler = (e) =>{
    setSelectedOption(e.target.value)
  };

  return (
    <div className={classes.container}>
      <div className={classes.categoryContainer}>


      <select className={classes.dropdown} value={selectedOption} onChange={layoutInputHandler}>
        <option value="1">Category One</option>
        <option value="2">Category Two</option>
        <option value="3">Category Three</option>
        <option value="4">Category Four</option>
        <option value="5">Category Five</option>
      </select>

          
      
      
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default ChatHome;
