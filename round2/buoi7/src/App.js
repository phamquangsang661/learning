
import './App.css';
import { useEffect, useState, useMemo, useCallback } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")
  const [findText, setFindText] = useState("")
  const [dataFilter, setDataFilter] = useState([])

  const onChangeNewTodo = (e) => {
    setNewTodo(e.target.value)
  }
  const onChangeFindText = (e) => {
    setFindText(e.target.value)
  }
  const onClickAddNewTodo = () => {
    const temp = [...todos]
    temp.push(newTodo)
    setTodos(temp)
    setNewTodo("")

  }
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(new Date().toISOString())
    }, 2000)
    return () => {
      console.log("Hủy side effect cù")
      clearInterval(timer)
    }
  }, [
    todos
  ])
  useEffect(() => {
    setDataFilter(todos.filter(f => f.includes(findText)))
  }, [findText, todos])

  const dataFilterMemo = useMemo(() => {
    return todos.filter(f => f.includes(findText))
  }, [findText, todos])

  const abc = useCallback(
    () => {
      console.log(todos)
    },
    [findText],
  );
  return (
    <div className="flex justify-center items-center w-full flex-col">
      <div className="flex flex-col gap-2">
        <input value={newTodo} className="border border-black p-1" onChange={onChangeNewTodo} />
        {newTodo}
        <button onClick={onClickAddNewTodo} className="bg-black text-white rounded-[5px] py-1">Add todo</button>
      </div>
      <div className='flex flex-col gap-2 border border-gray-500 p-3
      w-full h-[300px] overflow-auto max-w-[300px] mt-5 '>{dataFilterMemo.map(todo => (
        <div className="hover:bg-blue-300 cursor-pointer"> {todo}</div>
      ))}</div>
      <div className="pt-4">
        Tìm kiếm
        <input onChange={onChangeFindText} className="border border-black p-1"></input>
      </div>
    </div>
  );
}

export default App;
