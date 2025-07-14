import React from "react";

type HeadingTypes = {
    children: string;
};

function Heading(props: HeadingTypes) {
    return (
        <div>
            <h2>{props.children}</h2>
        </div>
    );
}

export default Heading;
