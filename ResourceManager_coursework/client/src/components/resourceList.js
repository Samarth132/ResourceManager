import {Container} from 'react-bootstrap';
import {Card, Accordion, Button, Form, Row, Col} from 'react-bootstrap';
import useFetch from './useFetch'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CgSearch} from 'react-icons/cg'

const ResourceList = () => {
    let {data:sem5} = useFetch('http://localhost:8000/api/resource/getSemRes?semId=5');
    let {data:sem6} = useFetch('http://localhost:8000/api/resource/getSemRes?semId=6');


    const [semester5, setSemester5] = useState(sem5);
    const [semester6, setSemester6] = useState(sem6);
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    const filterElement = (item)=>{
        console.log(filter)
        return item.resname.toLowerCase().includes(filter.toLowerCase())
    }

    const handleFilter = (e) => {
        e.preventDefault();
        if(filter !== 'all'){
            setSemester5(sem5.filter(filterElement));
            setSemester6(sem6.filter(filterElement));
            navigate('/resources/#resource')
        }
        else{
            setSemester5(sem5);
            setSemester6(sem6);
            navigate('/resources/#resource')
        }
    }
    return (
        <Container> 
                <div className="resourceList my-5 p-5 rounded-3">
                    <div className="my-1 p-3 rounded-3">
                        <Form onSubmit={handleFilter}>
                            <Form.Group className="mb-3" controlId="formBasicRname">
                                <Row>
                                    <Col lg={6} xs={12}>
                                        <Form.Control type="text" placeholder='Enter search value' onChange={(e)=>setFilter(e.target.value)}/>
                                    </Col>
                                    <Col lg={6} xs={12}>
                                        <Button variant="outline-primary" type="submit">
                                            <CgSearch/>
                                        </Button>
                                    </Col>
                                </Row>
                            </Form.Group>
                        </Form>
                    </div>
                    <Accordion defaultActiveKey='0'>
                        <Accordion.Item eventKey='0' id='#resource'>
                            <Accordion.Header className='heading'>Semester 5</Accordion.Header>
                            <Accordion.Body>
                                {semester5 && semester5.map(item=>(
                                    <Card
                                    border='dark'
                                    className="semester1 mb-3 text-dark"
                                    id="1"
                                    key={item.resid}>
                                        <Card.Header className="heading pb-3">{item.resname}</Card.Header>
                                        <Card.Body className='para'>
                                            <Card.Text>{item.resdesc}</Card.Text>
                                                    <Card.Link href={item.reslink}><Button variant='outline-danger'>Download</Button></Card.Link>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header className='heading'>Semester 6</Accordion.Header>
                            <Accordion.Body>
                                {semester6 && semester6.map(item=>(
                                    <Card
                                    border="dark"
                                    className="semester2 mb-3 text-dark"
                                    id="2" 
                                    key={item.resid}>
                                        <Card.Header className="heading pb-3">{item.resname}</Card.Header>
                                        <Card.Body className='para'>
                                            <Card.Text>{item.resdesc}</Card.Text>
                                                    <Card.Link href={item.reslink}><Button variant='outline-danger'>Download</Button></Card.Link>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
        </Container>
     );
}
 
export default ResourceList;