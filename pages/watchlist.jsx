import {useRouter} from "next/router"
import axios from "axios"
// import { useState } from "react"

const Watchlist = ({wishlist}) => {
    // let router = useRouter()
// const [data, setdata] =useState(false)
    const delMovies =  (id)=>{
      axios.delete(`http://localhost:8080/wishlist/${id}`)
     window.location.reload()
   
    }

    // useEffect(()=>{
    //     getMovies()
    // },[])
  return (
    <>
    <h1 style={{textAlign:"center"}}>wishlist</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"repeat(4,1fr)",gap:"20px",width:"90%",margin:"auto"}}>
        {wishlist.map((e)=> 
         <div key={e.id}>
           
         <img width={"100%"} src={e.Poster} alt="error" />
         <p>{e.Title}</p>
         <p>{e.Released}</p>
         <p>{e.imdbRating}</p>
         <button onClick={()=> delMovies(e.id)}>Remove</button>
         </div>
        )}
    </div>
    </>
  )
}
export async function getStaticProps(){
    let res = await fetch(` http://localhost:8080/wishlist`)
    let data = await res.json()
    return {
        props:{
            wishlist:data,
        },
    }
}

export default Watchlist