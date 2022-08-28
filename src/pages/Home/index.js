 import {useEffect, useState} from "react";
 import api from "../../service/Api";
 import {Link} from 'react-router-dom';
 import './home.css';

//https://api.themoviedb.org/3/movie/popular?api_key=8a4020281ffe5ace8f1010868b581ac3&language=pt-BR 

function Home(){

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    async function loadFilmes(){
           
      const response = await api.get("movie/popular", {
        params:{ 
        api_key:"8a4020281ffe5ace8f1010868b581ac3",
        language: "pt-BR",
        page: 1,    
               }
      
              }) 
               //console.log(response.data.results.slice(0 ,10))
               setFilmes(response.data.results.slice(0 ,10))
               setLoading(false)
    }

    loadFilmes()
  }, [])


     if(loading){
      return(
      <div>
        <h2>Carregando Filmes....</h2>
      </div>
      )
     }

    return(
      <div className="container">
       <div className="listaF">
              {filmes.map((filme)=> {
                 return(
                  <article key={filme.id}>
                    <strong>{filme.title}</strong>
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}/>
                    <Link to={`/filme/${filme.id}`}> Acessar</Link>
                  </article>
                 )
              })}
       </div>
      </div>
    )
  }
  
  export default Home;