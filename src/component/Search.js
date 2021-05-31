import React, {Component} from 'react';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      search : '',
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value
    this.setState({
      [name] : value
    })
  }

  onClick = () =>{
    this.props.SearchValue(this.state.search);
  }

  

  render(){
    var {search} = this.state
    return (
            <div className="col-xs-6 col-xs-6 col-md-6 col-lg-6">
                <div className="input-group mb-3">
                    <input type="text" 
                      className="form-control" 
                      placeholder="Nhập từ khóa..." 
                      name="search"
                      value = {search}
                      onChange = {this.onChange}/>
                    <button 
                       className="btn btn-primary"
                       onClick={() => this.onClick()}>
                        <i className="fas fa-search"></i> Tìm
                    </button>
                </div>
            </div>
    );
  }
}

export default App;
