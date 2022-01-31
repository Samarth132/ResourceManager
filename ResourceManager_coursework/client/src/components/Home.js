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
                                    <h2 className="text-danger">Resource Manager</h2>
                                    <p className="text-dark">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente a in eos, voluptatem tempore similique enim natus exercitationem ab totam impedit magni pariatur accusantium, voluptatum, sit officiis perferendis qui. Voluptas.
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
            <div className="feature p-5 bg-danger border-0 rounded-3">
                <Container>
                        <Row>
                            <div className="outline border rounded-2 p-3">
                                <div className='featureContent border rounded-2 p-5'>
                                    <h2 className="text-white mb-3 ">Features</h2>
                                    <div className="border rounded-2 border-white my-3 p-3 text-white">
                                        <h4 className="border-bottom p-3 ps-0 border-white">Feature</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="border rounded-2 border-white my-3 p-3 text-white">
                                        <h4 className="border-bottom p-3 ps-0 border-white">Feature</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                    </div>
                                    <div className="border rounded-2 border-white my-3 p-3 text-white">
                                        <h4 className="border-bottom p-3 ps-0 border-white">Feature</h4>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
                                <h4 className="border-bottom border-top border-dark">About</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat quaerat hic necessitatibus adipisci ducimus sint ipsam accusantium repudiandae soluta.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="links border border-dark rounded-2 text-center py-3">
                                <h4 className="border-bottom border-top border-dark">Links</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat quaerat hic necessitatibus adipisci ducimus sint ipsam accusantium repudiandae soluta.</p>
                            </div>
                        </Col>
                        <Col lg={4} sm={12}>
                            <div className="credits border border-dark rounded-2 text-center py-3">
                                <h4 className="border-bottom border-top border-dark">Credits</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat quaerat hic necessitatibus adipisci ducimus sint ipsam accusantium repudiandae soluta.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </section>
     );
}
 
export default Home;