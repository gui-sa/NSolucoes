
import { React, useState} from 'react';
import './signin.css'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
//import axios from  'axios';

function Signin({value}) {
  const {signin} = useAuth();
  const [email, setEmail ] = useState(value ? value.email : "");
  const [senha, setSenha ] = useState(value ? value.senha : "");
  const navigate = useNavigate();

  const handleSubmit = (event) =>{
    event.preventDefault();
    const res = signin(email,senha);
    navigate("/home");
    setEmail("");
    setSenha("");
  }


  return (
    <div>
      <form onSubmit={ handleSubmit }>
        <label htmlFor="nome">
          <p>Nome:</p>
          <input className='classic__textbox'
          type="text" 
          placeholder="Digite o time"
          onChange={ (e)=> setEmail(e.target.value)}
          required
          value={email}  />
        </label>
        <label htmlFor="senha">
        <input className='classic__textbox'
          type="password" 
          placeholder="Digite a senha"
          onChange={ (e)=> setSenha(e.target.value)}
          required
          value={senha}  />
        </label>
        <input className='classic__button'
        type="submit" 
        value="Cadastrar" />
      </form>
    </div>
  );
}

export default Signin