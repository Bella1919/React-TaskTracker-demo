// import React from 'react'
//back-end import useEffect
// import { useEffect} from 'react'
import {useState} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/header'
import About from'./components/About'
import Tasks from'./components/Tasks'
import AddTask from'./components/AddTask'
import Footer from './components/Footer' 
 
// menthod 1 use function
function App() {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks,setTasks]=useState([
    {
      id:1,
      text:'Doctors Appointment',
      day:'Feb 5th at 2:30pm',
      reminder:true,
    },
    {
      id:2,
      text:'Meeting at School',
      day:'Feb 6th at 1:30pm',
      reminder:true,
    },
    {
      id:3,
      text:'Food Shopping',
      day:'Feb 5th at 2:30pm',
      reminder:false,
    }
  ])
  //Back-end get data
  // useEffect (()=>{
  //   const getTasks = async()=>{
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }

  //   getTasks()
  // }, [])

  //Fetch Tasks(back-end)
  // const fetchTasks = async()=>{
  //   const res = await fetch('http://localhost:6000/tasks')
  //   const data = await res.json()

  //   return data
  // }

  //Fetch Tasks(back-end)
  // const fetchTasks = async()=>{
  //   const res = await fetch('http://localhost:6000/tasks')
  //   const data = await res.json()

  //   return data
  // }

//Add Task(back-end)
// const addTask = async(task)=>{
//   const res = await fetch('http://localhost:6000/tasks',{
//     method:'POST',
//     headers:{
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify(task)
//   })
//   const data = await res.json()

//   setTasks([...tasks,data])
// }
//Add Task
const addTask =(task)=>{
  const id =Math.floor(Math.random()*10000)+1
  const newTask ={ id,...task }
  setTasks([...tasks,newTask])
}

//Delete Task/(back-end)
// const deleteTask = async(id)=>{
//   await fetch(`http://localhost:6000/tasks/${id}`,{
//     method:'DELETE'
//   })
//   setTasks(tasks.filter((task)=>task.id1==id))
// }


//Delete Task
const deleteTask =(id)=>{       
   setTasks(tasks.filter((task)=>task.id!=id))
}
//Toggle Reminder(back-end)
// const toggleReminder =async(id)=>{
//   const taskToToggle = await fetchTask(id)
//   const updTask ={...taskToToggle,reminder:!taskToToggle.reminder} 

//   const res = await fetch(`http://localhost:6000/tasks/${id}`,{
//     method:'PUT',
//     headers:{
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify(updTask)
//   })

//   const data = await res.json()

//   setTasks(tasks.map((task)=>
//     task.id===id?{...task,reminder:!data.reminder}:task
//     )
//   )
// }
//Toggle Reminder
const toggleReminder =(id)=>(
  setTasks(tasks.map((task)=>task.id===id?{...task,reminder:!task.reminder}:task
    )
  )
)

  return (
    <Router>
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask}
      />
      
       <Route path='/' exact render={(props)=>(
         <>
            {showAddTask && <AddTask onAdd={addTask}/>} 
            {tasks.length>0?
            <Tasks tasks={tasks} 
            onDelete={deleteTask} 
            onToggle={toggleReminder}
            />:(
                'No Task To Show'
                )}
         </>
       )}/>
       <Route path='/about' component={About} />
       <Footer />
    </div>
    </Router>
  )
}

// menthod 2 use class
// class App extends React.Component{
//   render(){
//     return(
//       <Header />
//     )
//   }
// }

export default App;
