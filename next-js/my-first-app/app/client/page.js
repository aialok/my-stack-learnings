'use client'
import { useState } from "react";

const ClientPage = () => {
  const [count, setCount] = useState(0);

  return (
  <div >
    <h1 className="text-7xl">Counter</h1>
    <p className=" text-2xl my-4">{count}</p>
    <button className="btn btn-primary text-xl" onClick={()=>setCount(count+1)}>Increase</button>
  </div>
);
};

export default ClientPage;
