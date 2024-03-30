import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Topbar from '../components/Topbar';
import Button from 'react-bootstrap/Button';

const Forum = () => {
    return (
        <div style={{ backgroundColor: '#faeff4' }}>
            <Topbar />
            <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center', marginTop: "20px", flexDirection: 'column' }} >
                <img src="" alt="" />
                <h3>
                    Rajasthan Police
                </h3>
                {/* <p className='text-secondary' >Lorem ipsum dolor sit amet consectetur adipisicing.</p> */}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: "20px", alignItems: 'flex-start', marginBottom: '90px' }} >
                {
                    [1, 2, 3, 4, 5, 6, 7, 8].map(el => {
                        return <Card style={{ width: '25rem', cursor: "pointer", border: 'none' }} className='rounded shadow-sm'   >
                            {/* <Card.Img variant="top" src={department.logo} /> */}
                            <Card.Body>
                                <Card.Title>John Doe</Card.Title>
                                {/* <Card.Subtitle className="mb-2 text-muted">Managed By Rajasthan Police Department</Card.Subtitle> */}
                                <Card.Text>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique earum repellat maxime! Facere neque pariatur eaque mollitia incidunt autem.
                                </Card.Text>
                                <div className='d-flex justify-content-between'>
                                    <Card.Text className='text-secondary fs-6'  >
                                        Pending
                                    </Card.Text>
                                    <Card.Text className='text-secondary fs-6' >
                                        12:00PM
                                    </Card.Text>
                                </div>
                                <div>
                                    <div className='d-flex justify-content-center align-items-center gap-2 ' style={{ backgroundColor: "#faeff4", borderRadius: "5px", padding: 8 }} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                                        </svg> 24
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    })
                }
            </div>
            <div style={{ position: 'fixed', bottom: 0, width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', padding: "10px", backgroundColor: "white" }}>
                <InputGroup className="m-3">
                    <DropdownButton
                        variant="primary"
                        title="Public"
                        id="input-group-dropdown-1"
                    >
                        <Dropdown.Item href="#" clas >Public</Dropdown.Item>
                        <Dropdown.Item href="#">Private</Dropdown.Item>

                    </DropdownButton>
                    <Form.Control
                        placeholder="Type your complain"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                        style={{ backgroundColor: "#faeff4", width: "50%", border: '0' }}
                    />

                    <Button variant='primary' className=' px-4 d-flex justify-content-center align-items-center gap-2'> <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
                    </svg>  Send  </Button>
                </InputGroup>
            </div>
        </div >
    )
}

export default Forum