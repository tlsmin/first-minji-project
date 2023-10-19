// express 모듈 호출
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/db.js");

// http://localhost:4000/ 으로 접속 시 응답메시지 출력
app.get("/", (req, res) => {
    console.log("root");
    res.send('OK');
});

app.get("/user", (req, res) => {
    // console.log("/user");
    db.query("select * from user", (err, data) => {
        if (!err) {
            console.log(data);
            res.json(data); // 응답을 클라이언트에 보낸다.(수정)
        } else {
            console.log(err);
            res.status(500).json({ error: "Internal Server Error" });
        }
    });
    
});

app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}`)
})