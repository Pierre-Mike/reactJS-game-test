import React, { useState, useEffect } from 'react';

export const Alert = ({ ...props }) => {
    const [text, setNum] = useState(props.text);
    return (
        <main>
            <div className="add">
                <span>0</span>
            </div>
            <div className="other">
                <div className="subtract" ><i className="fa fa-minus"></i></div>
                <div className="reset"  > <i className="fa fa-undo" className="0"></i></div >
                <div className="mover">
                </div>
            </div>
            <div>
                <div className="add"><span>1</span></div>
                <div className="other">
                    <div className="subtract" ><i className="fa fa-minus"></i></div>
                    <div className="reset" > <i className="fa fa-undo" className="{zero: isZero}"></i></div >
                </div >
                <div className="mover"></div>
            </div >
        </main>

    )
}   