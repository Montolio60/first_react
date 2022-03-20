import React from "react";



export function ToDo(props) {
   let [tasks, setTasks] = React.useState([]);
   const [title, setTitle] = React.useState('')

   function showTask() {
      if (title !== '') {
         // let newObj = { id: "1", text: title };
         setTasks(tasks.concat(title));
      }
     
      setTitle("");
   }

   function deleteTask(key) {
      function num(value) {
         return value !== key;
      }
      setTasks(tasks.filter(num));
   }

   let listItems = tasks.map(task => <li key={task.toString()}> {task} <button onClick={() => deleteTask(task.toString())}>X</button>  </li>);
   return (
      <div>
         <input type="text" value={title} onChange={event => setTitle(event.target.value)} />
         <button onClick={showTask}>Add Task</button>
         <div>
            <ul>{listItems}</ul>
         </div>
      </div>
   )
}