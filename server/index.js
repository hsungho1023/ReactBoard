const express = require('express');
const app = express();
const PORT = process.env.port || 8000;
const mysql = require('mysql');
const cors = require('cors')
const bodyParser = require("body-parser");

let corsOption = {
    origin : "*",
    credential : true
}

app.use(cors(corsOption));
app.use(express.json()); 
app.use(bodyParser.json({extended:true}));

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'board'
});

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
});


app.get("/list",(req, res)=>{
    const sqlQuery = 'SELECT @ROWNUM:=@ROWNUM+1 ROWNUM, b.*, DATE_FORMAT(REGISTER_DATE,"%Y-%m-%d") AS REGISTER_DATE FROM board b, (SELECT @ROWNUM:=0) R ORDER BY ROWNUM DESC;';
    db.query(sqlQuery, (err, result) => {
        console.error(err);
        res.send(result);
    });
});

app.post("/insert",(req, res)=> {
	const title = req.body.title;
	const content = req.body.content;
	const sqlQuery = "INSERT INTO BOARD(BOARD_TITLE, BOARD_CONTENT, REGISTER_ID) VALUES (?,?,'Anonymous')";
	db.query(sqlQuery, [title, content], (err, result) => {
		console.error(err);
		res.send(result);
	});
});

app.delete("/delete", (req, res) => {
    const boardid = req.body.boardid;
    const sqlQuery = "DELETE FROM BOARD WHERE BOARD_ID = ?"
    db.query(sqlQuery, [boardid], (err, result) => {
        console.error(err);
		res.send(result);
    });
});

app.put("/update", (req, res) => {
    const title = req.body.title;
	const content = req.body.content;
    const boardid = req.body.boardid;
	const sqlQuery = "UPDATE BOARD SET BOARD_TITLE = ?, BOARD_CONTENT = ?, UPDATER_ID = 'HONG', UPDATER_DATE = now() WHERE BOARD_ID = ?";
	db.query(sqlQuery, [title, content, boardid], (err, result) => {
		console.error(err);
		res.send(result);
	});
});

app.get("/getOrigin", (req, res) => {
    const boardid = req.body.boardid;
    const sqlQuery = "SELECT BOARD_TITLE, BOARD_CONTENT FROM BOARD WHERE BOARD_ID = ?";
    db.query(sqlQuery, [boardid], (err, result) => {
        console.error(err);
        res.send(result);
    });
});