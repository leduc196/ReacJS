import React, {Component} from 'react';
import  './App.css';
import TaskForm from './component/TaskForm';
import Search from './component/Search';
import Sort from './component/Sort';
import TaskList from './component/TaskList';
import _ from 'lodash';
import demo from './training/demo'

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      tasks : [],
      div : true,
      head : 'Thêm',
      taskmod : null,
      filter : {
        name : '',
        stt: -1
      },
      sort : {
        by : 'name',
        value : 1
      }
    }
  }

  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      let getTasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks : getTasks
      })
    }
  }

  SetAppDiv = () =>{
    this.setState({
      div : true
    })
  }

  ShowDiv = () =>{
    // if(this.state.)
    this.setState({
      div : false,
      head : 'Thêm',
      taskmod : null
    })
  }

  onGenData = () =>{
    let tasks = [
      {
        id : this.genID(),
        name : 'Học lập trình .Net core',
        status : true,
      },
      {
        id : this.genID(),
        name : 'Học lập trình ReactJS',
        status : true,
      },
      {
        id : this.genID(),
        name : 'Chơi game',
        status : false,
      },
    ];
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  s4(){
    return Math.floor((1+Math.random())*0x10000).toString(16).substring(1);
  }

  genID(){
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()  + '-' 
    + this.s4() + this.s4() + this.s4() + this.s4();
  }

  ModTask = (id) => {
    var {tasks} = this.state;
    var task = tasks.filter(task => task.id===id);
    var taskmod = task[0];
    this.setState({
      taskmod : taskmod,
      div : false,
      head : 'Sửa'
    });
    // localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  onReceiveDataFromTaskForm = (data) => {
    var {tasks} = this.state;
    if(data.id === ''){
      data.id = this.genID();
      tasks.push(data);
    }
    else{
      // var index = this.findIndex(data.id);
      var index = _.findIndex(tasks,(task)=>{
        return task.id === data.id
      })
      tasks[index] = data;
    }
    this.setState({
      tasks : tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  changeStt = (id) => {
    var {tasks} = this.state;
    var task = tasks.filter(task => task.id===id);
    task[0].status = !task[0].status;
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  findIndex = (id) => {
    var rs =-1;
    var {tasks} = this.state;
    tasks.forEach((task,index) => {
      if(task.id === id)
        rs = index;  
    });
    return rs;
  }

  DelTask = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1){
      tasks.splice(index,1);
      this.setState({
        tasks : tasks,
        div : true
      });
      localStorage.setItem('tasks',JSON.stringify(tasks));
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  onFilter = (filterName, filterStt) => {
    this.setState({
      filter : {
        name : filterName.toLowerCase(),
        stt : parseInt(filterStt)
      }
    });
  }

  SearchValue = (data) => {
    this.setState({
      filter : {
        name : data.toLowerCase(),
        stt: this.state.filter.stt
      }
    });
  }

  CheckSort = (sortName, sortVal) => {
    this.setState({
      sort : {
        name : sortName,
        value: parseInt(sortVal)
      }
    });
  }

  render(){

    var { tasks ,div, taskmod, filter, sort } = this.state // cách viết của cs6 tương đương var tasks = this.state.tasks
    var displayForm = div ? '' : <TaskForm CloseAppDiv = {this.SetAppDiv}
                                    Tieude = {this.state.head}
                                    onSubmitApp = { this.onReceiveDataFromTaskForm }
                                    isUpdate = {this.state.isUpdate}
                                    taskmod = {taskmod}/>
    if(filter){
      if(filter.name){
        tasks = tasks.filter((task) => {
          return task.name.toLowerCase().indexOf(filter.name) !== -1;
        });
      }
      tasks = tasks.filter((task) => {
        if( filter.stt === -1) 
          return task;
        else
          return task.status === (filter.stt === 1 ? true : false);
    });
    }

    if(sort.name === 'name'){
      tasks.sort((a, b) =>{
        if(a.name < b.name) return sort.value;
        else if(a.name > b.name) return -sort.value;
        else return 0;
      })
    }else{
      tasks.sort((a, b) =>{
        if(a.status > b.status) return -sort.value;
        else if(a.status < b.status) return sort.value;
        else return 0;
      })
    }

    return (
      <div className="container">
        
        <div className="row justify-content-center">
            <div className = "col-xs-4 col-xs-4 col-md-4 col-lg-4">
              <h1 className="pl-5">QUẢN LÝ CÔNG VIỆC</h1>
            </div>
        </div>
        <hr/>
        <div className="row">
          <div 
            className="col-xs-4 col-xs-4 col-md-4 col-lg-4">
            {displayForm}
          </div>

          <div 

            className={div === true ? "col-xs-12 col-xs-12 col-md-12 col-lg-12" : "col-xs-8 col-xs-8 col-md-8 col-lg-8"}
          >
            <div className="row">
              <div className="col-xs-12 col-xs-12 col-md-12 col-lg-12">
                  <div className="btn btn-primary"
                    onClick = { () => this.ShowDiv()}
                    >
                      <i className="fas fa-plus"></i>  Thêm công việc
                  </div>&nbsp;
                  <div className="btn btn-warning"
                    onClick = {this.onGenData}
                    >
                      <i className="fas fa-plus"></i>  Tạo data mẫu
                  </div>&nbsp;
              </div><br/>
              <br/><Search
                    SearchValue={this.SearchValue}/>
              <Sort
                CheckSort={this.CheckSort}
                sort = {sort}/>
            </div>
            <TaskList 
              apptasks = {tasks}
              ModTask = {this.ModTask} 
              changeStt={this.changeStt}
              DelTask = {this.DelTask}
              onFilter={this.onFilter}/>
          </div>
              
        </div>


      </div>
    );
  }
}

export default App;
