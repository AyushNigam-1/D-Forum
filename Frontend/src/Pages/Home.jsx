import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Topbar from '../components/Topbar';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Home = () => {
    const departments = [{ name: 'Delhi Police', logo: 'https://seeklogo.com/images/D/delhi-police-logo-C454A2A54E-seeklogo.com.png' }, { name: "Rajasthan Police", logo: 'https://www.getmyuni.com/sarkari-exam/wp-content/uploads/2019/01/Rajasthan-police.jpg' }, { name: 'Noida Police', logo: 'https://th.bing.com/th/id/OIP.r-FMniL83kVAnmdVBXkXHAAAAA?rs=1&pid=ImgDetMain' }, { name: 'Gurugram Police', logo: 'https://i0.wp.com/opportunitycell.com/wp-content/uploads/2022/05/szUpK2fz_400x400.jpg?resize=400%2C400&ssl=1' }]
    const nav = useNavigate()
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const locations = ["Sitapur", "Lok Nagar", "Tilak Nagar"]
    return (
        <>
            <Topbar />
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', backgroundColor: "#faeff4", height: '100vh' }}>
                <h3 style={{ margin: '30px', color: 'gray' }}>
                    Forums
                </h3>
                <div style={{ display: 'flex', flexDirection: 'row', gap: '30px' }} >
                    {
                        departments.map(department => <Card style={{ width: '18rem', cursor: "pointer", border: "0", flexDirection: "column" }} className='shadow-sm d-flex' onClick={handleShow}  >
                            <div style={{ height: '288px' }} >
                                <img src={department.logo} className='p-2 w-100' />
                            </div>
                            <Card.Body style={{ alignSelf: 'center', justifyItems: 'end' }}>
                                <Card.Title style={{ color: 'gray' }} >{department.name}</Card.Title>
                            </Card.Body>
                        </Card>)
                    }
                </div>
                <Modal show={show} onHide={handleClose} centered c >
                    <Modal.Header closeButton>
                        <Modal.Title>Choose Location </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='d-flex gap-3 justify-content-evenly flex-column shadow'>
                        {locations.map(location => <Button variant="primary" style={{ backgroundColor: "#faeff4", border: "none", color: "black" }} className='d-flex gap-2 align-items-center fw-semibold py-3' onClick={() => nav("/forum")} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
                            </svg>
                            {location}
                        </Button>

                        )}
                    </Modal.Body>
                </Modal>
            </div>
        </>
    )
}

export default Home