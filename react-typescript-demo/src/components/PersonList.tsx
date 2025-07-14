import React from "react";

type PersonListType = {
    names: {
        first: string;
        last: string;
    }[];
};

function PersonList(props: PersonListType) {

    return (
        <div>
            {props.names.map((name,key) => {
                return (
                    <div key={key} >
                        <p>
                            First Name: <span>{name.first}</span>
                        </p>
                        <p>Last Name: <span>{name.last}</span> </p>
                    </div>
                );
            })}
        </div>
    );
}

export default PersonList;
