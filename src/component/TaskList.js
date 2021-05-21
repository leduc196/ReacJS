import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  // eslint-disable-next-line no-useless-constructor
 
  constructor(props){
    super(props);
    this.state={
      
    }
  }

  ModTask = (TIid) =>{
    this.props.ModTask(TIid)
  }

  changeSttApp = (idTL) =>{
    this.props.changeSttApp(idTL);
  }

  render(){

    

    var {apptasks} = this.props;

    let elmTasks = apptasks.map((task,index) => {
      // let rs = '';
      // let stt ='';
      // let bgd = '';
      // if(task.status === true){
      //   stt = 'Kích hoạt';
      //   bgd = 'badge bg-success';
      // }
      // else{
      //   stt = 'Ẩn';
      //   bgd = 'badge bg-secondary';
      // }
      // rs = '';

      return <TaskItem
        key = {task.id}
        index = {index}
        listTasks = {task}
        ModTask = {this.ModTask}
        changeSttTL = {this.changeSttApp}>
        
      </TaskItem>
    });

    return (
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">STT</th>
            <th scope="col">Tên {this.props.name}</th>
            <th scope="col">Trạng Thái</th>
            <th scope="col">Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>

            <td>&nbsp;</td>
            <td><input 
                    type="text" 
                    className="form-control"/>
            </td>
            <td><select 
                    className = "form-select">
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>
                  </select>
            </td>
            <td>&nbsp;</td>

          </tr>
          {elmTasks}
        </tbody>
    </table>
    );
  }
}

export default TaskList;
