import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from "react-router-dom";

function LoginModal({show, handleClose, onAddUser, onLoginUser}){
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [form_type, setForm_type] = useState('login');
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

//   useEffect(() => {
//       if(updatedCity) {
//           setCity(updatedCity.name);
//           setState(updatedCity.state );
//           setCountry(updatedCity.country);
//           setImage(updatedCity.image);
//           setIsUpdate(true);
//       }
//   }, [updatedCity]);

//   const resetData = () => {
//     setCity(''),
//     setState(''),
//     setCountry(''),
//     setImage('')
//   }

//   useEffect(() => {
//       if(updatedCity) {
//         setCity(updatedCity.name);
//         setState(updatedCity.state );
//         setCountry(updatedCity.country);
//         setImage(updatedCity.image);
//         setIsUpdate(true);
//     } else{
//         resetData();
//         setIsUpdate(false);
//       }
//       }, [updatedCity]);

  const handleSubmit = (e) => {
        console.log(username, email, password, form_type);    
        // console.log('hola');
        if(form_type === 'login'){
            // console.log("es un login");
            const userdata = { username, password };
            onLoginUser(userdata);
        }else{
            console.log("es un register");
            const newuserdata = { username, email, password };
            onAddUser(newuserdata);
            // resetData();
        }
  };


  const handleRedirect = () => {
    if(form_type === 'register'){
      setForm_type('login');
      navigate('/login');
    }else{
      setForm_type('register');
      navigate('/login');
    }
  };

  const handleUsernameNameChange = (e) => {
    setUsername(e.target.value);
    // console.log('Username: ' + e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  return (
        <>
      <Modal show={show} onHide={handleClose} form_type={form_type}
        backdrop="static"
        keyboard={false}>
        <Modal.Header closeButton>
        {form_type === 'login' && (
          <Modal.Title>Log In</Modal.Title>
        )}
        {form_type === 'register' && (
          <Modal.Title>Register</Modal.Title>
        )}
        </Modal.Header>
        <Modal.Body>
          <Form>
            {form_type === 'login' && (
              <Form.Group className="mb-3" controlId="login">
                <Form.Label>Username</Form.Label>
                <Form.Control  value={username}  type="text" placeholder='' onChange={handleUsernameNameChange}
                autoFocus />

                <Form.Label>Password</Form.Label>
                <Form.Control value={password} type="password" placeholder='' onChange={handlePasswordChange}/>

              </Form.Group>
            )}
            {form_type === 'register' && (
              <Form.Group className="mb-3" controlId="register">
                <Form.Label>Username</Form.Label>
                  <Form.Control value={username} type="text"  onChange={handleUsernameNameChange}/>
                
                <Form.Label>Email</Form.Label>
                  <Form.Control value={email} type="email" onChange={handleEmailChange} />
                
                <Form.Label>Password</Form.Label>
                  <Form.Control value={password} type="password" onChange={handlePasswordChange} />
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
      <Modal.Footer>
      {form_type === 'login' && (
        <a onClick={handleRedirect} className='mb-3'>I don't have an account</a>
      )}
      {form_type === 'register' && (
        <a onClick={handleRedirect} className='mb-3'>Already have an account?</a>
      )}
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSubmit}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

export default LoginModal;