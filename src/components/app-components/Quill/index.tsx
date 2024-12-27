import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';

const toolbarOptions = [
  [{ font: [] }],
  [{ size: ['small', false, 'large', 'huge'] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ color: [] }, { background: [] }],
  [{ script: 'sub' }, { script: 'super' }],
  [{ header: [1, 2, false] }],
  ['blockquote', 'code-block'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ align: [] }],
  [{ indent: '-1' }, { indent: '+1' }],
  ['link', 'image', 'video'],
  ['clean'],
  ['tab1', 'tab2', 'tab3'], // Добавляем кастомные кнопки для вкладок
];

const TextEditorWithTabs: React.FC = () => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  const [activeTab, setActiveTab] = useState<string>('tab1'); // Состояние для активной вкладки

  useEffect(() => {
    const initEditor = () => {
      if (!editorRef.current) return;

      const quill = new Quill(editorRef.current, {
        theme: 'snow',
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              tab1: () => handleTabClick('tab1'),
              tab2: () => handleTabClick('tab2'),
              tab3: () => handleTabClick('tab3'),
            },
          },
        },
        placeholder: 'Start typing here...',
      });

      quillRef.current = quill;
    };

    initEditor();

    return () => {
      editorRef.current = null;
    };
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab); // Устанавливаем активную вкладку
    if (quillRef.current) {
      const editor = quillRef.current;
      const content = editor.root.innerHTML;
      console.log(`Content from ${tab}:`, content);
    }
  };

  return (
    <div>
      {/* Панель вкладок */}
      <div style={{ marginBottom: '10px' }}>
        <button
          style={{
            padding: '5px 10px',
            marginRight: '5px',
            backgroundColor: activeTab === 'tab1' ? 'blue' : 'gray',
            color: 'white',
            border: 'none',
          }}
          onClick={() => handleTabClick('tab1')}
        >
          Tab 1
        </button>
        <button
          style={{
            padding: '5px 10px',
            marginRight: '5px',
            backgroundColor: activeTab === 'tab2' ? 'blue' : 'gray',
            color: 'white',
            border: 'none',
          }}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </button>
        <button
          style={{
            padding: '5px 10px',
            backgroundColor: activeTab === 'tab3' ? 'blue' : 'gray',
            color: 'white',
            border: 'none',
          }}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </button>
      </div>

      {/* Редактор Quill */}
      <div ref={editorRef} style={{ height: '400px', maxWidth: '1250px' }}></div>

      {/* Контент в зависимости от активной вкладки */}
      <div style={{ marginTop: '20px' }}>
        {activeTab === 'tab1' && <div><h3>Content for Tab 1</h3><p>Here is some content for the first tab.</p></div>}
        {activeTab === 'tab2' && <div><h3>Content for Tab 2</h3><p>Here is some content for the second tab.</p></div>}
        {activeTab === 'tab3' && <div><h3>Content for Tab 3</h3><p>Here is some content for the third tab.</p></div>}
      </div>
    </div>
  );
};

export default TextEditorWithTabs;
