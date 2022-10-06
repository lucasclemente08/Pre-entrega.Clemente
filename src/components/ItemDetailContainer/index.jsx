import React, { Component,useState,useEffect } from 'react';
import { ItemDetail } from '../ItemDetail';
import { useParams } from 'react-router-dom';


const films=[
    {id:1,images:"https://i.blogs.es/c05aee/interstellar-cartel/1366_2000.jpeg",
   title: "Interstellar",category: "films"
  },
    {
      id:2,images:"https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,w_750/v1663606048/amc-cdn/production/2/promotions/143198.jpg",
      title:"Avatar",category: "films"
    },
    {
      id:3,images:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTAWsyqEW9LCo60yzwBE4KdNedORPn3q4GHaKf_DZSgHShR3PaN",
      title:"Dahmer",category: "series"
    },
    {
      id:4,images:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR9oH77LHc8Sa5RWLvjz_6c7_UJrd7zk3_QmnloQnOdbakUYcJp",
      title:"The Walking Dead",category: "series"
    },
    
    
  ]

export const ItemDetailContainer=()=>{

    const [data,setData]= useState({})
const {detalleId} = useParams()



useEffect(()=>{
    const getData = new Promise((resolve=>{
     setTimeout(()=>{
      resolve(films)
     },2000)
    }))
    getData.then(res=>setData(res.find(film=>film.id===parseInt(detalleId))))
     }, [])

    return(
     <ItemDetail data={data} />
    )
}
export default ItemDetailContainer