import React,{useState} from 'react'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Col,
    } from "reactstrap";
 import axios from 'axios'   

function PostModal({addtopic,Addtoggle,id}) {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")

    const UpdatePost = (id) => {
        console.log("id",id)
        axios.put(`http://localhost:5000/postesss/${id}`, {title, description})
        // {title:title,description:desc}
    
        }
    return (
        <div>
            <Modal className='modal-lg' className="modal" isOpen={true}  >
            <ModalHeader style={{ border: "none" }}>
          <strong>
            <span
              style={{
                width: "40px",
                borderBottom: "5px solid #00a8ff",
                borderRadius: "5px",
                // paddingBottom: "5px",
              }}
            >
              Add
            </span>{" "}
            User
          </strong>
        </ModalHeader>
        <ModalBody style={{ border: "none" }}>
                    <Form>
                        <FormGroup row xs={12} >
                            <Col sm={2}>
                                <Label  for="exampleEmail" ><strong>title</strong></Label>
                            </Col><Col sm={4}>
                                <Input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} >
                                </Input>
                            
                            </Col>
                            <Col sm={2}>
                                <Label  for="exampleEmail" ><strong>description</strong></Label>
                            </Col><Col sm={4}>
                                <Input  type="text" value={description} onChange={(e)=> setDescription(e.target.value)}>
                                </Input>
                                
                            </Col>
                        </FormGroup>

                    </Form>
                </ModalBody>
                <ModalFooter style={{ justifyContent: "center", border: "none" }}>
                    <button variant="contained" onClick={()=>UpdatePost(id)}>Add</button>{' '}
                    <button variant="contained"  onClick={Addtoggle}>Cancel</button>
                </ModalFooter>
                </Modal>
        </div>
    )
}

export default PostModal
