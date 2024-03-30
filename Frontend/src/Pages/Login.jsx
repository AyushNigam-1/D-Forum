import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useContract } from '../Provider/ContractProvider';

const Login = () => {
    const contractInstance = useContract();

    const nav = useNavigate()
    const [connection, setConnection] = useState(contractInstance.userAddress)
    const [status, setStatus] = useState(false)
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
    const connectMetamask = async () => {
        setStatus(true)
        contractInstance.connectToMetaMask().then(address => {
            console.log(address)
            setStatus(false)
            setConnection(address)
        })
    }
    const verifyIdentity = async () => {
        if (true) {
            localStorage.setItem(JSON.stringify({ userId: "", address: connection }))
            nav("/home")
        }
    }
    return (
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10px', backgroundColor: "#faeff4" }} >
            <img src="./logo.jpeg" alt="" style={{ borderRadius: "50%", width: "200px" }} />
            <h2>Login</h2>
            <Button className='bg-white border-0 shadow-sm px-3 py-2 text-black d-flex gap-2 align-items-center fw-semibold' onClick={() => connectMetamask()} disabled={status ? true : false}  > <img src="https://img.icons8.com/color/22/metamask-logo.png" alt="" />  Connect to Metamask  <div className='px-2 py-2 d-flex align-items-center justify-content-center' style={{ color: 'rgb(20 84 41)', backgroundColor: "rgb(144 238 144 / 51%)", borderRadius: "50%", display: connection ? 'block' : 'none' }} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                </svg>
            </div></Button>
            <Button className='bg-white border-0 shadow-sm px-5 py-2 text-black fw-semibold' disabled={connection ? false : true} onClick={handleShow}>  Verfiy Aadhar Card   </Button>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Aadhaar Card Verification </Modal.Title>
                </Modal.Header>
                <Modal.Body><Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Upload Your Aadhaar Card</Form.Label>
                    <Form.Control type="file" />
                </Form.Group></Modal.Body>
                <Modal.Footer >
                    {/* <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button> */}
                    <Button onClick={() => verifyIdentity()} className='px-4' style={{ backgroundColor: "#faeff4", border: '0', color: 'black' }}  >
                        Verify
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Login