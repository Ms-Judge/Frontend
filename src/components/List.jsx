import React from 'react';
import styled from '@emotion/styled/macro';
import Table from 'react-bootstrap/Table';

// Table 컴포넌트를 styled-components로 감싸 스타일 정의
const StyledTable = styled(Table)`
  width: 60%;
  /* margin: 15% auto; */
  &.table {
    // Table 기본 스타일 정의
    background-color: #B8FADD;
    
    // thead 스타일 정의
    thead {
      tr {
        th {
          background-color: #B8FADD; // 헤더 배경색 변경
          color: black; // 헤더 글자색 변경
        }
      }
    }
    
    // tbody 스타일 정의
    tbody {
      tr {
        &:hover {
          background-color: #B8FADD; // 행 호버 시 배경색 변경
        }
        td {

        }
      }
    }
  }
`;

const List = () => {
  return (
    <ListWrapper>
      <TitleName>대회 목록</TitleName>
      <StyledTable bordered hover>
        <thead>
          <tr>
            <th>대회이름</th>
            <th>우승</th>
            <th>시작</th>
            <th>종료</th>
            <th>상태</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          <tr>
            <td>대마고 알고리즘 경진대회</td>
            <td>홍길동</td>
            <td>2024년 5월 22일</td>
            <td>2024년 5월 31일</td>
            <td>진행중</td>
          </tr>
          {/* 나머지 행들 */}
        </tbody>
      </StyledTable>
    </ListWrapper>
  );
}

export default List;

const TitleName = styled.h1`
  text-align: left;
  width: 60%;
  margin-bottom: 20px; // 아래쪽 여백 추가
`

const ListWrapper = styled.div`
  display: flex; // Flexbox를 활성화합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
  align-items: center; // 가로 축에서 중앙 정렬합니다.
  margin-top: 40px;
`
