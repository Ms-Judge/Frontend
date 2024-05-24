const postContestList = [
  {
    "no": 1,
    "title": "문제 이름",
    "state": "정답",
  },
  {
    "no": 2,
    "title": "문제 이름",
    "state": "정답",
  },
  {
    "no": 3,
    "title": "문제 이름",
    "state": "오답",
  },
  {
    "no": 4,
    "title": "문제 이름",
    "state": "정답",
  },
  {
    "no": 5,
    "title": "문제 이름",
    "state": "",
  },
  {
    "no": 6,
    "title": "문제 이름",
    "state": "",
  },
  {
    "no": 7,
    "title": "집에가고싶어요",
    "state": "",
  },
  
];

const getPostByNo = no => {
  const array = postContestList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postContestList,
  getPostByNo
};