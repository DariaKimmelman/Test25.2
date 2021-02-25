import{React, useState, useEffect} from 'react'
import axios from 'axios'
import Todos from './Todos.jsx'
function Users(){
    function toListItem(item){
        return <li onClick = {()=>setId(item.id)

        } style={{color:'blue', textDecoration:'underline'}}>{item.name}</li>;
    }
    const [users, setUsers] = useState([]);
    const [id, setId] = useState();
    useEffect(()=>{axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>setUsers(response.data))})

    return <div> <ul style={{textAlign:'left'}}>{users.map(toListItem)}</ul>
    <Todos style={{textAlign:'left'}} id = {id} key={id}></Todos>

    </div>;

}
export default Users