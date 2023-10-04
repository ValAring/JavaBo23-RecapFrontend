import { TodosAll } from "./Todo.tsx";
import TodoCard from "./TodoCard.tsx";

export default function TodoList(props: TodosAll) {

    return (
        <>
            {props.list.map((entry) =>
                <TodoCard key={entry.id}
                      id={entry.id}
                      description={entry.description}
                      status={entry.status}
                />)}
        </>
    )
}