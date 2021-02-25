import{React, useState, useEffect} from 'react'
import axios from 'axios'
function Todos(props){
    const [todos, setTodos] = useState([])
    useEffect(()=>{axios.get(`http://jsonplaceholder.typicode.com/todos/?userId=${props.id}`).then(response=>setTodos(response.data))})
    function toListItem(item){
        return <li>{item.title}</li>
    }
    return <ul style={{textAlign:'left'}}>{todos.map(toListItem)}</ul>
}

export default Todos