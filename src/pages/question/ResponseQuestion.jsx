// 질문 답변 페이지
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import styled from '@emotion/styled/macro';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { postQuestionReqList } from '../../QuestionReqData';
import { postQuestionResList } from '../../QuestionResData';



const ResponseQuestion = () => {
  const navigate = useNavigate();
  const [dataList, setDataList] = useState([]);
  const [resDataList, setResDataList] = useState([]);
  const [title, setTitle] = useState("");
  const [answer_Description, setAnswer_Description] = useState("");



  useEffect(() => {
    setDataList(postQuestionReqList);
    setResDataList(postQuestionResList);
  }, [])


  return (
    <div>
      {/* header, 질문명 리스트 */}
      <Header />
      <ListWrapper>
        {
          dataList ? dataList.map((item, index) => {
            return (
              <>
                <TitleName>{item.title}</TitleName>
                <QuestionText>
                  <p>{item.question_Description}</p>
                </QuestionText>
              </>
            )
          }) : ''
        }

        {
          resDataList ? resDataList.map((item, index) => {
            return (
              <>
                <ResponseTextWrapper>
                   {/* item.title 이거 연동(쿼리 사용할때 수정해야 함. */}
                  <ResponseTextTitle>{item.title}</ResponseTextTitle>
                  <ResponseText>{item.answer_Description}</ResponseText>
                </ResponseTextWrapper>
              </>
            )
          }) : ''
        }




        {/* 댓글쓰기 컴포넌트 */}

        <QuestionTitle>
          <InputGroup className="mb-3" >
            <InputGroup.Text id="basic-addon1">제목</InputGroup.Text>
            <Form.Control
              placeholder="제목을 입력해주세요"
              
            />
          </InputGroup>
        </QuestionTitle>

        <InputWrapper>
        <StyledFormControl
              placeholder="내용을 입력해주세요"
              // onChange={}
            />
        </InputWrapper>
        {/* 버튼 컴포넌트 */}
        <ButtonWraper>
          {/* 연동할때 리퀘스트 쏘고 목록으로 가도록 onClick 이벤트 적용해야힘. */}
          <SubmitButton>댓글쓰기</SubmitButton>
          <CancelButton onClick={() => navigate(`/Question`)}>돌아가기</CancelButton>
        </ButtonWraper>
      </ListWrapper>
    </div>
  )
}

export default ResponseQuestion

const TitleName = styled.h1`
  text-align: left;
  width: 60%;
  margin-bottom: 20px;
`

const InputWrapper = styled.div`
  width: 60%;
  margin-bottom: 20px;
  border: 2px solid silver;
`

const StyledFormControl = styled.input`
  width: 60%;
  height: 80px;  /* 원하는 높이로 수정 */
`;

const ListWrapper = styled.div`
  display: flex; // Flexbox를 활성화합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
  align-items: center; // 가로 축에서 중앙 정렬합니다.
  margin-top: 60px;
`

// 댓글 보이는 textarea 만들어야 함. 


const QuestionTitle = styled.div`
  width: 60%;
`

const ButtonWraper = styled.div`
  display: inline;
  align-items: center;

`;

const SubmitButton = styled(Button)`
  color: black;
  background-color: #43E5A0;
  border: 1px solid #ccc;
  margin-right: 20px;
  &:hover {
    background-color: #28a745; // 행 호버 시 배경색 변경
  }
  &:active {
    background-color: #216c34 !important; // Change background color on active (click)
    border-color: #1c5a2c !important; // Change border color on active (optional)
  }
`;

const CancelButton = styled(Button)`
  color: black;
  background-color: red;
  border: 1px solid #ccc;
  &:hover {
    background-color: #ee7b7b; // 행 호버 시 배경색 변경
  }
  &:active {
    background-color: #cf3333 !important; // Change background color on active (click)
    border-color: #cf3333 !important; // Change border color on active (optional)
  }
  
`;


const QuestionText = styled.div`
  border: 3px solid silver;
  width: 60%;
  margin-bottom: 30px;
  min-height: 100px;
  max-height: 300px;
`;

const ResponseTextWrapper = styled.div`
  border: 3px solid silver;
  border-radius: 5px;
  width: 60%;
  margin-bottom: 20px;
  height: 70px;
  max-height: 100px;
`;

const ResponseTextTitle = styled.p`
  font-weight: 500;
  margin-left: 10px;
  margin-bottom: 5px;
`
const ResponseText = styled.p`
  margin: 0 0 0 10px;
`
