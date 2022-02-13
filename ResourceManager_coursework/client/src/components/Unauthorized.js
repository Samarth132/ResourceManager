import {Container} from 'react-bootstrap'

const Unauthourized = () => {
    return ( 
        <Container>
            <div className="unauthorized text-center">
                <h1>Unauthorized</h1>
                <hr></hr>
                <p>Invalid user</p>
            </div>
        </Container>
     );
}
 
export default Unauthourized;