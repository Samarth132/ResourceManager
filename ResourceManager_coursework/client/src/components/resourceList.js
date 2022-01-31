import { Container } from 'react-bootstrap';
import {Card, Accordion, Button} from 'react-bootstrap';
import useFetch from './useFetch'

const ResourceList = () => {
    let {data:sem5} = useFetch('http://localhost:8000/api/resource/getSemRes?semId=5');
    let {data:sem6} = useFetch('http://localhost:8000/api/resource/getSemRes?semId=6');
    console.log(`sem 1 : ${sem5}`)
    console.log(`sem 2 : ${sem6}`)
    return (
        <Container> 
            <div className="resourceList my-5 p-5 rounded-3">
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header className='heading'>Semester 5</Accordion.Header>
                        <Accordion.Body>
                            {sem5 && sem5.map(item=>(
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
                            {sem6 && sem6.map(item=>(
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