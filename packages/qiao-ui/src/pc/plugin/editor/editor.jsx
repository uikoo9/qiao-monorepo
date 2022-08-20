// react
import React, { useState, useEffect } from 'react';

// wang editor
import '@wangeditor/editor/dist/css/style.css';
import { Editor as WangEditor, Toolbar } from '@wangeditor/editor-for-react';

// config
import { editorConfig, toolbarConfig } from './editor-config.js';

// log
import { logRed } from '../../../util/log.js';

/**
 * Editor
 * @returns 
 */
export const Editor = (props) => {
    logRed('qiao-ui/pc/editor: render');

    // editor
    const [editor, setEditor] = useState(null);
    useEffect(() => {
        logRed('qiao-ui/pc/editor: useEffect');

        return () => {
            if (editor == null) return;

            editor.destroy();
            setEditor(null);
        };
    }, [editor]);

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
                    value={props.content}
                    onCreated={setEditor}
                    onChange={editor => props.onChange(editor.getHtml())}
                    mode="default"
                    style={{ height: '400px', overflowY: 'hidden' }}
                />
            </div>
        </>
    );
};