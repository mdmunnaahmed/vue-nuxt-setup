export default function useTodo() {
    const todoList = useState('todoList', () => [])

    function addTodo(payload) {
        todoList.value = [...todoList.value, payload]
    }
    return {
        todoList, addTodo
    }
}