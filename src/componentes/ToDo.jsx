import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons'


const ToDo = ({ toDo, markDone, setUpdatedData, deleteTask }) => {
    return (
        <>
        {toDo && toDo
            .sort((a, b) => a.id > b.id ? 1: -1)
            .map((task, index) => {
      
              return (
      
                <React.Fragment key={task.id}>
      
                  <div className="col taskBg">
                    <div className={task.status ? 'done' : ''}>
                      <span className="taskNumber">
                        {index + 1}
                      </span>
                      <span className="taskText">
                        {task.title}
                      </span>
                    </div>
                    <div className="iconsWrap">
                        <span title="completada / não completada"
                        onClick={ (e) => markDone(task.id) }
                        >
      
                          <FontAwesomeIcon icon={faCircleCheck} />
                        
                        </span>
                        
                        {task.status ? null : ( 
                        <span title="editar"
                        onClick={ () => setUpdatedData({
                          id: task.id,
                          title: task.title,
                          status: task.status ? true : false
                         })}>
                          <FontAwesomeIcon icon={faPen}/>
                        </span>
                        )}
      
                       
                        <span title="deletar"
                        onClick={() => deleteTask(task.id)}
                        >
                        <FontAwesomeIcon icon={faTrashCan}/>
                        </span>
                    </div>
      
                  </div>
      
      
                </React.Fragment>
              )
      
            })}
        </>
        
    )
}

export default ToDo;