import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate} from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Login = () => {
  const googleProvider=new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider();
  const loginContext =useContext(AuthContext);
  const {providerLogin,setUser,loginWithEmailAndPassword}=loginContext;
  const navigate = useNavigate();
  const location=useLocation();
  let from = location.state?.from?.pathname || "/";
  const handleloginEmailpassword=(e)=>{
    e.preventDefault();
    const form=e.target;
    const email=form.email.value;
    const password = form.password.value;
    loginWithEmailAndPassword(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      form.reset();
      // ...
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
  const handleGithub=()=>{
providerLogin(githubProvider)
.then((result) => {
  const user = result.user;
  setUser(user);
  navigate(from, { replace: true });
  // ...
}).catch((error) => {
  // Handle Errors here.
  const errorMessage = error.message;
  console.log(errorMessage);
});
  }
  const handlegoogleProvider=()=>{
    providerLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      setUser(user);
      navigate(from, { replace: true });
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
    return (
        <div className='container mt-5'>
          <h1 className='text-primary text-center mb-4'>Please Login</h1>
            <Form onSubmit={handleloginEmailpassword}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email' />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='password'/>
      </Form.Group>
      <Form.Text id="passwordHelpBlock" muted>
        You have no account please <Link to={"/register"}>Register</Link>
      </Form.Text><br/>
      <Button className='mt-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Button onClick={handlegoogleProvider} className='mt-4' variant="outline-secondary">Signin Google</Button>
    <Button onClick={handleGithub} className='mt-4' variant="outline-secondary">Signin Github</Button>
        </div>
    );
};

export default Login;