import { React, useState} from 'react'
import './home.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import useAuth from '../../hooks/useAuth';



const newUser = (cadUser)=>{
  if(cadUser){
    return  <div className='visible'>Componente Modal para novo cadastro</div>
  }else{
      return <div className='invisible'>Componente Modal para novo cadastro</div>
  }
};


function Home() {
  const {signout} = useAuth();

  const [cadUser, SetCadUser] = useState(false);



  return (
    <div>
      <h1>Lista de Usuários</h1>
      <nav>
        <Button type="button" onClick={()=>SetCadUser(true)} className="btn bg-primary btn-lg m-5">New User</Button>
        <Button type="button" onClick={signout} className="btn bg-primary btn-lg m-5">Sair</Button>
      </nav>
      {newUser(cadUser)}

    </div>
  );
}

export default Home