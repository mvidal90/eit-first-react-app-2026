import { useEffect, useState } from "react"
import Text from "../components/Text"
import { getTodos } from "../api/todos"
import TodoCard from "../components/TodoCard"

function Todos() {

    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState("")

    useEffect(() => {
        setLoading(true)
        getTodos(search)
            .then(
                resp => setTodos(resp) // rest es lo que retorna getTodos
            ) // Resp positiva
            .catch(err => console.log(err)) // Error
            .finally(() => setLoading(false))
    }, [search])

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
                {
                    loading ?
                        <Text as="strong" text={"Loading..."} />
                    :
                        todos.map(
                            todo => 
                                <TodoCard 
                                    key={todo.id}
                                    {...todo}
                                />
                    )
                }
            </div>
        </>
    )
}

export default Todos