import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Signin, Home } from './pages';
import useAuth from './hooks/useAuth';
import { AuthProvider } from './context/auth';

const Private = ({ Item }) => {
  const { signed } = useAuth();
  return signed ? <Item /> : <Signin />;
}


function App() {
  return (
    <div className="container w-80 vh-100 mt-30">
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route exact path="/home" element={<Private Item={Home} />} />
              <Route path='/' element={<Signin />} />
              <Route path='*' element={<Signin />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
