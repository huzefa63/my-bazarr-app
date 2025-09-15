'use client';

import { useState } from "react";

function TextExpander({text,limitChars=100}) {
    const [expand,setExpand] = useState(true);
    const contracted = text.slice(0,limitChars)
    return (
        <div>
            {expand ? contracted : text}
            <button onClick={()=>setExpand(!expand)} className="ml-2 smooth-transition hover:bg-text-600 text-xs text-blue-500">{expand ? '...see more':'see less'}</button>
        </div>
    )
}

export default TextExpander
