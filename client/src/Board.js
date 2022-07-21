import React, {useEffect, useState} from 'react';
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col'
import Pagination from './Pagination'
import Write from "./Write";
import Read from "./Read";
import './css.css'

function Board(props){
    const [writeShow, setWriteShow] = useState(false);
    const [readShow, setReadShow] = useState(false);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [boardid, setBoardid] = useState();

    function closeModal() {
        setReadShow(false);
        setWriteShow(false);
    }

    return(
        <>
            <Write show={writeShow} onHide={() => setWriteShow(false)} closeModal={closeModal}/>
            <Read boardid={boardid} title={title} content={content} show={readShow} closeModal={closeModal} onHide={() => setReadShow(false)}/>
            <div className="py-5 bg-surface-secondary border border-bottom">
                <Container>
                    <Card className="border">
                        <Card.Header>
                            <Card.Title>
                                <div className="font-weight-bold h2 mt-5">게시판</div>
                            </Card.Title>
                        </Card.Header>
                        <Table responsive className="table table-hover table-nowrap">
                            <thead className="table-light">
                                <tr>
                                    <th as={Col} className="font-weight-bold">번호</th>
                                    <th as={Col} className="font-weight-bold">제목</th>
                                    <th></th>
                                    <th></th>
                                    <th></th>
                                    <th as={Col} className="font-weight-bold">작성자</th>
                                    <th as={Col} className="font-weight-bold">작성일</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.items.map (v => (
                                    <tr key={v.BOARD_ID} className="text-heading font-semibold">
                                        <td>{v.ROWNUM}</td>
                                        <td>
                                            <a href = "#" className="disableLinkColor"
                                            onClick={() => {setReadShow(true); setBoardid(v.BOARD_ID); setTitle(v.BOARD_TITLE); setContent(v.BOARD_CONTENT);}}>{v.BOARD_TITLE}</a>
                                        </td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td>{v.REGISTER_ID}</td>
                                        <td>{v.REGISTER_DATE}</td>
                                    </tr>
                                    )
                                )}
                            </tbody>
                        </Table>
                    </Card>
                </Container>
            </div>
            <div className="py-5 p-50 bg-surface-primary">
                <Container>
                    <nav className="d-flex justify-content-between">
                        <Pagination/>
                        <Button className="btn btn-sm btn-primary border border-dark d-flex h-25" title="글쓰기" onClick={() => setWriteShow(true)}>글쓰기</Button>
                    </nav>
                </Container>
            </div>
        </>
    );
}

export default Board;