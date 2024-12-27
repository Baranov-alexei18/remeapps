import { createContext,useState,  useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Paragraph from '@editorjs/paragraph'
import Header from '@editorjs/header'
import Alert from 'editorjs-alert'
import List from '@editorjs/list'
import Image from '@editorjs/image'
import Embed from '@editorjs/embed'
import ChangeCase from 'editorjs-change-case'
import SimpleImage from '@editorjs/simple-image'
import Marker from '@editorjs/marker'
import InlineCode from '@editorjs/inline-code'
import Checklist from "@editorjs/checklist"
import AligmentBlockTune from 'editorjs-text-alignment-blocktune'
import CustomBlock from './CustomBlock.tsx';
import ResizableImage from './ResizableImageTool.ts';
import QuestionAnswerTool from "./QuestionAnswerTool.tsx";
import Table from '@editorjs/table'
import ColorPlugin from './ColorPlugin.ts'
import BackgroundColorPlugin from './BackgroundColorPlugin.ts'

import './styles.css'

export const EditorContext = createContext();


function EditorContextProvider(props) {
    const editorInstanceRef = useRef(null);
    const [savedData, setSavedData] = useState(null);
    
    const initEditor = () => {
        const editor = new EditorJS({
            holder: 'editor',
            placeholder: '????',
            tools: {
                color: {
                    class: ColorPlugin,
                    inlineToolbar: true,  // Убедитесь, что инлайн тулбар включен
                },
                backgroundColor: {
                    class: BackgroundColorPlugin,
                    inlineToolbar: true,  // Убедитесь, что инлайн тулбар включен
                  },
                textAligment: {
                    class: AligmentBlockTune,
                    config: {
                        default: 'left',
                        blocks: {
                            header: 'center',
                        }
                    },
                },
                paragraph: {
                    class: Paragraph,
                    tunes: ['textAligment']
                },
                header: {
                    class: Header,
                    inlineToolbar: true,
                    tunes: ['textAligment'],
                    config: {
                        placeholder: 'Title',
                        levels: [1, 2, 3, 4, 5],
                        defaultLevel: 2,
                    }
                },
                alert: {
                    class: Alert,
                    config: {
                        defaultType: 'primary',
                        messagePlaceholder: 'Enter something'
                    }
                },
                list: {
                    class: List,
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                },
                image: {
                    class: Image,
                },
                embed: {
                    class: Embed,
                    config: {
                        services: {
                            youtube: true,
                            codepen: true,
                        }
                    }
                },
                marker: {
                    class: Marker,
                },
                inlineCode: {
                    class: InlineCode,
                },
                changeCase: {
                    class: ChangeCase,
                },
                customBlock: {
                    class: CustomBlock,  // Регистрация кастомного блока
                },
                reuzableImage: {
                    class: ResizableImage,
                },
                questionAnswer: {
                    class: QuestionAnswerTool,
                },
            }
        })

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