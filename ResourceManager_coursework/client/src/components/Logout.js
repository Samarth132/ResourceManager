import { Container } from "react-bootstrap";
import { Card, Button } from "react-bootstrap";
import axios from "axios"
import {useNavigate} from 'react-router-dom';
import Cookie from 'universal-cookie';

const Logout = () => {

    const navigate = useNavigate();
    const cookie = new Cookie();

    async function handleYes(e){
        e.preventDefault()
        let response
        response = await axios.get('http://localhost:8000/api/user/logout')
        console.log(response.data)
        if(response.data === 'user logout success'){
            cookie.remove('logValue', { path: '/' })
            navigate('/#home')
        }
    }

    return ( 
        <Container>
            <div className="m-5">
                <Card
                border='dark'
                className="logout mb-3 text-dark text-center"
                >
                    <Card.Header className="pb-3 heading">Confirm Logout?</Card.Header>
                    <Card.Body className="p-3">
                        <Button className="me-2" variant='outline-primary' onClick={handleYes}>Yes</Button>
                        <Button variant='outline-danger' onClick={()=>{navigate('/resources')}}>No</Button>
                    </Card.Body>    
                </Card>
            </div>
        </Container>
     )
}
 
export default Logout;