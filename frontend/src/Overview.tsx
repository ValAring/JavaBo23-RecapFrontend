
import {TodosAll} from "./Todo.tsx"
import Navigation from "./Nav.tsx";
import TodoList from "./TodoList.tsx";

export default function Overview(props: TodosAll) {
    return (
        <>
            <h1>Kanban</h1>
            <Navigation />
            <div className="board">
                <section>
                    <h2>Open</h2>
                    <TodoList list={props.list.filter((element) => element.status === "OPEN")}/>
                </section>
                <section>
                    <h2>In Progress</h2>
                    <TodoList list={props.list.filter((element) => element.status === "IN_PROGRESS")}/>
                </section>
                <section>
                    <h2>Done</h2>
                    <TodoList list={props.list.filter((element) => element.status === "DONE")}/>
                </section>
            </div>

        </>
    )
}