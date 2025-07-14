import React from "react";

type InputType = {
    onHandleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputType) {
    return <input onChange={(e) => props.onHandleChange(e)} type="text" />;
}
