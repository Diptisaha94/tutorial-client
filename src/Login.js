import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link} from 'react-router-dom';
import { AuthContext } from './AuthProvider';


const Login = () => {
  const googleProvider=new GoogleAuthProvider();
  const loginContext =useContext(AuthContext);
  const {providerLogin}=loginContext;
  const handlegoogleProvider=()=>{
    providerLogin(googleProvider)
    .then((result) => {
      const user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }
    return (
        <div className='container mt-5'>
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text id="passwordHelpBlock" muted>
        You have no account please <Link to={"/register"}>Register</Link>
      </Form.Text><br/>
      <Button className='mt-3' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    <Button onClick={handlegoogleProvider} className='mt-4' variant="outline-secondary">Signin Google</Button>
        </div>
    );
};

export default Login;