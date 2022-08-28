import {Link} from 'react-router-dom'
import './erro.css'


function Erro(){
    return(
        <div className='not-found'>
            <h1>Erro 404</h1>
           <img src='https://www.lifewire.com/thmb/pGMhoCAF5a56wvVtPAWct8HdUPc=/3000x2000/filters:fill(auto,1)/404-not-found-error-explained-2622936-Final-fde7be1b7e2e499c9f039d97183e7f52.jpg' alt='erro404'/>

            <Link to= '/'>Veja nossa pagina de filmes</Link>
        </div>
    )
} 

export default Erro