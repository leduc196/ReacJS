import React, {Component} from 'react';

class App extends Component {
  render(){
    return (
            <div className="col-xs-6 col-xs-6 col-md-6 col-lg-6">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nhập từ khóa..." />
                    <button className="btn btn-primary">
                        <i className="fas fa-search"></i> Tìm
                    </button>
                </div>
            </div>
    );
  }
}

export default App;
