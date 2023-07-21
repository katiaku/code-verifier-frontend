import React, { Fragment, useState } from "react";
import Editor from "react-simple-code-editor";
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';

const codeSnippet = 
`
// TODO: Edit this code snippet

import axios from "axios";

const getUser = () => {
    return axios.get('https://randomuser.me/api');
}

`

// Define Styles for Editor
const styles: any = {
    root: {
        boxSizing: 'border-box',
        fontFamily: '"Dank Mono", "Fira Cose", monospace',
        ...theme.plain
    }
}

// Highlight Component
const HighlightElement = (code: string) => (
    <Highlight {...defaultProps} theme={theme} code={codeSnippet} language="tsx" >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Fragment>
                { tokens.map((line, i) => (
                    <div {...getLineProps({line: line, key: i})}>
                        { line.map((token, key) =>
                            <span {...getTokenProps({token, key})} />
                        )}
                    </div>
                ))}
            </Fragment>
        )}
    </Highlight>
);

export const NewEditor = () => {

    const [code, setCode] = useState(codeSnippet);

    const handleChange = (newCode: string) => {
        setCode(newCode);
    }

    return (
        <Editor
            value={code}
            onValueChange={handleChange}
            highlight={HighlightElement}
            padding={10}
            style={styles.root}
        />
    )
}
