const postList = [
  {
    "no": 1,
    "title": "대마고 알고리즘 경진대회",
    "winner": "",
    "start_time": "2024-06-14",
    "end_time": "2024-06-15",
    "state": "진행중"
  },
  {
    "no": 2,
    "title": "대소고 알고리즘 경진대회",
    "winner": "test1234",
    "start_time": "2020-10-25",
    "end_time": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 3,
    "title": "광마고 알고리즘 경진대회",
    "winner": "test12345",
    "start_time": "2020-10-25",
    "end_time": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 4,
    "title": "부마고 알고리즘 경진대회",
    "winner": "admin",
    "start_time": "2020-10-25",
    "end_time": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 5,
    "title": "고려대 알고리즘 경진대회",
    "winner": "admin",
    "start_time": "2020-10-25",
    "end_time": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 6,
    "title": "KAIST 알고리즘 경진대회",
    "winner": "admin",
    "start_time": "2020-10-25",
    "end_time": "2020-10-26",
    "state": "종료"
  },
  {
    "no": 7,
    "title": "그냥 알고리즘 경진대회",
    "winner": "admin",
    "start_time": "2020-10-25",
    "end_time": "2020-10-26",
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