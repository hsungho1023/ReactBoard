import React from "react";
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Signin from "./Signin";
import Signup from "./Signup";

function BoardTop() {
    const [signinShow, setSigninShow] = React.useState(false);
    const [signupShow, setSignupShow] = React.useState(false);
    
    return (
        <>
            <Signin show={signinShow} onHide={() => setSigninShow(false)}/>
            <Signup show={signupShow} onHide={() => setSignupShow(false)}/>
            <div className="py-5 p-50 bg-surface-primary">
                <Container className="d-flex p-2">
                    <div className="h1 text-left text-black">
                        <div className="d-inline-block">게시판 사이트</div>
                    </div>
                </Container>
                <Container className="d-flex p-2 justify-content-end">
                    <Button className="btn btn-sm btn-primary d-flex my-1 border border-dark" title="로그인" onClick={() => setSigninShow(true)}>로그인</Button>
                    &nbsp;
                    <Button className="btn btn-sm btn-primary d-flex my-1 border border-dark" title="회원가입" onClick={() => setSignupShow(true)}>회원가입</Button>
                </Container>
            </div>
        </>
    );
}

export default BoardTop;