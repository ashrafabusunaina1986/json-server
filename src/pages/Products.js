import React, { useEffect, useState } from 'react'

function Products(props) {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/products`)
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
  return props.data && <div>
    {
        props.data.reverse().map((item,i)=>{
            return <div key={i}>
                {item.name}
            </div>
        })
    }
  </div>
}

export default Products