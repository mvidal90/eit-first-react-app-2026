import { Suspense, useMemo, useState } from "react"

import Text from "../components/Text"
import TodoList from "../components/TodoList"

import { getTodos } from "../api/todos"
function TodosWithUse() {

    const [search, setSearch] = useState("")

    const todoPromise = useMemo(() => getTodos(search), [search])

    return (
        <>
            <Text as="h2" text={"Gestión de tareas"} />
            <div className="todos__searcher-container">
                <input
                    id="search" 
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    className="todos__searcher-input" 
                    placeholder="Buscar..." />
            </div>
            <div className="todos__list-container">
                <Suspense fallback={<Text as="strong" text={"Loading..."} />}>
                    <TodoList todoPromise={todoPromise} />
                </Suspense>
            </div>
        </>
    )
}

export default TodosWithUse