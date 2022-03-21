import React from "react";



export function ToDo(props) {
   const [tasks, setTasks] = React.useState([]);
   const [title, setTitle] = React.useState('');
   const [coutId, setCountId] = React.useState(100);


   function showTask() {

      if (title !== '') {
         setCountId(coutId + 1);
         let newObj = { id: coutId, text: title };
         console.log(newObj);
         setTasks(tasks.concat(newObj));
      }
      setTitle("");
   }

   function deleteTask(key) {
      setTasks(tasks.filter(item => item.id !== key));
   }

   let listItems = tasks.map(task => <li key={task.id}> {task.text} <button onClick={() => deleteTask(task.id)}>X</button>  </li>);
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