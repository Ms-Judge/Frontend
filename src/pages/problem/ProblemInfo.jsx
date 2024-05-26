import React from "react";
import * as _ from "./style";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import styled from "@emotion/styled";

const ProblemInfo = ({
  number,
  title,
  time_limit,
  memory_limit,
  content,
  input,
  output,
  algorithm,
}) => {
  return (
    <>
      <Header />

      <_.Content>
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
            <ProblemNumber>0001{number}</ProblemNumber>
            <ProblemTitle>A + B = ?{title}</ProblemTitle>
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
        <Problem>
          <ProblemName>문제</ProblemName>
          <ProblemContent>
            ‘A + B’를 계산한 뒤, 위 값을 분석한 결과를 출력하시오.{content}
          </ProblemContent>
        </Problem>
        <Putput>
          <Input>
            <InputName>입력</InputName>
            <InputBlock>
              <InputContent>1000 2000{input}</InputContent>
            </InputBlock>
          </Input>
          <Output>
            <OutputName>출력</OutputName>
            <OutputBlock>
              <OutputContent>
                3000
                <br />
                A값과 B값의 합<br />
                A값의 3배, B값의 1.5배{output}
              </OutputContent>
            </OutputBlock>
          </Output>
        </Putput>
        <Algorithm>
          <AlgorithmName>알고리즘</AlgorithmName>
          <AlgorithmContent>수학, 구현{algorithm}</AlgorithmContent>
        </Algorithm>
      </_.Content>
    </>
  );
};

export default ProblemInfo;

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

// 문제 설명
const Problem = styled.div`
  display: flex;
  width: 100%;
  height: 85px; // 문제 설명의 단이 늘어날수록 여백 10px과 문장 30px 추가
  flex-direction: column;
  justify-content: space-between;
`;
const ProblemName = styled.div`
  display: flex;
  width: 90px;
  height: 45px;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 1px solid #000000;
  justify-content: left;
`;
const ProblemContent = styled.div`
  width: 100%;
  height: 30px; // 문제 설명의 단이 늘어날수록 여백 10px과 문장 30px 추가
  font-size: 20px;
  font-weight: 500;
`;

// 입출력
const Putput = styled.div`
  display: flex;
  width: 1280px;
  height: 175px; // 입출력 문장에 따라 30px 추가
  justify-content: space-between;
`;

// 입력
const Input = styled.div`
  display: flex;
  width: 630px;
  height: 115px; // 입력의 문장에 따라 30px 추가
  flex-direction: column;
  justify-content: space-between;
`;
const InputName = styled.div`
  display: flex;
  width: 90px;
  height: 45px;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 1px solid #000000;
  justify-content: left;
`;
const InputBlock = styled.div`
  width: 100%;
  height: 60px; // 입력의 문장에 따라 30px 추가
  font-size: 20px;
  font-weight: 500;
  background-color: #fafafa;
  border: 1px solid #000000;
`;
const InputContent = styled.div`
  width: 600px;
  height: 30px; // 입력의 문장에 따라 30px 추가
`;

// 출력
const Output = styled.div`
  display: flex;
  width: 630px;
  height: 175px; // 출력의 문장에 따라 30px 추가
  flex-direction: column;
  justify-content: space-between;
`;
const OutputName = styled.div`
  display: flex;
  width: 90px;
  height: 45px;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 1px solid #000000;
  justify-content: left;
`;
const OutputBlock = styled.div`
  width: 100%;
  height: 120px; // 출력의 문장에 따라 30px 추가
  font-size: 20px;
  font-weight: 500;
  background-color: #fafafa;
  border: 1px solid #000000;
`;
const OutputContent = styled.div`
  width: 600px;
  height: 90px;
`;

// 알고리즘
const Algorithm = styled.div`
  display: flex;
  width: 1280px;
  height: 85px;
  flex-direction: column;
  justify-content: space-between;
`;
const AlgorithmName = styled.div`
  display: flex;
  width: 180px;
  height: 45px;
  font-size: 30px;
  font-weight: 700;
  border-bottom: 1px solid #000000;
  justify-content: left;
`;
const AlgorithmContent = styled.div`
  width: 100%;
  height: 30px;
  font-size: 20px;
  font-weight: 500;
`;
