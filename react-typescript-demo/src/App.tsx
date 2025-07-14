import { Fragment } from "react/jsx-runtime";
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
        }
    ];

    return (
        <Fragment>
            <Greet name="sumon bro" messageCount={20} />
            <Person name={personName} />
            <PersonList names={personList} />
            <Status status="success"/>
        </Fragment>
    );
}

export default App;
