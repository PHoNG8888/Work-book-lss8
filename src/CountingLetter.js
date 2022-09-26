import React, { useEffect, useState } from "react";
import './Style.css';


const CountingLetter = () => {
    const [ text, setText] = useState('');
    const[wordCount, setWordCount] = useState(0);
    const changeHandle = (event) => {
        setText(event.target.value);
    };
    useEffect(() => {
        const words = text.split(' ');
        let wordCount = 0;
        words.forEach((word) => {
            if (word.trim() !== '') {
                wordCount++;
            }
        });
        setWordCount(wordCount);
    },[text]);
 
    return(
        <div className="text">
            <textarea value={text}
            onChange={changeHandle}
            ></textarea>
            <p>Word(s): {wordCount}</p>
        </div>
    )
};

export default CountingLetter;