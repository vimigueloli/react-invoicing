import React, {  useRef } from "react";

interface ImageInputProps {
    children: React.ReactNode;
    setPicture: Function;
}

export default function ImageInput({ children, setPicture }: ImageInputProps) {
    const inputFile = useRef(null);

    //? redirect the click event to the file input
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
            <div onClick={handleClick}>{children}</div>
        </div>
    );
}
