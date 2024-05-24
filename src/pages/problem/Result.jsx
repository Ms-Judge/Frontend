import React from "react";
import * as _ from "./style";
import styled from "@emotion/styled";
import Header from "../../components/Header";

const Result = () => {
  return (
    <_.Content>
      <Header />
      <_.MenuList>
        <_.ShortBlockSet>
          <_.ShortBlock>문제 보기</_.ShortBlock>
          <_.ShortBlock>코드 제출</_.ShortBlock>
          <_.ShortBlock>제출 현황</_.ShortBlock>
        </_.ShortBlockSet>
        <_.LongBlock>질문 게시판 가기</_.LongBlock>
      </_.MenuList>
    </_.Content>
  );
};

export default Result;

// 문제 서술
const ProblemInformation = styled.div`
  width: 100%;
  height: 100px;
  font-weight: 700;
  border-bottom: 1px solid #d9d9d9;
`;
const ProblemNumber = styled.div`
  width: 150px;
  height: 80px;
  font-size: 30px;
`;
const ProblemTitle = styled.div`
  width: 180px;
  height: 80px;
  font-size: 30px;
`;

// 문제
const ProblemDescription = styled.div`
  width: 1280px;
  height: 45px;
  font-size: 25px;
  font-weight: 600;
  border-bottom: 1px solid #d9d9d9;
`;
const ProblemDescriptionBlock = styled.div`
  width: 120px;
  height: 40px;
`;
const Question = styled.div`
  width: 100%;
  height: 60px;
  border: 1px solid #000000;
`;
