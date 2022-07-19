import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey } from '@fortawesome/free-solid-svg-icons';
import Signup from './Signup';

function ClickSignUpShow () {
  const [SignupShow, setSignupShow] = React.useState(false);
  const clickShow = () => setSignupShow(true);
  return (
    <div className="d-flex justify-content-center links">
          회원이 아니시라면&nbsp;<a href="#" onClick = {clickShow} className="ml-2">가입</a>해주세요.
          <Signup show={SignupShow} onHide={() => setSignupShow(false)}/>
    </div>
  );
}

function Signin(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>로그인</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex justify-content-center form_container">
        <Form>
          <InputGroup className="mb-3">
            <div className="input-group-append">
              <InputGroup.Text style = {{height:46.8}}><FontAwesomeIcon icon={ faUser }/></InputGroup.Text>
            </div>
            <Form.Control type = "text" className="input_user" placeholder="아이디"/>
          </InputGroup>
          <InputGroup>
            <div className="input-group-append">
              <InputGroup.Text style = {{height:46.8, width:56}}><FontAwesomeIcon icon={ faKey }/></InputGroup.Text>
            </div>
            <Form.Control type = "password" className="input_pass" placeholder="비밀번호"/>
          </InputGroup>
          <Form.Group className = "mt-2">
          <div className="custom-control custom-checkbox">
              <input type="checkbox" className="custom-control-input" id="customControlInline"/>
              <label className="custom-control-label" htmlFor="customControlInline">&nbsp;로그인 저장</label>
          </div>
          </Form.Group>
        </Form>
      </div>
      <div className="mt-4">
        <ClickSignUpShow/>
        <div className="d-flex justify-content-center links">
          <a href="#">아이디</a>,&nbsp;<a href="#">비밀번호</a>를 잊으셨나요?
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button>로그인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Signin;