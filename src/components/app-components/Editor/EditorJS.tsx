import React, { useRef, useEffect, useContext } from "react";
import { EditorContext } from "./EditorContectProvider";

const MyEditor: React.FC = () => {
  const { initEditor, handleSave, savedData } = useContext(EditorContext); // Используем контекст
  const editorRef = useRef<boolean | null>(null);

  useEffect(() => {
    if (!editorRef.current) {
      initEditor();
      editorRef.current = true;
    }
  }, [initEditor]);

  return (
    <div style={{ padding: "20px", width: "800px", margin: "0 auto" }}>
      <h2>Мой редактор</h2>

      {/* Контейнер для Editor.js */}
      <div id="editor" style={{ border: "1px solid #ddd", padding: "10px", minHeight: "200px" }} />

      {/* Кнопка для сохранения */}
      <button
        onClick={handleSave}
        style={{
          padding: "10px 15px",
          backgroundColor: "#28a745",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginTop: "10px",
        }}
      >
        Сохранить
      </button>

      {/* Отображаем сохранённые данные */}
      {savedData && (
        <div style={{ marginTop: "20px", fontSize: '16px' }}>
          <h3>Сохранённые данные:</h3>
          <span>{JSON.stringify(savedData, null, 2)}</span>
        </div>
      )}
    </div>
  );
};

export default MyEditor;
