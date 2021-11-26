import {useState} from 'react'

function Tasks() {
  const [tasks, setTasks] = useState(
    [{
      id: 1,
      text: "Doctors Appoinment",
      day: "Feb 5th at 2:38pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Master Appoinment",
      day: "Feb 5th at 3:38pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Teacher Appoinment",
      day: "Feb 5th at 4:38pm",
      reminder: false,
    }]
    
  )
  return (
    
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
