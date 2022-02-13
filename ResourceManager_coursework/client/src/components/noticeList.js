import { Container } from 'react-bootstrap';
import {Card, Accordion, Button, Form, Row, Col} from 'react-bootstrap';
import useFetch from './useFetch'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {CgSearch} from 'react-icons/cg'

const NoticeList = () => {
    let {data:notices} = useFetch('http://localhost:8000/api/notice/getNot');

    const [filteredNotices, setFilteredNotices] = useState(notices);
    const [filter, setFilter] = useState('all');
    const navigate = useNavigate();

    const filterElement = (item)=>{
        console.log(filter)
        return item.noticename.toLowerCase().includes(filter.toLowerCase())
    }

    if(filter.length === 0){
        setFilteredNotices(notices);
        navigate('/notices/#notice')
    }

    const handleFilter = (e) => {
        e.preventDefault();
        if(filter !== 'all'){
            setFilteredNotices(notices.filter(filterElement));
            navigate('/notices/#notice')
        }
        else{
            setFilteredNotices(notices);
            navigate('/notices/#notice')
        }
    }

    return (
        <Container> 
            <div className="noticeList my-5 p-5 rounded-3">
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
                    <Accordion.Item eventKey='0' id='#notice'>
                        <Accordion.Header className='heading'>IS department circulars</Accordion.Header>
                        <Accordion.Body>
                            {filteredNotices && filteredNotices.map(item=>(
                                <Card
                                border='dark'
                                className="semester1 mb-3 text-dark"
                                id="1"
                                key={item.noticeid}>
                                    <Card.Header className="heading pb-3">{item.noticename}</Card.Header>
                                    <Card.Body className='para'>
                                        <Card.Text>{item.noticedesc}</Card.Text>
                                        <Card.Link href={item.noticelink}><Button variant='outline-danger'>Download</Button></Card.Link>
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
 
export default NoticeList;