import React, { Component } from 'react'

interface State{
  name:string
}
interface Props{

}
export default class Class extends Component<Props,State> {
  constructor(props:Props){
    super(props)
    this.state={
      name:"Minh Thu"
    }
  }
  // nơi khai báo các phương thức
  handleClick=()=>{
    console.log("đã gọi vào hàm click!");
    // đối với class Component khi muốn cập nhật state thì dùng setState
    this.setState({
      name:"Minh Hà"
    })
  }
  render() {
    return (
      <div>
        Class
        <p> xin chào {this.state.name}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}
