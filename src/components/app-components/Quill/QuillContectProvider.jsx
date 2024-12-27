import { createContext,useState,  useRef } from "react";
import Quill from 'quill';

export const EditorContext = createContext();


function EditorContextProvider(props) {
    const editorInstanceRef = useRef(null);
    const [savedData, setSavedData] = useState(null);
    
    const initEditor = () => {
        const editor = new Quill('#editor', {
            theme: 'snow',
        });
        
        editorInstanceRef.current = editor;
    }

    const handleSave = async () => {
        if (editorInstanceRef.current) {
            const data = await editorInstanceRef.current.save(); // Сохраняем данные
            setSavedData(data); // Сохраняем в состояние
            console.log("Saved Data: ", data); // Выводим сохраненные данные в консоль
        }
    };

    return (
        <EditorContext.Provider value={{initEditor, handleSave, savedData, editorInstanceRef}}>
            {props.children}
        </EditorContext.Provider>
    );
}

export default EditorContextProvider;