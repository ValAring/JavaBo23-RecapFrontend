import {useState, useEffect} from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Overview from "./Overview.tsx";
import axios from "axios";
import {Todo} from "./Todo.tsx";
import SingleStatus from "./SingleStatus.tsx";

export default function App() {

    const [todos, setTodos] = useState<Todo[]>([])

    useEffect(() => {
        loadTodos();
    }, [])

    function loadTodos() {
        axios.get("/api/todo")
            .then((response) => {
                console.log(response);
                setTodos(response.data);
            })
            .catch((error) => {
                console.log(error.status);
                console.log(error.message);
            })
    }

    return (
        <>
            <Routes>
                <Route path={"/"} element={<Overview list={todos}/>}/>
                <Route path={"/open"} element={<SingleStatus pageName={"Open"} todos={todos} filterByStatus="OPEN"/>}/>
                <Route path={"/progress"} element={<SingleStatus pageName={"In Progress"} todos={todos} filterByStatus="IN_PROGRESS"/>}/>
                <Route path={"/done"} element={<SingleStatus pageName={"Done"} todos={todos} filterByStatus="DONE"/>}/>

            </Routes>
        </>
    )
}
