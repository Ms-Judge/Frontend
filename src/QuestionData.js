const postQuestionList = [
  {
    "title": "아니 이거 어케 풀어요?",
    "id": "hong",
    "createDate":  "2020-10-25"
  },
  {
    "title": "반례 인정되어야 하는거 아닌가요",
    "id": "hong",
    "createDate":  "2020-10-25"
  }, 
  {
    "title": "이거 포인터 문제임?",
    "id": "hong",
    "createDate":  "2020-10-25"
  }, 
  {
    "title": "파이썬을 왜쓰냐,,",
    "id": "hong",
    "createDate":  "2020-10-25"
  }, 
  {
    "title": "아니 이거 어케 풀어요?",
    "id": "hong",
    "createDate":  "2020-10-25"
  }, 
  {
    "title": "아니 이거 어케 풀어요?",
    "id": "hong",
    "createDate":  "2020-10-25"
  }, 
  {
    "title": "아니 이거 어케 풀어요?",
    "id": "hong",
    "createDate":  "2020-10-25"
  }, 
  {
    "title": "아니 이거 어케 풀어요?",
    "id": "hong",
    "createDate":  "2020-10-25"
  },
];

const getPostByNo = no => {
  const array = postQuestionList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postQuestionList,
  getPostByNo
};