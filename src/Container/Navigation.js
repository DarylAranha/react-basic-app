import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Modal from 'react-bootstrap/Modal'
// custom
import LoginOrSignup from './loginOrSignup'

let modal = null;

const onModalClose = () => {
    modal = null;
}

export default () => {
    // null, Login, Signup
    const [showType, setModalShow] = React.useState(null);

    let modal = showType ? (
        <Modal show={showType ? true : false} onHide={() => setModalShow(null)}>
            <Modal.Header>
                <Modal.Title>{showType}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <LoginOrSignup type={showType}/>
            </Modal.Body>
        </Modal>
    ) : null;

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#" onClick={() => setModalShow('Login')}>Login</Nav.Link>
                        <Nav.Link href="#" onClick={() => setModalShow('Signup')}>Signup</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            {modal}
        </>
    );
}
