
import {useRouter} from "next/router"


const Movies = ({movies}) => {
    let router = useRouter()
// const [movie,setmovie] = useState([])
    // const getMovies = async ()=>{
      
    //   setmovie(data)
    // }

    // useEffect(()=>{
    //     getMovies()
    // },[])
  return (
    <>
    <h1 style={{textAlign:"center"}}>Movies</h1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gridTemplateRows:"repeat(4,1fr)",gap:"20px",width:"90%",margin:"auto"}}>
        {movies.map((e)=> 
         <div key={e.id} onClick={()=>{
           router.push(`/movies/${e.id}`)
         }}>
           
         <img width={"100%"} src={e.Poster} alt="error" />
         <p>{e.Title}</p>
         <p>{e.Released}</p>
         <p>{e.imdbRating}</p>
        
         </div>
        )}
    </div>
    </>
  )
}
export async function getStaticProps(){
    let res = await fetch(` http://localhost:8080/movies`)
    let data = await res.json()
    return {
        props:{
            movies:data,
        },
    }
}

export default Movies