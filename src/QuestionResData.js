const postQuestionResList = [
  {
    "title": "잘 푸세요",
    "answer_Description": "알잘딱 하세요 겁나 쉬움",
    "question_id": 1
  },
  {
    "title": "포인터 잘못 만드신거 아님?",
    "answer_Description": "ㅇㅇ",
    "question_id": 2
  },
  {
    "title": "나도 몰라요",
    "answer_Description": "누가 좀 도와주셈",
    "question_id": 3
  },
  {
    "title": "잘 푸세요",
    "answer_Description": "알잘딱 하세요 겁나 쉬움",
    "question_id": 4
  },
];

const getPostByNo = no => {
  const array = postQuestionResList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postQuestionResList,
  getPostByNo
};