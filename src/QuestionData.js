const postQuestionList = [
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