import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    const [editableId, setEditableId] = useState(null)
    const [editedText, setEditedText] = useState("")

    return (
        <div className="mt-4">
            <h2 className="text-white text-lg font-semibold mb-3">Your Tasks</h2>

            <ul className="space-y-3">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className="flex items-center justify-between bg-zinc-800 px-4 py-3 rounded-xl shadow hover:shadow-lg transition-all duration-200"
                    >
                        {/* TEXT / INPUT */}
                        <div className="flex-1 mr-3">
                            {editableId === todo.id ? (
                                <input
                                    className="w-full bg-zinc-700 text-white px-3 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                    autoFocus
                                />
                            ) : (
                                <p className="text-white text-sm break-words">
                                    {todo.text}
                                </p>
                            )}
                        </div>

                        {/* ACTION BUTTONS */}
                        <div className="flex items-center gap-2">

                            {/* EDIT / SAVE */}
                            <button
                                onClick={() => {
                                    if (editableId === todo.id) {
                                        dispatch(
                                            updateTodo({
                                                id: todo.id,
                                                text: editedText,
                                            })
                                        )
                                        setEditableId(null)
                                    } else {
                                        setEditableId(todo.id)
                                        setEditedText(todo.text)
                                    }
                                }}
                                className={`w-9 h-9 flex items-center justify-center rounded-lg transition 
                                ${editableId === todo.id
                                        ? "bg-green-500 hover:bg-green-600"
                                        : "bg-blue-500 hover:bg-blue-600"
                                    }`}
                            >
                                <span className="text-white text-sm">
                                    {editableId === todo.id ? "💾" : "✏️"}
                                </span>
                            </button>

                            {/* DELETE */}
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="w-9 h-9 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-lg transition"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-5 h-5 text-white"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 7h12M9 7v12m6-12v12M10 3h4"
                                    />
                                </svg>
                            </button>

                        </div>
                    </li>
                ))}
            </ul>

            {/* EMPTY STATE */}
            {todos.length === 0 && (
                <p className="text-gray-400 text-center mt-6 text-sm">
                    No todos yet. Add something 🚀
                </p>
            )}
        </div>
    )
}

export default Todos