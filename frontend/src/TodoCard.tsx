import {Todo} from "./Todo.tsx";

export default function TodoCard(props: Todo) {

    return (
        <section>
            <p>{props.description}</p>
        </section>
    )
}