
import { React, useState } from 'react';
import './signin.css'
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'reactstrap';
//import axios from  'axios';

function Signin({ value }) {
  const { signin } = useAuth();
  const [email, setEmail] = useState(value ? value.email : "");
  const [senha, setSenha] = useState(value ? value.senha : "");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const res = signin(email, senha);
    navigate("/home");
    setEmail("");
    setSenha("");
  }


  return (
    <div className='container vh-100 d-flex flex-column justify-content-center'>
      <div className='bg-dark bg-gradient text-white w-25 mx-auto fs-4'>
        <h2 className='text-white w-100 text-center fs-1'>Sign In</h2>
        <form className='d-flex flex-column justify-content-center '
          onSubmit={handleSubmit}>
          <div className='mb-3 d-flex flex-column justify-content-center mx-3 mt-5'>
            <label htmlFor="email" className='form-label'>
              <p>E-mail:</p>
              <input className='form-control'
                type="email"
                placeholder="Digite Seu E-mail"
                onChange={(e) => setEmail(e.target.value)}
                required
                value={email} />
            </label>
          </div>
          <div className='mb-3 d-flex flex-column justify-content-center mx-3'>
            <label htmlFor="senha">
              <p>Senha:</p>
              <input className='form-control'
                type="password"
                placeholder="Digite a senha"
                onChange={(e) => setSenha(e.target.value)}
                required
                value={senha} />
            </label>
          </div>
          <Button type="submit" className="btn bg-primary btn-lg m-5">Entrar</Button>
        </form>
      </div>
    </div>
  );
}

export default Signin