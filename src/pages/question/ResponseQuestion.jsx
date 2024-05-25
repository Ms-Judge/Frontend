// 질문 답변 페이지
import React from 'react'
import Header from '../../components/Header'
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from '@toast-ui/react-editor'
import styled from '@emotion/styled/macro';


const ResponseQuestion = () => {
  return (
    <div>
      <Header />

      <EditorWrapper>
        <Editor
          height="200px"
          placeholder="내용을 입력해 주세요."
          previewStyle="tab" // or vertical
          initialEditType="wysiwyg" // or markdown
          // initialValue="내용을 입력해 주세요."
          // hideModeSwitch={true} // 하단 숨기기
          toolbarItems={[ // 툴바 옵션 설정
            ["heading", "bold", "italic", "strike"],
            ["hr", "quote"],
            ["ul", "ol", "task", "indent", "outdent"],
            ["table", /* "image", */ "link"],
            ["code", "codeblock"],
          ]}
          //theme="dark"
          //useCommandShortcut={false} // 키보드 입력 컨트롤 방지 ex ctrl z 등
          usageStatistics={false} // 통계 수집 거부
        />
      </EditorWrapper>
      
    </div>
  )
}

export default ResponseQuestion

const EditorWrapper = styled.div`
  max-width: 1000px;

`