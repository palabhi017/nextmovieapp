import React from 'react'
import axios from "axios"
const Movie = ({movie}) => {
    const postdata = ()=> {

    axios.post(`http://localhost:8080/wishlist`, {Poster:movie.Poster,Title:movie.Title,Released:movie.Released,imdbRating:movie.imdbRating} )
    }
  return (
    <div >
        <img width={"10%"} src={movie.Poster} alt="error" />
        <p>{movie.Title}</p>
        <p>{movie.Released}</p>
        <p>{movie.imdbRating}</p>
        <button onClick={()=> postdata()}>Add to wishlist</button>
    </div>
  )
}

export async function getStaticPaths(){
    let res = await fetch(` http://localhost:8080/movies`)
    let data = await res.json()
    return {
        paths: data.map((e)=>({params:{id: String(e.id)}})) ,
        
        fallback: false
    }
}
export async function getStaticProps(context){
   let id = context.params.id
    let res = await fetch(` http://localhost:8080/movies/${id}`)
    let data = await res.json()
    return {
        props:{
            movie:data,
        },
    }
}
export default Movie