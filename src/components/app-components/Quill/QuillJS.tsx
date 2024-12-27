import React, {
  forwardRef,
  useEffect,
  useLayoutEffect,
  useRef,
  RefObject,
} from 'react';
import Quill from 'quill';

interface EditorProps {
  readOnly?: boolean;
  defaultValue?: any;
  onTextChange?: (delta: any, oldDelta: any, source: string) => void;
  onSelectionChange?: (range: any | null, oldRange: any | null, source: string) => void;
}

const Editor = forwardRef<Quill | null, EditorProps>(
  ({ readOnly, defaultValue, onTextChange, onSelectionChange }, ref) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const defaultValueRef = useRef<any | undefined>(defaultValue);
    const onTextChangeRef = useRef<typeof onTextChange>(onTextChange);
    const onSelectionChangeRef = useRef<typeof onSelectionChange>(onSelectionChange);

    useLayoutEffect(() => {
      onTextChangeRef.current = onTextChange;
      onSelectionChangeRef.current = onSelectionChange;
    });

    useEffect(() => {
      (ref as RefObject<Quill | null>).current?.enable(!readOnly);
    }, [ref, readOnly]);

    useEffect(() => {
      const container = containerRef.current;
      if (!container) return;

      const editorContainer = container.appendChild(
        container.ownerDocument.createElement('div'),
      );

      const quill = new Quill(editorContainer, {
        theme: 'snow',
      });

      if (ref && typeof ref === 'object') {
        ref.current = quill;
      }

      if (defaultValueRef.current) {
        quill.setContents(defaultValueRef.current);
      }

      quill.on(Quill.events.TEXT_CHANGE, (...args) => {
        onTextChangeRef.current?.(...args);
      });

      quill.on(Quill.events.SELECTION_CHANGE, (...args) => {
        onSelectionChangeRef.current?.(...args);
      });

      return () => {
        if (ref && typeof ref === 'object') {
          ref.current = null;
        }
        container.innerHTML = '';
      };
    }, [ref]);

    return <div ref={containerRef}></div>;
  },
);

Editor.displayName = 'Editor';

export default Editor;
