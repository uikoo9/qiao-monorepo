// react
import React, { useState, useEffect } from 'react';

// wang editor
import '@wangeditor/editor/dist/css/style.css';
import { Editor as WangEditor, Toolbar } from '@wangeditor/editor-for-react';

// config
import { editorConfig, toolbarConfig } from './editor-config.js';

/**
 * Editor
 * @returns 
 */
export const Editor = (props) => {
    // editor
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        return () => {
            if (editor == null) return;

            editor.destroy();
            setEditor(null);
        }
    }, [editor]);

    // html
    const [html, setHtml] = useState('');
    useEffect(() => {
        setHtml(props.content);
    }, [props.content]);

    return (
        <>
            <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
                <Toolbar
                    editor={editor}
                    defaultConfig={toolbarConfig}
                    mode="default"
                    style={{ borderBottom: '1px solid #ccc' }}
                />
                <WangEditor
                    defaultConfig={editorConfig}
                    value={html}
                    onCreated={setEditor}
                    onChange={editor => setHtml(editor.getHtml())}
                    mode="default"
                    style={{ height: '400px', overflowY: 'hidden' }}
                />
            </div>
        </>
    )
};