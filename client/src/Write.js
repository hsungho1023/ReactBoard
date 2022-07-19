import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from 'axios';

function Write(props) {
  const[title, setTitle] = useState('');
	const[content, setContent] = useState('');
	
	const Write = () => {
		Axios.post("http://localhost:8000/insert", {
		  	title : title,
		  	content : content
		  }
    )
	  .then((res) => {
		    console.log(res);
	    }
    )
	  .catch((error) => {
		    console.error(error);
	    }
    )
    props.closeModal();
  }

  function onChangeTitle(e) {
    setTitle(e.target.value);
  }
  
  function onChangeContent(e) {
    setContent(e.target.value);
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>글쓰기</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex justify-content-center form_container">
        <Form>
          <InputGroup className="mb-3">
            <div className="input-group-append">
              <InputGroup.Text className="text-black" style = {{height:46.8}}>제목</InputGroup.Text>
            </div>
            <Form.Control type ="text" onChange = {onChangeTitle}></Form.Control>
          </InputGroup>
          <InputGroup.Text className="text-black text-center">내용</InputGroup.Text>
          <InputGroup className="mb-3">
            <Form.Group>
              <Form.Control className="w-100" as="textarea" onChange = {onChangeContent} rows={20} cols={100} resize = "none"/>
            </Form.Group>
          </InputGroup>
        </Form>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={Write}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Write;