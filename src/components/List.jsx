import React, { useState } from 'react';
import styled from '@emotion/styled/macro';
import Table from 'react-bootstrap/Table';
import { Pagination } from 'react-bootstrap';

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
  const [active, setActive] = useState(1);

  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={() => setActive(number)}>
        {number}
      </Pagination.Item>,
    );
  }

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
        </tbody>
      </StyledTable>
      <StyledPagination>{items}</StyledPagination>
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

const StyledPagination = styled(Pagination)`
  .page-item.active .page-link {
    background-color: #B8FADD;
    border-color: #B8FADD;
  }
  .page-link {
    color: black;
  }
  .page-link:hover {
    color: #B8FADD;
  }
`;
