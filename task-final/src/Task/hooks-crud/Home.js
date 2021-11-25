import React,{useState,useEffect} from 'react'
import './Home.css'
import PostModal from './PostModal'
function Home() {
    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [data,setData] = useState([])
    const [addtopic, setAddTopic] = useState(false);
    const [id,setId] = useState("")


    useEffect(()=>{
       fetchData();
    },[data])

    
    const fetchData = async() => {
         await fetch("http://localhost:5000/postesss")
        .then(res => res.json())
        .then(res => setData(res))
        }

    const Delete = (id) => {
        try {
            let response =  fetch(`http://localhost:5000/postesss/${id}`, {
                method: "DELETE",
            });
        } catch (err) {
        }
        
    }
    
    const Update = (Id) => {
        setId(Id)
        console.log(Id)
        setAddTopic(!addtopic)
    }

    const Add = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ tital:title,description:desc })
        };
        fetch('http://localhost:5000/postesss/', requestOptions)
            .then(response => response.json())
            
    }
    console.log(data)

    return (
        <div className="container">
            <div className="container-add">
               <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" />
                <input value={desc} onChange={(e)=> setDesc(e.target.value)} type="text" />
                <button onClick={Add} className="add-btn">Add</button>
            </div>
        <div className="home">
          {data.map((ele)=>(
             <div className="post" key={ele.id}>
                 <span className="post-title">{ele.tital}</span>
                 <p className="post-title">{ele.description}</p>
                 <div className="post-action">
                     <button onClick={()=>Delete(ele._id)}>Delete</button>
                     <button onClick={()=>Update(ele._id)}>Update</button>
                 </div>
             </div>
         ))}
        </div>
        {addtopic?(<PostModal id={id} addopen={addtopic} Addtoggle={Update} />):("")}
        </div>
    )
}

export default Home
