
import {Todo} from "./Todo.tsx";
import Navigation from "./Nav.tsx";
import TodoList from "./TodoList.tsx";

type singleStatusPage = {
    pageName: string,
    todos: Todo[],
    filterByStatus: string,
}

export default function SingleStatus(props: singleStatusPage) {

    return (
        <>
            <h1>Kanban</h1>
            <Navigation />
            <h1>{props.pageName}</h1>
            <section>
                <TodoList list={props.todos.filter((element) => element.status === props.filterByStatus)}/>
            </section>
        </>
    )
}