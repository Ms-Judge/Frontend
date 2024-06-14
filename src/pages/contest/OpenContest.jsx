import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";

const OpenContest = () => {
  const [contestName, setContestName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [problems, setProblems] = useState([""]); 
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // 대회 정보를 서버로 전송하거나 다른 처리를 하는 부분
    console.log("대회 이름:", contestName);
    console.log("시작 날짜:", startDate);
    console.log("종료 날짜:", endDate);
    console.log("설명:", description);
    console.log("알고리즘 문제:", problems);
    // 이후에는 상태를 초기화하거나 다른 페이지로 이동하는 로직을 추가할 수 있습니다.
    alert("대회 개최를 성공했습니다.");
    navigate(`/ContestList`);
  };

  const handleProblemChange = (index, value) => {
    const newProblems = [...problems];
    newProblems[index] = value;
    setProblems(newProblems);
  };

  const addProblem = () => {
    if (problems.length < 7) {
      setProblems([...problems, ""]);
    }
  };

  const removeProblem = (index) => {
    if (problems.length > 1) {
      const newProblems = problems.filter((_, i) => i !== index);
      setProblems(newProblems);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>대회 개최</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>대회 이름:</Label>
            <Input
              type="text"
              value={contestName}
              onChange={(e) => setContestName(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>시작 날짜:</Label>
            <Input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>종료 날짜:</Label>
            <Input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>설명:</Label>
            <Textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label>알고리즘 문제:</Label>
            {problems.map((problem, index) => (
              <ProblemGroup key={index}>
                <Input
                  type="text"
                  value={problem}
                  onChange={(e) => handleProblemChange(index, e.target.value)}
                  required
                />
                <RemoveButton type="button" onClick={() => removeProblem(index)}>삭제</RemoveButton>
              </ProblemGroup>
            ))}
            {problems.length < 7 && (
              <AddButton type="button" onClick={addProblem}>문제 추가</AddButton>
            )}
          </FormGroup>
          <Button type="submit">대회 개최</Button>
        </Form>
      </Container>
    </>
  );
};

export default OpenContest;

const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const ProblemGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Textarea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #0FA968;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
`;

const AddButton = styled.button`
  padding: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
`;

const RemoveButton = styled.button`
  padding: 10px;
  background-color: #FF0000;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
`;

