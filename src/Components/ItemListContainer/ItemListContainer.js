import { useEffect, useState } from "react"
import ItemList from "./ItemList"
const ItemListContainer = ({greetings}) => {
    const [data,setData] = useState([])
    const getData = async()=>{ try { 
       const api= await fetch ("../products.json")
       const response = await api.json()
       setData(response)
    } catch (error){
      console.log(error)  
    }}
useEffect(()=>{ getData()},[])
console.log(data);
    return(
        <div>
        <ItemList data={data}/>
        </div>
    )
}
export default ItemListContainer