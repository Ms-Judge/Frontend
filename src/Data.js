const postList = [
  {
    "no": 1,
    "title": "대마고 알고리즘 경진대회",
    "winner": "홍길동",
    "createDate": "2020-10-25",
    "endDate": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 2,
    "title": "대마고 알고리즘 경진대회",
    "winner": "홍길동",
    "createDate": "2020-10-25",
    "endDate": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 3,
    "title": "대마고 알고리즘 경진대회",
    "winner": "홍길동",
    "createDate": "2020-10-25",
    "endDate": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 4,
    "title": "대마고 알고리즘 경진대회",
    "winner": "홍길동",
    "createDate": "2020-10-25",
    "endDate": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 5,
    "title": "대마고 알고리즘 경진대회",
    "winner": "홍길동",
    "createDate": "2020-10-25",
    "endDate": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 6,
    "title": "대마고 알고리즘 경진대회",
    "winner": "홍길동",
    "createDate": "2020-10-25",
    "endDate": "2020-10-26",
    "state": "종료"
  },
];

const getPostByNo = no => {
  const array = postList.filter(x => x.no == no);
  if (array.length == 1) {
    return array[0];
  }
  return null;
}

export {
  postList,
  getPostByNo
};