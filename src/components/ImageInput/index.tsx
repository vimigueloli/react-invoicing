import React, { useEffect, useRef, useState } from "react";

interface ImageInputProps {
    children: React.ReactNode;
    setPicture: Function;
}

export default function ImageInput({ children, setPicture }: ImageInputProps) {
    const inputFile = useRef(null);

    function handleClick() {
        //@ts-ignore
        inputFile.current.click();
    }

    return (
        <div>
            <input
                type="file"
                id="file"
                ref={inputFile}
                style={{ display: "none" }}
                onChange={(e) => {
                    //@ts-ignore
                    setPicture(e.target.files[0]);
                }}
            />
            <div onClick={handleClick}>Edit Logo</div>
        </div>
    );
}
