import React from "react";

type StatusType = {
    status: 'success'|'loading'|'error';
};

function Status(props: StatusType) {
    let message = "sumon bro is not well";
    if (props.status === "loading") message = "Loading...";
    else if (props.status === "success") message = "Data Fatched Successfully!";
    else if(props.status==='error') message = "Error fetching data";

    return (
        <div>
            <h2>Status:- {message}</h2>
        </div>
    );
}

export default Status;
