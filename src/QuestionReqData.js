const postQuestionReqList = [
  {
    "title": "아니 이거 어케 풀어요?",
    "question_Description": "이거 어케 푸노",
  },
];

const getPostByNo = no => {
  const array = postQuestionReqList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postQuestionReqList,
  getPostByNo
};