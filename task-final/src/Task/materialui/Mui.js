import React,{useState} from 'react'
import { Input } from '@mui/material';
import { TableCell,TableBody,TableHead,TableRow, Table } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function Mui() {
  const [input,setInput] = useState()
  const [todos,setTodos]  = useState([])
  const [put,setPut] = useState(false)
  const [update,setUpdate] = useState("")
  const [ids,setIds] = useState("")


  const Add = async() => {
    setTodos((prev)=>{
      const newItem = {
        id:Date.now(),input
      }
      return [newItem,...prev]
      })
   }

   const Delete = (id) =>{
    const removedArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removedArr);
   }
  
   const Edit = (id) => {
    //  console.log(id)
     setIds(id)
     
   }

   const EditTodo = () => {
    let newEditItem = todos.find((elem) => {
      return elem.id === ids
    })
    setTodos(
      todos.map((elem)=>{
        if(elem.id === ids){
          return{...elem,input:input}
        }
        return elem;
      })
    )
    console.log(newEditItem)
   }

  console.log(todos)
 return (
    <div className="App">
      <div className="todo-body">
        <div className="input">
        <Input onChange={(e)=>setInput(e.target.value)} />
        <button onClick={Add}>Add</button>
        <button onClick={EditTodo}>Edit</button>
          </div>
      <Table className="table">
        <TableHead className="tableHead">
          <TableCell>Todos</TableCell>
          <TableCell>Action</TableCell>
          {/* <TableCell>Input</TableCell> */}
        </TableHead>
        <TableBody className="tableBody">
         
      {todos.map((val) => {
							return (
                <TableRow >
              <TableCell key={val.id}>{val.input} </TableCell>
              <TableCell>
                <DeleteIcon onClick={()=>Delete(val.id)} />
              <EditIcon onClick={()=>Edit(val.id)} />
              </TableCell>
              </TableRow>
              )
						})
					}
          </TableBody>
      </Table>
      </div>
      </div>
  );
}

export default Mui;
