const tasks = [
  {
    id: 1,
    text: "Doctors Appoinment",
    day: "Feb 5th at 2:38pm",
    reminder: true,
  },
  {
    id: 2,
    text: "Bhelpuri khana",
    day: "Feb 14th at 2:00pm",
    reminder: false,
  },
  {
    id: 3,
    text: "coding class",
    day: "Feb 12th at 3:08pm",
    reminder: true,
  },
];

function Tasks() {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
}

export default Tasks;
