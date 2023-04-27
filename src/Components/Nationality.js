import React , { useEffect, useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nationality.css'
import Button from 'react-bootstrap/Button';
import pic from './logo.png';


function Nationality() {
    //using state variables with useState
    const [inputValue, setValue] = useState("");
    const [Result, setResult] = useState(null);
    //using useRef 
    const inputRef = useRef();
  
    //setting focus in input box
    useEffect(()=> {
      inputRef.current.focus();
    }, []);

    //async function to fetch the api 
    const handleClick = async () =>{
      const url = `https://api.nationalize.io?name=${inputValue}`;
      console.log(url)
      let response = await fetch(url);
      let data = await response.json();
      console.log(data.country);
      //displaying only the first object from the api result
      setResult(data.country[0]);  
      //displaying the output HTML element
      document.getElementById('output').style.display ='block'
    }  
    return (
      <div className='container'>
        {/* Displaying  logo */}
        <img src={pic} alt="logo" id="pic"></img><br></br>
        <input ref={inputRef} type="text" id="input" value={inputValue} onChange={(e) => setValue(e.target.value)} placeholder="Please enter your name"  />
        <br></br> <br></br>
        <Button onClick={handleClick} size="lg" variant="success"> Detect </Button>
        <br></br><br></br>
        <h5>Your name is: {inputValue}</h5>
        <h5 id='output'>
          Your predicted Nationality is: <br></br>  
          {JSON.stringify(Result)} 
          {/* using JSON.stringify to convert to string */}
        </h5>
      </div>
    )
  }
export default Nationality;  