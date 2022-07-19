import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Sign from './Sign';

function Signup(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <h3>회원가입</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex justify-content-center form_container">
        <Form>
          <Card className="border">
            <Card.Header className="border bg-secondary">
              <h3>이용약관</h3>
            </Card.Header>
            <Card.Body>
              <Card.Text className="overflow-auto" style={{maxHeight:280}}>
                  <Sign/>
              </Card.Text>
              <br></br>
              <input type="checkbox" className="custom-control-input" id="customControlInline"/>
              <label className="custom-control-label" htmlFor="customControlInline" required = "required">&nbsp;위 약관에 대해 동의합니다.</label>
            </Card.Body>
          </Card>
          <br></br>
          <InputGroup className="mb-3">
            <div className="input-group-append">
              <InputGroup.Text style = {{height:46.8, width:56}}><FontAwesomeIcon icon={ faUser }/></InputGroup.Text>
            </div>
          <Form.Control type = "text" className="input_user" placeholder="아이디" required = "required"/>
          <Button>중복확인</Button>
          </InputGroup>
          <h6 className="text-black-50 mb-1">&nbsp;비밀번호는 7자리 이상, 영문 + 숫자의 형태로 이루어져야 합니다.</h6>
          <InputGroup>
            <div className="input-group-append">
              <InputGroup.Text style = {{height:46.8, width:56}}><FontAwesomeIcon icon={ faKey }/></InputGroup.Text>
            </div>
            <Form.Control type = "password" className="input_pass" placeholder="비밀번호" required = "required"/>
          </InputGroup>
          <InputGroup className="mt-5">
            <div className="input-group-append">
              <InputGroup.Text style = {{height:46.8, width:56}}><FontAwesomeIcon icon={ faEnvelope }/></InputGroup.Text>
            </div>
            <Form.Control type = "email" className="input_email" placeholder="이메일"/>
          </InputGroup>
        </Form>
			</div>
      </Modal.Body>
      <Modal.Footer>
        <Button>확인</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Signup;
