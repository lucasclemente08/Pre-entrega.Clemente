import React,{useState,useEffect} from 'react';
import Title from '../Title';
import {getFirestore,collection,getDocs,query,where}  from 'firebase/firestore'
import ItemList from '../ItemList';
import { useParams } from 'react-router-dom';





export const ItemListContainer=(props)=>{
    
  const [data,setData] = useState([])
  

  const {categoriaId}=useParams(); 
  
  useEffect(()=>{
 
    const queryDb=getFirestore()
    const queryCollection= collection(queryDb,"products")

  if(categoriaId){
    const queryFilter=query(queryCollection,where('category','==',categoriaId))
    getDocs(queryFilter).
    then(res=>setData(res.docs.map(product=>({id:product.id,...product.data()}))))
  }
  else{
    getDocs(queryCollection).
    then(res=>setData(res.docs.map(product=>({id:product.id,...product.data()}))))
  }


  }, [categoriaId])


  
  return(
          <>
  
          <Title greeting={props.texto}/>
         <ItemList data={data} />
      
          </>
    )}

export default ItemListContainer