import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import { useContext, useEffect, useState } from 'react';
import { Store } from '../Store';
import { toast } from 'react-toastify';
import { getError } from '../utils';
import './signin.css'



export default function SigninScreen() {
  const navigate = useNavigate();
  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/users/signin', {
        email,
        password,
      });
      ctxDispatch({ type: 'USER_SIGNIN', payload: data });
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate(redirect || '/');
    } catch (err) {
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);

  return (
    /*<Container className="small-container" style={{backgroundColor:'SlateBlue'}}>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required  onChange={(e) => setPassword(e.target.value)}/>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>
        <div className="mb-3">
          New customer?{' '}
          <Link to={`/signup?redirect=${redirect}`} >Create your account</Link>
        </div>
      </Form>
    </Container>*/
    <>
    

    <div className='body1'>
      <div className="center">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <h1>Login</h1>
        <form method="post" onSubmit={submitHandler}>
          <div className="txt_field">
            <input type="text" required onChange={(e) => setEmail(e.target.value)} />
            <span></span>
            <label>Email</label>
          </div>
          <div className="txt_field">
            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
            <span></span>
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" value="Login" />
          <div className="signup_link">
            Not a member? <Link to={`/signup?redirect=${redirect}`} >Create your account</Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
}