import React, {Component} from 'react';


class Sort extends Component {

  constructor(props){
    super(props);
    this.props.CheckSort('name',1);
  }

  onClick = (sortBy, sortVal) => {
    
    this.props.CheckSort(sortBy,sortVal);
  }

  

  render(){
    return (

<div className="dropdown col-xs-6 col-xs-6 col-md-6 col-lg-6">
  <button className="btn btn-primary" data-bs-target="#test"  data-bs-toggle="collapse">
    Sắp xếp <i className="fas fa-plus-square"></i>
  </button>
  <ul className="dropdown-menu" id="test">
    <li  onClick = {()=>this.onClick('name',1)}><span role="button" 
    className={(this.props.sort.name === 'name' && this.props.sort.value === 1) ? "sort-selected" : ""}> &nbsp; Tên A-Z <i className="fas fa-sort-alpha-down"></i>&emsp;</span></li>
    <li  onClick = {()=>this.onClick('name',-1)}><span role="button" 
    className={(this.props.sort.name === 'name' && this.props.sort.value === -1) ? "sort-selected" : ""}> &nbsp; Tên Z-A <i className="fas fa-sort-alpha-down"></i>&emsp;</span></li>
      <li><span> <hr/></span></li>
    <li  onClick = {()=>this.onClick('stt',1)}><span role="button" 
    className={(this.props.sort.name === 'stt' && this.props.sort.value === 1) ? "sort-selected" : ""}> &nbsp; Trạng thái "Kích hoạt" &nbsp;</span></li>
    <li  onClick = {()=>this.onClick('stt',-1)}><span role="button" 
    className={(this.props.sort.name === 'stt' && this.props.sort.value === -1) ? "sort-selected" : ""}> &nbsp; Trạng thái "Ẩn" &nbsp;</span></li>
  </ul>


</div>
        // </div>
    );
  }
}

export default Sort;
