import React, { useState } from 'react';
import Editor from './EditorJS.tsx';
import { OutputData } from '@editorjs/editorjs';
import EditorContextProvider from './EditorContectProvider.jsx';

const AppEditor: React.FC = () => {
  const [editorData, setEditorData] = useState<OutputData | undefined>();

  const handleEditorChange = (data: OutputData) => {
    setEditorData(data);
    console.log('Editor content:', data);
  };

  return (
    <div>
      <EditorContextProvider>
      <h1>Editor.js in React + TypeScript</h1>
      <Editor />
      </EditorContextProvider>
    </div>
  );
};

export default AppEditor;
