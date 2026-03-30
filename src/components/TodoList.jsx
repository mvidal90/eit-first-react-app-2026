import { use } from "react";
import TodoCard from "./TodoCard"

function TodoList({ todoPromise }) {

    const todosList = use(todoPromise);

    return (
        todosList.map(
            todo => 
                <TodoCard 
                    key={todo.id}
                    {...todo}
                />
        )
    )
}

export default TodoList