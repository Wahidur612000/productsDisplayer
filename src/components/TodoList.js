// // import React, { useState } from "react";
// // import "./TodoList.css";

// // const TodoList = () => {
// //     const [todos, setTodos] = useState([]);
// //     const [input, setInput] = useState("");
// //     const [editIndex, setEditIndex] = useState(null);

// //     const buttonHandler = () => {
// //         if (editIndex !== null) {
// //             const updatedTodos = todos.map((todo, index) =>
// //                 index === editIndex ? input.trim() : todo
// //             );
// //             setTodos(updatedTodos);
// //             setEditIndex(null);
// //         } else if (input.trim() !== "") {
// //             setTodos([...todos, input.trim()]);
// //         }
// //         setInput("");
// //     };

// //     const deleteHandler = (index) => {
// //         setTodos(todos.filter((_, i) => i !== index));
// //     };

// //     const editHandler = (index) => {
// //         setInput(todos[index]);
// //         setEditIndex(index);
// //     };

// //     return (
// //         <div className="container">
// //             <div>
// //                 <h2>Todo List</h2>
// //                 <div>
// //                     <input 
// //                         value={input} 
// //                         onChange={(e) => setInput(e.target.value)} 
// //                         placeholder="Add new task" 
// //                     />
// //                     <button onClick={buttonHandler}>
// //                         {editIndex !== null ? "Update" : "Add"} Todo
// //                     </button>
// //                 </div>
// //                 <div>
// //                     {todos.map((todo, index) => (
// //                         <div key={index}>
// //                             <h3>{todo}</h3>
// //                             <button onClick={() => editHandler(index)}>Edit</button>
// //                             <button onClick={() => deleteHandler(index)}>Delete</button>
// //                         </div>    
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default TodoList;

// import React, { useState } from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [task, setTask] = useState("");
//   const [editingIndex, setEditingIndex] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (task.trim() === "") return;

//     if (editingIndex !== null) {
//       const updatedTodos = [...todos];
//       updatedTodos[editingIndex] = task;
//       setTodos(updatedTodos);
//       setEditingIndex(null);
//     } else {
//       setTodos([...todos, task]);
//     }
//     setTask("");
//   };

//   const handleEdit = (index) => {
//     setTask(todos[index]);
//     setEditingIndex(index);
//   };

//   const handleDelete = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="p-4 max-w-md mx-auto">
//       <h2 className="text-xl font-bold mb-4">Todo List</h2>
//       <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
//         <input
//           type="text"
//           value={task}
//           onChange={(e) => setTask(e.target.value)}
//           className="border p-2 flex-1 rounded"
//           placeholder="Enter a task"
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//           {editingIndex !== null ? "Update" : "Add"}
//         </button>
//       </form>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Task</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {todos.map((todo, index) => (
//             <tr key={index} className="border">
//               <td className="border p-2">{todo}</td>
//               <td className="border p-2 flex gap-2">
//                 <button
//                   onClick={() => handleEdit(index)}
//                   className="bg-yellow-500 text-white px-2 py-1 rounded"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDelete(index)}
//                   className="bg-red-500 text-white px-2 py-1 rounded"
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TodoList;

import React, { useEffect } from "react";
import { useState } from "react";
const TodoList = () => {
   const [todos, setTodos]=useState([]);
   const [todo, setTodo]=useState("");
   const [editIndex, setEditIndex] =useState(null);

  // useEffect (()=>{
  //   localStorage.setItem("todos",JSON.stringify(todos))
  // },[todos])

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(editIndex != null) {
      const updatedTodos = todos.map((t,i)=> i === editIndex ? todo : t);
      setTodos(updatedTodos);
      setEditIndex(null);
      setTodo("");
    } else {
      setTodos([...todos, todo]);
      setTodo("");
    }
  } 
  
  const deleteHandler = (index) =>{
    const deletedTodo = todos.filter((_,i)=> i !== index);
    setTodos(deletedTodo);
  } 

  const editHandler = (index) =>{
    const editTodo = todos.filter((_,i)=> i === index);
    setTodo(editTodo);
    setEditIndex(index);
  } 

  return(
    <div>
      <h1>TodoList</h1>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
        <button >Sumbit</button>
      </form>
      <ul>
        {todos.map((value, index) => (
              <li key={index}>
                {value} 
                <button onClick={()=>editHandler(index)}>Edit</button>
                <button onClick={()=>deleteHandler(index)}>Delete</button>
              </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

// import React, { useEffect } from "react";
// import { useState } from "react";
// const TodoList = () => {
//    const [todos, setTodos]=useState(()=> JSON.parse(localStorage.getItem("todos")) || []);
//    const [todo, setTodo]=useState("");

//   useEffect (()=>{
//     localStorage.setItem("todos",JSON.stringify(todos))
//   },[todos])

//   const handleSubmit = (e) =>{
//     e.preventDefault();
//     setTodos([...todos, todo]);
//     setTodo("");
//   } 
  
//   const deleteHandler = (index) =>{
//     const deletedTodo = todos.filter((_,i)=> i !== index);
//     setTodos([deletedTodo]);
//   } 

//   const editHandler = (index) =>{
//     const editTodo = todos.filter((_,i)=> i === index);
//     setTodo(editTodo);
//     deleteHandler(index);
//   } 

//   return(
//     <div>
//       <h1>TodoList</h1>
//       <form onSubmit={(e)=>handleSubmit(e)}>
//         <input type="text" value={todo} onChange={(e)=>setTodo(e.target.value)}></input>
//         <button >Sumbit</button>
//       </form>
//       <ul>
//         {todos.map((value, index) => (
//               <li key={index}>
//                 {value} 
//                 <button onClick={()=>editHandler(index)}>Edit</button>
//                 <button onClick={()=>deleteHandler(index)}>Delete</button>
//               </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoList;