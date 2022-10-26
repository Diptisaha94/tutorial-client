import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from './AuthProvider';

const Register = () => {
  const registerContext =useContext(AuthContext);
  const {registerEmailPassword,updateUserName,setLoading}=registerContext;
  const [userInfo,setUserInfo]=useState({
    email:"",
    password:"",
  })
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form =e.target;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    registerEmailPassword(userInfo.email, userInfo.password)
      .then((result) => {
        updateUserName(name,photo);
        console.log(result);
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEmailChange = (e) => {
    const email = e.target.value;

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setErrors({ ...errors, email: "Please provide a valid email" });
      setUserInfo({ ...userInfo, email: "" });
    } else {
      setErrors({ ...errors, email: "" });
      setUserInfo({ ...userInfo, email: e.target.value });
    }
  };
  const handlePasswordChange = (e) => {
    const password = e.target.value;
    const lengthError = password.length < 8;

    if (lengthError) {
      setErrors({ ...errors, password: "Must be at least 8 characters" });
      setUserInfo({ ...userInfo, password: "" });
    }
     else {
      setErrors({ ...errors, password: "" });
      setUserInfo({ ...userInfo, password: e.target.value });
    }
  };
    return (
        <div className='container'>
            <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUrl">
        <Form.Label>Photo Url</Form.Label>
        <Form.Control type="url" placeholder="Your Photo" name="photo" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleEmailChange} type="email" name='email' placeholder="Enter email" />
        {errors.email && <p>{errors.email}</p>}
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handlePasswordChange} type="password" name='password' placeholder="Password" />
        {errors.password && <p>{errors.password}</p>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Register;