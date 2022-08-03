// react
import React, { useState, useEffect } from 'react';

// wang editor
import '@wangeditor/editor/dist/css/style.css';
import { Editor as WangEditor, Toolbar } from '@wangeditor/editor-for-react';

/**
 * Editor
 * @returns 
 */
export const Editor = (props) => {
    // state
    const [editor, setEditor] = useState(null);
    const [html, setHtml] = useState(props.content || '');

    // effect
    useEffect(() => {
        return () => {
            if (editor == null) return;

            editor.destroy();
            setEditor(null);
        }
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

// toolbar config
const toolbarConfig = {
    excludeKeys: [
        'sup',
        'sub',
        'lineHeight',
        'todo',
        'group-indent',
        'emotion',
        'group-video',
        'undo',
        'redo',
        'divider',
    ],
};

// editor config
const editorConfig = {
    placeholder: '请输入内容...',
    MENU_CONF: {
        fontSize: {
            fontSizeList: ['12px', '14px', '16px', '18px', '24px', '40px']
        },
        fontFamily: {
            fontFamilyList: [
                '黑体',
                '仿宋',
                '楷体',
                '宋体',
                '微软雅黑',
                'Arial'
            ]
        },
        codeSelectLang: {
            codeLangs: [
                { text: 'Bash', value: 'bash' },
                { text: 'Markdown', value: 'markdown' },
                { text: 'HTML', value: 'html' },
                { text: 'XML', value: 'xml' },
                { text: 'CSS', value: 'css' },
                { text: 'Javascript', value: 'javascript' },
                { text: 'Typescript', value: 'typescript' },
                { text: 'JSX', value: 'jsx' },
                { text: 'Java', value: 'java' },
                { text: 'SQL', value: 'sql' },
            ]
        }
    }
};