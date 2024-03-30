import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Topbar = () => {
    return (
        <div>
            <Navbar bg="white" className='shadow-sm ' data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" className='text-black'>Shield Guard</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text className='text-black'>
                            {/* Address:{contractInstance.userAddress} */}
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Topbar