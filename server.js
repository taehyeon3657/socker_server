const express = require("express");
const app = express();
const server = require("http").createServer(app);
const cors = require("cors");
const socketIo = require("socket.io")(server, {
  cors: {
    origin: String(process.env.FRONT_URL),
    credentials: true,
  },
});
const socket = require("./src/socket"); // 이 다음으로 바로 만들 파일!

const port = 4000;

// express의 미들웨어 사용 방식!
app.use(cors({ origin:  String(process.env.FRONT_URL), credentials: true })); // cors 미들웨어 사용
socket(socketIo); // 이제 곧 만들 파일에서 정의할 모듈에 socketIo 객체를 전달해줄 것입니다

server.listen(port, () => {
  console.log(
    `##### server is running on' ${String(process.env.BACK_URL)} '.' ${new Date().toLocaleString()} '#####`
  );
});

//코드를 위에서부터 보면 express로 만든 서버에 socket을 열어줬고 cors로 localhost:3000 url만 통신을 허용하도록 설정