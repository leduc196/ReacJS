import React, {Component} from 'react';
import  './App.css';
import TaskForm from './component/TaskForm';
import Search from './component/Search';
import Sort from './component/Sort';
import TaskList from './component/TaskList';

class App extends Component {

  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
    this.state = {
      tasks : [],
      div : true,
      head : 'Thêm',
      taskmod : [],
      isUpdate: false,
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
    this.setState({
      div : !this.state.div,
      head : 'Thêm',
      isUpdate : false,
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

  ModTask = (id) =>{
    var {tasks} = this.state;
    var {taskmod} = this.state;
    var task = tasks.filter(task => task.id === id);
    taskmod = task;
    this.setState({
      div : false,
      head : 'Sửa',
      taskmod : taskmod,
      isUpdate : true,
    });
  }

  onReceiveDataFromTaskForm = (data) => {
    // console.log(data);
    data.id = this.genID();
    var {tasks} = this.state;
    tasks.push(data);
    this.setState({
      tasks : tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
    // console.log(data)
  }

  changeStt = (id) => {
    var {tasks} = this.state;
    // var index = this.findIndex(id);
    // if(index !== -1){
    //   tasks[index].status = !tasks[index].status;
    //   this.setState({
    //     tasks : tasks
    //   });
    //   localStorage.setItem('tasks',JSON.stringify(tasks));
    // }
    var task = tasks.filter(task => task.id===id);
    task[0].status = !task[0].status;
    this.setState({
      tasks : tasks
    });
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }

  // findIndex = (id) => {
  //   var {tasks} = this.state;
  //   tasks.forEach((task,index) => {
  //     if(task.id === id)
  //       return index;  
  //   });
  // }

  render(){

    var { tasks,div } = this.state // cách viết của cs6 tương đương var tasks = this.state.tasks
    var displayForm = div ? '' : <TaskForm CloseAppDiv = {this.SetAppDiv}
                                    Tieude = {this.state.head}
                                    onSubmitApp = { this.onReceiveDataFromTaskForm }
                                    taskmod = { this.state.taskmod }
                                    isUpdate = {this.state.isUpdate}/>
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
              <br/><Search/>
              <Sort/>
            </div>
            <TaskList 
              apptasks = {tasks}
              ModTask = {this.ModTask} 
              changeSttApp={this.changeStt}/>
          </div>
              
        </div>


      </div>
    );
  }
}

export default App;
