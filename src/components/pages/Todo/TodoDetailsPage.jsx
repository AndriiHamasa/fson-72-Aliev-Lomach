import { useParams } from "react-router-dom"

const TotoDetailsPage = () => {
    const { todoid } = useParams()
    console.log('params: ==>', todoid)

    const todos = JSON.parse(localStorage.getItem('todo'))
    const todo = todos.find(el => el.id === todoid)
    return todo && <h1>{todo.title}</h1>
}

export default TotoDetailsPage