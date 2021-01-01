// Taken from https://medium.com/@lucasalgus/creating-a-custom-auto-resize-textarea-component-for-your-react-web-application-6959c0ad68bc

import React, { useState, useEffect, useRef } from "react";

import "./auto-text-area.styles.css";

const AutoTextArea = (props) => {
    const textAreaRef = useRef(null);
    const [text, setText] = useState("");
    const [textAreaHeight, setTextAreaHeight] = useState("auto");
    const [parentHeight, setParentHeight] = useState("auto");

    useEffect(() => {
        setParentHeight(`${textAreaRef.current.scrollHeight}px`);
        setTextAreaHeight(`${textAreaRef.current.scrollHeight}px`);
    }, [text])

    const onChangeHandler = event => {
        setTextAreaHeight("auto");
        setParentHeight(`${textAreaRef.current.scrollHeight}px`)
        setText(event.target.value);

        if (props.onChange) {
            props.onChange(event);
        }
    };

    const parentStyle = {
        minHeight: parentHeight
    };

    const textAreaStyle = {
        height: textAreaHeight
    };

    return (
        <div style={parentStyle}>
            <textarea
                {...props}
                ref={textAreaRef}
                style={textAreaStyle}
                rows={1}
                onChange={onChangeHandler}
            />
        </div>
    );
};

export default AutoTextArea;