import Values from "values.js";
import SingleColor from "./SingleColor.js";
import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [number, setnumber] = useState('');
    const [list, setList] = useState(new Values('#f15025').all(10));
    
    

    
  
    const handleSubmit2 = (e) => {
      e.preventDefault();
      console.log('Number is set to --', number);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      try{
        const num = parseInt(number, 10);
    
        let colors = new Values(color).all(num)
        setList(colors)
      } catch (error) {
        setError(true);
        console.log(error);
      }
  };




    return (
        <>
            <section className="container">
                <h3>Select Divisor val:</h3>
                <form onSubmit={handleSubmit2}>
                    <input type="number" value={number} onChange={(e) => setnumber(e.target.value)} ></input>
                    <button className="btn" type="submit"> enter </button>
                </form>
            </section>

            
            <section className="container">
                <h3>color generator</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025"></input>
                    <button className="btn" type="submit"> submit </button>
                </form>
            </section>

            
            <section className="colors">
              {list.map((color,index) => {             
                return <SingleColor key = {index} {...color} index = {index}></SingleColor>
              })}
            </section>

        </>
    );
}

export default App;
