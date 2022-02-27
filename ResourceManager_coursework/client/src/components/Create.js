import { Container } from 'react-bootstrap';
import {Accordion, Button, Form} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';
// import useFetch from './useFetch';
import Cookies from 'universal-cookie'

const Create = () => {
    const [resName, setResName] = useState('');
    const [resDesc, setResDesc] = useState('');
    const [resLink, setResLink] = useState('');
    const [semId, setSemId] = useState('');
    const [notName, setNotName] = useState('');
    const [notDesc, setNotDesc] = useState('');
    const [notLink, setNotLink] = useState('');
    const navigate = useNavigate();
    const cookie = new Cookies();

    // let {data:log} = useFetch('http://localhost:8000/api/user/getCookie')
    // console.log('cookie : ',log['tokenKey'])
    let logValue = cookie.get('logValue')
    console.log('logValue : ',logValue)

    async function addResource(e){
        e.preventDefault();
        const resource = { resName, resDesc, resLink, semId };
        console.log('Resource create content : ',resource)
        const options = {
            method: 'post',
            url: 'http://localhost:8000/api/resource/postRes',
            data: resource
        }
        await axios(options)
        navigate('/resources')
    }

    async function addNotice(e){
        e.preventDefault();
        const notice = { notName, notDesc, notLink };
        console.log('Notice create content : ',notice)
        const options = {
            method: 'post',
            url: 'http://localhost:8000/api/notice/postNot',
            data: notice
        }
        await axios(options)
        navigate('/notices')
    }

    return ( 
        <Container> 
            {logValue && 
                <div className="Create my-5 p-5 rounded-3">
                    <Accordion>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header className='addres'>Add course work</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={addResource}>
                                    <Form.Group className="mb-3" controlId="formBasicRname">
                                        <Form.Label>Resource Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setResName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicRdesc">
                                        <Form.Label>Resource description</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Enter description" onChange={(e)=>setResDesc(e.target.value)}/>
                                    </Form.Group><Form.Group className="mb-3" controlId="formBasicRlink">
                                        <Form.Label>Resource link</Form.Label>
                                        <Form.Control type="text" placeholder="Enter link" onChange={(e)=>setResLink(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicRsem">
                                        <Form.Label>Semester</Form.Label>
                                        <Form.Control type="number" min='0' placeholder="Enter semester" onChange={(e)=>setSemId(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Add
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header className='addnot'>Add notice</Accordion.Header>
                            <Accordion.Body>
                                <Form onSubmit={addNotice}>
                                    <Form.Group className="mb-3" controlId="formBasicNname">
                                        <Form.Label>Notice Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" onChange={(e)=>setNotName(e.target.value)}/>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicNdesc">
                                        <Form.Label>Notice description</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Enter description" onChange={(e)=>setNotDesc(e.target.value)}/>
                                    </Form.Group><Form.Group className="mb-3" controlId="formBasicNlink">
                                        <Form.Label>Notice link</Form.Label>
                                        <Form.Control type="text" placeholder="Enter link" onChange={(e)=>setNotLink(e.target.value)}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Add
                                    </Button>
                                </Form>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>        
            }
        </Container>
     );
}
 
export default Create;