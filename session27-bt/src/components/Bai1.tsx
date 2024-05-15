 
export default function Bai1() {
    let listCoures:string[] =["HTML","CSS","JavaScript","ReactJS"];
    let color:string="green";
  return (
    <div>
        <h1 style={{color:color,backgroundColor}}>Bài 1</h1>
        <h3>Danh sách khóa học</h3>
        <ol>
            {listCoures.map((item,index,array)=>{
                return <li  key={index}>{item}</li>
            })}
        </ol>
    </div>
  )
}
