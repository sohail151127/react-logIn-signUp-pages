import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ExampleModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary m-2" onClick={handleShow}>
        I used Modal here
      </Button>
      


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is a Modal</Modal.Title>
        </Modal.Header>

        <Modal.Body>Welcome to my react-bootstrap modal!</Modal.Body>
        
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExampleModal;