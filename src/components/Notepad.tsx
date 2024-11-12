import React from "react";
import Container from "./Container";

interface Props {
    color: string;
}

const Notepad = ({color}: Props) => {
    const noteStyle = "p-2 justify-self-left text-xl" 
    const dividerStyle = "h-5 w-full"
    return (
        <>
        <div className="py-8 grid place-items-center">
            <Container>
                <div className="bg-white rounded-lg grid grid-flow-row w-[402px]">
                    <div className={`bg-${color}-300 text-center rounded-t-lg`}>
                        <p className="text-3xl p-4">Tech</p>
                    </div>
                    <hr className={dividerStyle}></hr>
                    <p className={noteStyle}>Tech</p>
                    <hr className={dividerStyle}></hr>
                    <p className={noteStyle}>Tech</p>
                    <hr className={dividerStyle}></hr>
                    <p className={noteStyle}>Tech</p>
                </div>
            </Container>
        </div>
        </>
    )
};

export default Notepad