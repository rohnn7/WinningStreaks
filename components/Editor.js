import React, { useEffect, useRef } from "react";

function Editor(props) {
  const editorRef = useRef();
  const { CKEditor, ClassicEditor } = editorRef.current || {};
  const [ editorLoaded, setEditorLoaded ] = useState( false )

  useEffect(() => {
    editorRef.current = {
      CKEditor: require("@ckeditor/ckeditor5-react").CKEditor, // v3+
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic")
 
    };
    setEditorLoaded(true)
  }, []);

  return (
    <div>
      {editorLoaded ? (
        <CKEditor
          editor={ClassicEditor}
          data={props.value}
          onChange={props.onInput}
        />
      ) : (
        <div>Editor loading</div>
      )}
    </div>
  );
}

export default Editor;