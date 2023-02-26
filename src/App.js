
import { login } from './utils';
import './index.css';
import { useState } from 'react';

// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - ok ! O botão de login deve disparar a função login(), importada no topo deste arquivo, e passar os dados necessários.
// todo - OK ! Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - ok ! Desabilite o botão de Login equanto você está executando o login.
// todo - ok ! Mostre uma mensagem de erro de login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa de Login.
// todo - ok ! Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login() para entender como ter sucesso na requisição.




function App() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('')
  const [errorMessage,setErrorMessage] = useState('');
  const [isLoading,setIsLoading] = useState(false);


 const onLoginClick = async () => {
   setIsLoading(true);
  
  try {
    let ret = await login({email,password});
    setErrorMessage('');
    alert("Login efetuado com sucesso !");
   
    } catch (e){
     setErrorMessage(e.message);
     setEmail('');
     setPassword('');
    }

    setIsLoading(false);


 }

 const checkFields = () => {
     return !(email.length > 0 && password.length >= 6);
 }

 checkFields();


  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        {/* Coloque a mensagem de erro de login na div abaixo. Mostre a div somente se houver uma mensagem de erro. */}
        {errorMessage&&<div className='errorMessage'>{errorMessage}</div>}
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={(event)=>setEmail(event.target.value)}/>
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={(event)=>setPassword(event.target.value)}/>
        </div>

        <div className='button'>
          <button onClick={onLoginClick} disabled={checkFields()||isLoading}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default App;
