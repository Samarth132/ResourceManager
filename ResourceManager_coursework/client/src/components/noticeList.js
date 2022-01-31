import { Container } from 'react-bootstrap';
import {Card, Accordion, Button} from 'react-bootstrap';
import useFetch from './useFetch'

const NoticeList = () => {
    let {data:notices} = useFetch('http://localhost:8000/api/notice/getNot');
    console.log(`notices : ${notices}`)
    return (
        <Container> 
            <div className="noticeList my-5 p-5 rounded-3">
                <Accordion>
                    <Accordion.Item eventKey='0'>
                        <Accordion.Header className='heading'>IS department circulars</Accordion.Header>
                        <Accordion.Body>
                            {notices && notices.map(item=>(
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