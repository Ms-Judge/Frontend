import React, { useState } from "react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const ProblemUpload = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("A + B = ?");
  // const [problemNumber, setProblemNumber] = useState("0001");
  const [time_limit, setTime_limit] = useState("시간 제한: 1초");
  const [memory_limit, setMemory_limit] = useState("메모리 제한: 128MB");
  const [problem_content, setProblem_content] = useState(
    "‘A + B’를 계산한 뒤, 위 값을 분석한 결과를 출력하시오."
  );
  const [problem_input, setProblem_input] = useState();
  const [problem_output, setProblem_output] = useState();

  const [inputExample, setInputExample] = useState("1000 2000 ");
  const [outputExample, setOutputExample] = useState(
    "3000\nA값과 B값의 합\nA값의 3배, B값의 1.5배"
  );

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      <Header />
      <Container>
        <ProblemInfos>
          <Title>문제 이름:
            <InfoInput
              placeholder="이름을 입력해주세요"
            />
          </Title>
          <Limit>시간 제한:
            <InfoInput
              placeholder="시간제한을 입력해주세요"
            />
          </Limit>
          <Limit>메모리 제한:
            <InfoInput
              placeholder="메모리 제한을 입력해주세요"
            />
          </Limit>
        </ProblemInfos>
        <DescriptionSection>
          <Section>
            <SectionTitle>문제</SectionTitle>
            <Description
              placeholder="문제 내용을 입력해주세요"
            />
          </Section>
          <Section>
            <SectionTitle>입력</SectionTitle>
            <Description
              placeholder="입력 조건을 입력해주세요"
            />
          </Section>
          <Section>
            <SectionTitle>출력</SectionTitle>
            <Description
              placeholder="출력 조건을 입력해주세요"
            />
          </Section>
          <ExampleSection>
            <Example>
              <ExampleTitle>예제 입력</ExampleTitle>
              <ExampleContent
                placeholder="입력 예제를 입력해주세요"
              />
            </Example>
            <Example>
              <ExampleTitle>예제 출력</ExampleTitle>
              <ExampleContent
                placeholder="출력 예제를 입력해주세요" 
              />
            </Example>
          </ExampleSection>
            <Example>
              <ExampleTitle>정답 입력</ExampleTitle>
              <ExampleContent
                placeholder="정답를 입력해주세요" 
              />
            </Example>
          
        </DescriptionSection>
        <ButtonContainer>
          <SubmitButton type="submit">제출하기</SubmitButton>
          <BackButton type="button" onClick={() => handleNavigation("/Question")}>
            뒤로가기
          </BackButton>
        </ButtonContainer>
      </Container>
    </>
  );
};

export default ProblemUpload;

const InfoInput = styled.input`
  margin-left: 20px;
  font-size: 20px;
  border: 1px solid black;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;


const ProblemInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  border-bottom: 1px solid #d9d9d9;
  width: 60%;
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 5px;
`;


const Limit = styled.p`
  font-size: 16px;
  margin: 2px 0;
`;


const DescriptionSection = styled.div`
  width: 60%;
  margin-top: 10px;
  align-items: flex-start;
`;

const Section = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 5px;
  text-align: left;
  border-bottom: 1px solid #000;
`;

const Description = styled.input`
  font-size: 15px;
  margin-top: 5px;
  border: 1px solid black;
  padding-left: 5px;
`;

const ExampleSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Example = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const ExampleTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 5px;
  display: inline-block;
  text-align: left;
  border-bottom: 1px solid #000;
  width: auto;
`;

const ExampleContent = styled.input`
  background-color: #ffffff;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #000;
`;

const ButtonContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #dafeef;
  border: 1px solid black;
  border-radius: 10px;
`;

const BackButton = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: #fedada;
  border: 1px solid black;
  border-radius: 10px;
`;