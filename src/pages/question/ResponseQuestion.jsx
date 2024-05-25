// 질문 답변 페이지
import React from 'react'
import Header from '../../components/Header'
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from '@toast-ui/react-editor'
import styled from '@emotion/styled/macro';
import '@toast-ui/editor/dist/i18n/ko-kr';


const ResponseQuestion = () => {
  return (
    <div>
      <Header />

      <ListWrapper>
          <TitleName>아니 이거 어케 풀어요?(더미)</TitleName>


          <EditorWrapper>
            <Editor
              height="200px"
              initialValue=" "
              previewStyle="vertical" // or vertical
              initialEditType="wysiwyg"
              hideModeSwitch= "true"
              language="ko-KR"
              useCommandShortcut={false} // 키보드 입력 컨트롤 방지 ex ctrl z 등
              usageStatistics={false} // 통계 수집 거부
            />
          </EditorWrapper>
        </ListWrapper>
    </div>
  )
}

export default ResponseQuestion

const TitleName = styled.h1`
  text-align: left;
  width: 60%;
  margin-bottom: 20px;
`

const EditorWrapper = styled.div`
  width: 60%;

`
const ListWrapper = styled.div`
  display: flex; // Flexbox를 활성화합니다.
  flex-direction: column; // 자식 요소들을 세로로 배치합니다.
  align-items: center; // 가로 축에서 중앙 정렬합니다.
  margin-top: 60px;
`

// 댓글 보이는 textarea 만들어야 함. 