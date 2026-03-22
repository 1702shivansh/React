import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-zinc-900 p-6 rounded-xl shadow-lg w-full max-w-md">
        
        <h1 className="text-white text-2xl font-bold mb-4 text-center">
          Learn Redux Toolkit
        </h1>

        <AddTodo />
        <Todos />

      </div>
    </div>
  )
}

export default App