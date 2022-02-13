import { Container } from 'react-bootstrap';
import {Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
import Cookies from 'universal-cookie'

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const cookie = new Cookies();

    async function verifyLogin(e){
        e.preventDefault();
        const cred = { username, password};
        console.log('user credentials : ',cred)
        const options = {
            method: 'post',
            url: 'http://localhost:8000/api/user/login',
            data: cred
        }
        let result 
        result = await axios(options)
        console.log('result : ',result.data)
        if(result.data === 'user login success'){
            cookie.set('logValue', 'valid', { path: '/' })
            navigate('/create')
        }
        else{
            navigate('/unauthorized')
        }
    }

    return ( 
        <Container> 
            <div className="login my-5 p-5 rounded-3">
                <Form onSubmit={verifyLogin}>
                    <Form.Group className="mb-3" controlId="formBasicNname">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Enter username" onChange={(e)=>setUsername(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNdesc">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={password} rows={5} placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        </Container>
     );
}
 
export default Login;