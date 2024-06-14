const postContestList = [
  {
    "problems": 1,
    "title": "A + B = ? ",
    "state": "정답",
  },
  {
    "problems": 2,
    "title": "집에 갈 수 있는 법",
    "state": "",
  },
  {
    "problems": 3,
    "title": "대마고에서 살아남기",
    "state": "",
  },
  {
    "problems": 4,
    "title": "기숙사 탈출하는 법",
    "state": "",
  },
  {
    "problems": 5,
    "title": "침몰하는 타이타닉",
    "state": "",
  },
  {
    "problems": 6,
    "title": "수행 만점 맞는 법",
    "state": "",
  },
  {
    "problems": 7,
    "title": "나는 행복합니다",
    "state": "",
  }
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