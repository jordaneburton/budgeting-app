import { useEffect } from 'react';
import { useRouteError } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/esm/Col';
import Header from '../components/Header';

function ErrorPage () {

  const page = {
    header: "Oh no, what happened!"
  }

  const error = useRouteError();
  console.error(error);


  return (
    <>
    <Row className='vw-100 vh-100 m-0 p-0'>
      <Header header={page.header}/>
      <Col xs={12} md={9} className='p-0 mx-auto d-flex flex-wrap flex-column align-content-center'>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Col>
    </Row>
    </>
  );
}

export default ErrorPage