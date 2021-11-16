import React,{useState} from 'react'
import { Input } from '@mui/material';
import { TableCell,TableBody,TableHead,TableRow, Table } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './App.css';

function App() {
  const [input,setInput] = useState()
  const [todos,setTodos]  = useState([])
  const [put,setPut] = useState(false)
  const [update,setUpdate] = useState("")


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
     let newEditItem = todos.find((elem) => {
       return elem.id === id
     })
     console.log(newEditItem)
   }

  console.log(todos)
 return (
    <div className="App">
      <div className="todo-body">
        <div className="input">
        <Input onChange={(e)=>setInput(e.target.value)} />
        <button onClick={Add}>Add</button>
        </div>
      <Table className="table">
        <TableHead className="tableHead">
          <TableCell>Todos</TableCell>
          <TableCell>Action</TableCell>
          {/* <TableCell>Input</TableCell> */}
        </TableHead>
        <TableBody className="tableBody">
         
      {todos.map((val,index) => {
							return (
                <TableRow >
              <TableCell key={index}>{val.input} </TableCell>
              <TableCell>
                <DeleteIcon onClick={()=>Delete(val.id)} />
              {/* <EditIcon onClick={()=>Edit(val.id)} /> */}
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

export default App;
