import React, {Component} from 'react';

class TaskItem extends Component {

  // eslint-disable-next-line no-useless-constructor
 
  // eslint-disable-next-line no-useless-constructor
    constructor(props){
        super(props);
    }

    ModTask = (id) =>{
        this.props.ModTask(id);
    }

    DelTask = (id) =>{
        console.log(id);
    }

    changeStt = () =>{
        this.props.changeSttTL(this.props.listTasks.id);
    }

  render(){

    var {listTasks, index} = this.props;

    return (
        <tr>

        <td>{index + 1}</td>
        <td>{listTasks.name}</td>
        <td>
            <span 
                className={listTasks.status === true ? "badge bg-success" : "badge bg-secondary"}
                onClick = {this.changeStt}>
            {listTasks.status === true ? "Kích hoạt" : "Ẩn"}
            </span>
        </td>
        <td>
            <button className="btn btn-warning"
                onClick = { () => this.ModTask(listTasks.id) }>
                <i className="fas fa-pen"
                ></i> Sửa
            </button>&nbsp;
            <button className="btn btn-danger"
                onClick = { () => this.DelTask(listTasks.id) }>
                <i className="fas fa-trash-alt"></i> Xóa
            </button>
        </td>

        </tr>
    );
  }
}

export default TaskItem;
