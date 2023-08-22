import './App.css';

import React, { useState } from 'react'

function TodoList() {
    const[activity, SetActivity]=useState("");

    const [listData, setlistData]=useState([]);

    function addActivity(){
        setlistData((listData)=>{
            const updateList=[...listData, activity];
            console.log(updateList);
            SetActivity('');
            return updateList;
        });
        
        

    }

    function removeHandel(key){
        const updateListData=listData.filter((element,id)=>{
            return key!==id;
        })
        setlistData(updateListData);
    }
    function removeAllHandel(key){
        setlistData([]);
        
       
    }

  return (
    <>
        <div className='container'>
            <div className='header'>Todo List</div>
        <input type='text' placeholder='Add Activity' onChange={(e)=>SetActivity
        (e.target.value)} value={activity}></input>

        <button className='' onClick={addActivity}>Add</button>

        <p className='list-heading'>Here is Your List :{')'}</p>

        {listData!==[] && listData.map((data, key)=>{
            return(
                <div key={key}>
                    <div  className='list-data'>{data}</div>
                    <div className='btn-position'>
                        <button onClick={()=>removeHandel(key)}>Remove</button>
                    </div>
                </div>
                
            )
        })}
        
        {listData.length>=1 &&
        <button className='' onClick={removeAllHandel}>Remove All</button>}
        
        </div>
    
    </>
  )
}

export default TodoList