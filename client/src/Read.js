import React, {useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup';
import Axios from 'axios';

function Read(props) {
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [updateTitleValue, setUpdateTitleValue] = useState();
  const [updateContentValue, setUpdateContentValue] = useState();
  const [updateDeleteButtonHidden, setUpdateDeleteButtonHidden] = useState(false);
  const [confirmCancelButtonHidden, setConfirmCancelButtonHidden] = useState(true);

  useEffect(() => {
    setUpdateTitleValue(props.title);
    setUpdateContentValue(props.content);
  },[props.title, props.content]);

  const Delete = () => {
		Axios.delete("http://localhost:8000/delete", {
		  	data : {
          boardid : props.boardid
        }
		  }
    ).then((res) => {
		    console.log(res);
	    }
    ).catch((error) => {
		    console.error(error);
	    }
    )
    props.closeModal();
    alert("게시물을 삭제했습니다.");
  }

  const UpdateContent = (e) => {
    setUpdateContentValue(e.target.value);
  }

  const UpdateTitle = (e) => {
    setUpdateTitleValue(e.target.value);
  }

  const Update = () => {
    Axios.put("http://localhost:8000/update", {
        title : updateTitleValue,
        content : updateContentValue,
        boardid : props.boardid
      }
    ).then((res) => {
      console.log(res);
      }
    ).catch((error) => {
      console.error(error);
      }
    )
    props.closeModal();
    setIsReadOnly(true);
    setUpdateDeleteButtonHidden(false);
    setConfirmCancelButtonHidden(true);
    alert("게시물을 수정했습니다.");
  }

  const ChangeReadOnly = () => {
    setIsReadOnly(false);
    setUpdateDeleteButtonHidden(true);
    setConfirmCancelButtonHidden(false);
    document.getElementById("textarea").focus();
  }

  const Cancel = () => {
    setIsReadOnly(true);
    setUpdateDeleteButtonHidden(false);
    setConfirmCancelButtonHidden(true);
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
          <h3>게시물</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="d-flex justify-content-center form_container">
        <Form>
          <InputGroup className="mb-3">
            <div className="input-group-append">
              <InputGroup.Text className="text-black" style = {{height:46.8}} >제목</InputGroup.Text>
            </div>
            <Form.Control onChange={UpdateTitle} defaultValue={props.title} type="text" resize="none" style={{backgroundColor:"white"}} readOnly={isReadOnly} />
          </InputGroup>
          <InputGroup.Text className="text-black text-center">내용</InputGroup.Text>
          <InputGroup className="mb-3">
            <Form.Group>
              <Form.Control onChange={UpdateContent} defaultValue={props.content} className="w-100" as="textarea" rows={20} cols={100} resize="none" style={{backgroundColor:"white"}} id="textarea" readOnly={isReadOnly}/>
            </Form.Group>
          </InputGroup>
        </Form>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ChangeReadOnly} title="수정" hidden={updateDeleteButtonHidden}>수정</Button>
        <Button onClick={Delete} title="삭제" hidden={updateDeleteButtonHidden}>삭제</Button>
        <Button onClick={Update} title="확인" hidden={confirmCancelButtonHidden}>확인</Button>
        <Button onClick={Cancel} title="취소" hidden={confirmCancelButtonHidden}>취소</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Read;