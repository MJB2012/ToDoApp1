import { useState } from 'react';
import AdicionarTarefa from './componentes/AdicionarTarefa';
import AtualizarTarefa from './componentes/AtualizarTarefa';
import ToDo from './componentes/ToDo';


import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'


//Tarefas (toDo List) state
function App() {
  const [toDo, setToDo] = useState([]);

  //Temp State 
  const [newTask, setNewTask] = useState('');
  const [updatedData, setUpdatedData] = useState('');

  //Adicionar Tarefas 

  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  }

  //Deletar Tarefas 

  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !== id)
    setToDo(newTasks);
  }

  // Marcar tarefa como completada 

  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  }


  //cancelar update 

  const cancelUpdate = () => {
    setUpdatedData('');
  }

  //Mudar tarefa para update

  const changeTask = (e) => {
    let newEntry = {
      id: updatedData.id,
      title: e.target.value,
      status: updatedData.status ? true : false
    }
    setUpdatedData(newEntry);
  }

  //Atualizar tarefa 

  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updatedData.id);
    let updatedObject = [...filterRecords, updatedData]
    setToDo(updatedObject)
    setUpdatedData('');
  }


  return (
    <div className="container App">
      <br /><br />
      <h2>Lista de tarefas React JS</h2>
      <br /><br />


      {updatedData && updatedData ? (
        <AtualizarTarefa
          updateTask={updateTask}
          changeTask={changeTask}
          updatedData={updatedData}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <AdicionarTarefa
          newtask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}




      {/*Display toDos*/}

      {toDo && toDo.length ? '' : 'Nenhuma tarefa...'}

      <ToDo

        toDo={toDo}
        markDone={markDone}
        setUpdatedData={setUpdatedData}
        deleteTask={deleteTask}

      />

    </div>


  );
}

export default App
