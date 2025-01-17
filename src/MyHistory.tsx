
import { Container } from 'react-bootstrap';
import  myhistoryCss from './MyHistory.module.css'

const MyHistory = () => {
  return (
    <Container className={myhistoryCss.fullScreen}>

      <div >
        <h1>Tutaj jest moja historia wpisów</h1>
      </div>

    </Container>
  );

};

export default MyHistory