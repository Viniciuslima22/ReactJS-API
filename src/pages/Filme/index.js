import {useEffect, useState} from "react";
import {useParams, useNavigate} from 'react-router-dom';
import api from "../../service/Api";
import './filme.css'
import { toast } from 'react-toastify'


function Filme(){
  const { id } = useParams()
  const navigate = useNavigate()
  const [filme, setFilme] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {  async function loadFilme(){
   await api.get(`/movie/${id}`, {
    params: {
      api_key:"8a4020281ffe5ace8f1010868b581ac3",
      language: "pt-BR",
    }
   }) .then((response)=>{
    setFilme(response.data)
    setLoading(false)
   }) .catch(() =>{
    console.log("Filme não encontrado")
    navigate("/", {replace: true})
    return
   })
  } 
   loadFilme()

   return () => {
    console.log('Componente desmontado')
   }
  }, [navigate, id])


  function salvarFilme(){
  const minhaLista = localStorage.getItem("@PrimeFlix")  //VERIFICAÇAO DA LISTA DE FILMES SALVOS
  let filmesSalvos = JSON.parse(minhaLista) || []

  const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)
  if(hasFilme){
    toast.warn('Esse filme já está na sua lista')
    return
  }
    filmesSalvos.push(filme)
    localStorage.setItem("@PrimeFlix", JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso!')
  }

    if(loading){
      return(
        <div className="filme-info">  
          <h1> Carregando detalhes</h1>
        </div>
      )
    }
    
  return(
      <div className="filme-info">
        <h1>{filme.title}</h1>
        <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}/>
        <h3> Sinopse </h3>
        <span>{filme.overview}</span>
        <strong>Avaliação: {filme.vote_average}</strong>

        <div className="area-button">
        <button onClick={salvarFilme}>Salvar</button>
          <button><a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${filme.title} Trailer` }>Trailer</a></button>
       </div>
      
      </div>


      
    )
  }
  
  export default Filme;