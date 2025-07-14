import { Fragment } from "react/jsx-runtime";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
import Button from "./components/Button";

function App() {
    const personName = {
        first: "mehedi",
        last: "hasan",
    };

    const personList = [
        {
            first: "Mehedi",
            last: "Hasan",
        },
        {
            first: "Sumon",
            last: "Bro",
        },
        {
            first: "Rajon",
            last: "bro",
        },
    ];

    const handle_click = (e: React.MouseEvent,id:number) => {
        console.log("first", e,id);
    };

    return (
        <Fragment>
            <Greet name="sumon bro" messageCount={20} />
            <Person name={personName} />
            <PersonList names={personList} />
            <Status status="success" />
            <Heading>Mehedi</Heading>
            <Oscar>
                <Heading>child component within another components</Heading>
            </Oscar>
            <Button
                handleClick={handle_click}
            />
        </Fragment>
    );
}

export default App;
