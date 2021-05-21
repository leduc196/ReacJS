import React, {Component} from 'react';

class AddWork extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props);
    this.state = {
      name : '',
      status : true,
    }
    if(this.props.isUpdate === true)
      this.modTask();
  }

  modTask = () => {
    this.setState({
      name : this.props.taskmod[0].name,
      status : this.props.taskmod[0].status,
    })
  }

  HideDiv = () =>{
    this.props.CloseAppDiv();
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    if(name === 'status')
      value = target.value === 'true' ? true : false;
    
    this.setState({
      [name] : value
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    // console.log(this.state.name);
    // console.log(this.state.status);
    this.props.onSubmitApp(this.state);
    this.HideDiv();
  }

  onClear = () => {
    this.setState({
      name : '',
      status : true
    })
  }

  render(){
    return (
      <div className="modal-dialog Customdialog">
        <div className="modal-content">
          
          <div className="modal-header Customtitle">
            <h5 className="modal-title">{this.props.Tieude} Công Việc</h5>
            <span 
              role="button" 
              onClick = { () => this.HideDiv() }>
              <i className="fas fa-times-circle"></i>
            </span>
          </div>

          <div className="modal-body">
            <form onSubmit = { this.onSubmit }>
              <div className="form-group">
                  <label><b>Tên :</b></label>
                  <input 
                    type="text" 
                    className="form-control"
                    name="name"
                    value = {this.state.name}
                    onChange = {this.onChange}/></div>

                <div className="form-group">
                  <label><b>Trạng thái :</b></label>
                  <select 
                    className = "form-select"
                    name="status"
                    value = {this.state.status}
                    onChange = {this.onChange}>
                    <option value={false}>Ẩn</option>
                    <option value={true}>Kích hoạt</option>
                  </select>
                </div>
                <br/><hr/>
                
                <div className="form-group d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary">
                      <i className="fas fa-save"></i> Lưu lại
                    </button>&nbsp;
                    <button type="button" className="btn btn-danger"
                      onClick = {this.onClear}
                    >
                      <i className="fas fa-window-close"></i> Hủy bỏ
                    </button>
                </div>
            </form>
          </div>

        </div>
      </div>
    );
  }
}

export default AddWork;
