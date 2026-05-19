import React,{useState, useEffect} from "react";
import axios from "axios";
import './Home.css';

function Home() {
  const [data, setdata]=useState([]);
  useEffect(()=>{
    axios.get("https://potterapi-fedeperin.vercel.app/en/books").then((res)=>{
      setdata(res.data);
    })
  }, [data]);
  return (
    <div className="main">
     {
      data.map((obj)=>{
        return(
          <div className="card">
            <h1>{obj.title}</h1>
            <p>{obj.description}</p>
            <img src={obj.cover} alt="" />
          </div>
        )
      })
     }
    </div>
  );
}

export default Home;