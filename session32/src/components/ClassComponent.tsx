import React, { Component } from 'react'
interface Props{}
interface State{
    count:number,
  
}
let interval:any;
export default class ClassComponent extends Component<Props,State> {
  
    constructor(props:Props){
        super(props)
        // khởi tạo state
        this.state={
            count:0,
          
        }
    }
    // componentDidMount(): void {
    //    interval= setInterval(()=>{
    //         console.log("hàm setinterval được gọi!");
            
    //     },2000)
    // }
    // handleClick=()=>{
    //     clearInterval(interval);
    // }
  render() {
    return (
      <div>
        ClassComponent
        {/* <button onClick={this.handleClick}>dừng interval</button> */}
      </div>
    )
  }
}
