import React from "react";
import * as _ from "./style";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styled from "@emotion/styled";

const ProblemSolve = (number, title, time_limit, memory_limit) => {
  const SubmitButton = () => {
    // 코드 전송
  };
  const BackButton = () => {
    Navigate(-1);
  };

  const rowCount = "#target".value.split(/\r\n|\r|\n/).length;
  const targetTextarea = document.querySelector("#target");
  if (rowCount <= 12) targetTextarea.style.height = "500px";
  else targetTextarea.style.height = 20 + rowCount * 30 + "px";

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    fetch("/some-api", { method: form.method, body: formData });
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // 연동 시에 수정 필요
  }

  /*
  const [moives, setMovies] = useState([])

    useEffect(()=> {
        fetch('http://localhost:8080/movie', {
            method : "GET"   
        }).then(res=>res.json()).then(res=>{
            console.log(1, res);
            setMovies(res);
        });              
    }, []);
  */

  return (
    <_.Content>
      <Header />
      <_.MenuList>
        <_.ShortBlockSet>
          <_.ShortBlock>
            <Link to="">문제 보기</Link>
          </_.ShortBlock>
          <_.ShortBlock>
            <Link to="">코드 제출</Link>
          </_.ShortBlock>
          <_.ShortBlock>
            <Link to="">제출 현황</Link>
          </_.ShortBlock>
        </_.ShortBlockSet>
        <_.LongBlock>
          <Link to="">질문 게시판 가기</Link>
        </_.LongBlock>
      </_.MenuList>
      <ProblemInformation>
        <ProblemData>
          <ProblemNumber>9999{number}</ProblemNumber>
          <ProblemTitle>
            헥사나이트로헥사아자이소부르치탄을발견하다니나는노벨상수상자{title}
          </ProblemTitle>
        </ProblemData>
        <ProblemLimit>
          <ProblemTimeLimit>
            <ProblemTimeLimitBlock>시간 제한</ProblemTimeLimitBlock>
            <ProblemTimeLimitBlock>1초{time_limit}</ProblemTimeLimitBlock>
          </ProblemTimeLimit>
          <ProblemMemoryLimit>
            <ProblemMemoryLimitBlock>메모리 제한</ProblemMemoryLimitBlock>
            <ProblemMemoryLimitBlock>
              128MB{memory_limit}
            </ProblemMemoryLimitBlock>
          </ProblemMemoryLimit>
        </ProblemLimit>
      </ProblemInformation>
      <Code method="post" onSubmit={handleSubmit}>
        <CodeWriting>
          <CodeWritingHeader />
          <CodeWritingContent
            id="target"
            name="code"
            defaultValue="코드 작성 부분"
          ></CodeWritingContent>
        </CodeWriting>
        <SubmitButton type="submit" onClick={SubmitButton}>
          제출하기
        </SubmitButton>
        <BackButton onClick={BackButton}>뒤로가기</BackButton>
      </Code>
    </_.Content>
  );
};

export default ProblemSolve;

// 문제 정보
const ProblemInformation = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  font-weight: 700;
  border-bottom: 1px solid #d9d9d9;
  justify-content: space-between;
  align-items: center;
`;
const ProblemData = styled.div`
  width: 330px;
  height: 80px;
  font-size: 30px;
`;
const ProblemNumber = styled.div`
  width: 150px;
  height: 80px;
`;
const ProblemTitle = styled.div`
  width: 180px;
  height: 80px;
`;
const ProblemLimit = styled.div`
  width: 220px;
  height: 90px;
`;
const ProblemTimeLimit = styled.div`
  display: flex;
  width: 100px;
  height: 90px;
  font-size: 20px;
  flex-direction: column;
  justify-content: left;
`;
const ProblemTimeLimitBlock = styled.div`
  width: 100%;
  height: 45px;
`;
const ProblemMemoryLimit = styled.div`
  display: flex;
  width: 120px;
  height: 90px;
  font-size: 20px;
  flex-direction: column;
  justify-content: right;
`;
const ProblemMemoryLimitBlock = styled.div`
  width: 100%;
  height: 45px;
`;

// 코드 작성 부분
const Code = styled.form`
  width: 840px;
  height: 580px;
  font-size: 30px;
  font-weight: 700;
`;
const CodeWriting = styled.label`
  width: 840px;
  height: 515px;
`;
const CodeWritingHeader = styled.div`
  width: 100%;
  height: 15px;
  background-color: #43e5a0;
  border: 1px 1px 0px solid #000000;
`;
const CodeWritingContent = styled.textarea`
  width: 100%;
  height: 500px;
  border: 0px 1px 1px solid #000000;
`;
const SubmitButton = styled.button`
  width: 180px;
  height: 50px;
  background-color: #dafeef;
  border: 1px solid #000000;
  border-radius: 10px;
`;
const BackButton = styled.button`
  width: 180px;
  height: 50px;
  background-color: #fedada;
  border: 1px solid #000000;
  border-radius: 10px;
`;
