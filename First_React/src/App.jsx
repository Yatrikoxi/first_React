import { useEffect, useState } from "react"
import { TodoList } from "./TodoList"
import { NewTodoForm } from "./newTodoForm"
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])
  
  function handleSubmit(e) {
    e.preventDefault()
    setTodos(currentTodos => {
      return [
      ...currentTodos,
      {id:crypto.randomUUID(), title: newItem, completed:false},
    ]
  })
  setNewItem("")
  }
  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  function addTodo(title) {
    setTodos(currentTodos => {
      return [
      ...currentTodos,
      {id:crypto.randomUUID(), title, completed:false},
    ]
  })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
  <h1 className="header">Todo list</h1>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}