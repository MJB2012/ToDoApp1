const AtualizarTarefa = ({ updateTask, changeTask, updatedData ,cancelUpdate }) => {
    return (
        <>
      {/*Atualizar Tarefa*/}
      <div className="row">
        <div className="col">
          <input 
          value={ updatedData && updatedData.title}
          onChange={ (e) => changeTask(e)}
          className="form-control form-control-lg"
          />
        </div>

        <div className="col-auto">
        
        <button 
        onClick={updateTask}
        className="btn btn-lg btn-success mr-20" >
          Atualizar
        </button>
        <button 
        onClick={cancelUpdate}
        className="btn btn-lg btn-warning">
          Cancelar
        </button>
        </div>

      </div>
        
        <br />
      </>
    )
}

export default AtualizarTarefa;