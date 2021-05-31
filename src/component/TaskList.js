import React, {Component} from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  // eslint-disable-next-line no-useless-constructor
 
  constructor(props){
    super(props);
    this.state = {
      filterName : '',
      filterStt : -1,
    }
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.props.onFilter(
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStt' ? value : this.state.filterStt,
    );
    this.setState({
      [name] : value
    });
  }

  render(){
    // var {filterName, filterStt} = this.state;
    var {apptasks} = this.props;

    let elmTasks = apptasks.map((task,index) => {
      return <TaskItem
        key = {task.id}
        index = {index}
        listTasks = {task}
        ModTask = {this.props.ModTask}
        changeSttTL = {this.props.changeStt}
        DelTask = {this.props.DelTask}>
        
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
                    className="form-control"
                    name = "filterName"
                    value={this.state.filterName}
                    onChange = {this.onHandleChange}/>
            </td>
            <td>
              {/* <select 
                  className = "form-select"
                  name = "filterSTT"
                  value={filterStt}
                  onChange = {this.onChange}>

                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>

                </select> */}

<form>
                
<select 
                    className = "form-select"
                    name="filterStt"
                    value = {this.state.filterStt}
                    onChange = {this.onHandleChange}>
                    <option value={-1}>Tất cả</option>
                    <option value={0}>Ẩn</option>
                    <option value={1}>Kích hoạt</option>
                  </select></form>
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
