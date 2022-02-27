import { Col, Container, Row } from "react-bootstrap";
import resourceImage from "./resourceImage.png"

const Home = () => {
    return ( 
        <section className="home px-5 bg-white" id="home">
            <div className="lead p-5">
                <Container>
                        <Row>
                            <Col lg={6} xs={12}>
                                <div className='homeContent p-5'>
                                    <h1 className="heading text-danger">Department Resource Management System</h1>
                                    <p className="para text-dark">
                                    Department Resource Management System is software developed for managing documents of IS department.
                                    </p>
                                </div>
                            </Col>
                            <Col lg={6} xs={12}>
                                <div className='homeImg p-5'>
                                    <img className="my-auto w-75" src={resourceImage} alt="phone document"/>
                                </div>
                            </Col>
                        </Row>
                </Container>
            </div>
            <div className="feature p-5 border-0 rounded-3">
                <Container>
                        <Row>
                            <div className="outline border rounded-2 p-3">
                                <div className='featureContent border rounded-2 p-5'>
                                    <h2 className="heading text-white mb-3 ">Features</h2>
                                    <div className="border rounded-2 border-white my-3 p-3 text-white">
                                        <h4 className="heading border-bottom p-3 ps-0 border-white">Easy Access</h4>
                                        <p className='para'>Students can gain access to all the resources in one place</p>
                                    </div>
                                    <div className="border rounded-2 border-white my-3 p-3 text-white">
                                        <h4 className="heading border-bottom p-3 ps-0 border-white">Up to date</h4>
                                        <p className='para'>Department documents will be updated through it</p>
                                    </div>
                                    <div className="border rounded-2 border-white my-3 p-3 text-white">
                                        <h4 className="heading border-bottom p-3 ps-0 border-white">Straightforward UI</h4>
                                        <p className='para'>Offers a simple, to the point user interface</p>
                                    </div>
                                </div>
                            </div>
                        </Row>
                </Container>
            </div>
            <div className="footer border-0 rounded-3 mt-5 p-5">
                <Container>
                    <Row>
                        <Col lg={4} sm={12}>
                            <div className="about border border-dark rounded-2 text-center py-3">
                                <h4 className="heading border-bottom border-top border-dark">About</h4>
                                <p className='para px-2'>Resource management system is a course project develeoped by a team of students. It provides a simple implementation of RDBMS based applications.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="links border border-dark rounded-2 text-center py-3">
                                <h4 className="heading border-bottom border-top border-dark">Links</h4>
                                <ul className='para px-2'>
                                    <li><a href='http://libgen.is/'>Libgen</a></li>
                                    <li><a href='https://github.com/Samarth132/ResourceManager/tree/main/ResourceManager_coursework'>Project Code</a></li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="credits border border-dark rounded-2 text-center py-3">
                                <h4 className="heading border-bottom border-top border-dark">Credits</h4>
                                <ul className='para px-2'>
                                    <li><p>Developed by : </p></li>
                                    <li><p>Samarth Katti</p></li>
                                    <li><p>S.K Sayantani</p></li>
                                    <li><p>Skanda B.K</p></li>
                                    <li><p>Mentored by : M S Rakshitha</p></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
     );
}
 
export default Home;