import * as React from 'react';
import { useState } from 'react';
import {Button, TextField} from "@mui/material"
import NewDropdown from './Newdropdown'
import Main from './Main'
// import SendIcon from "@mui/icons-material/Send"

// import DeleteIcon from "@mui/icons-material/DeleteIcon"


const Dropdown = () => {

  const checkList = ["Rohit", "Rohan", "Animesh", "Amit", "Anuj", "tarun", "Prakhar", "Aman", "Sagar", "rajeev"];
  
  // const renderList = checkList.map((item, index) => 
  //                              <div key={index}>{item}</div>
  //                            );

 return (
  <div >

   <div>

    <div style={{paddingTop:40,paddingBottom:40, marginLeft:50}}>
    <button className='btn btn-sm btn-danger'>Reset</button>
    

    
    </div>

     <select style ={{marginLeft:90}}>

      {/* {renderList} */}

       <option value="Employess">Employess</option>

       <option value="Rohit">Rohit</option>

       <option value="Rohan">Rohan</option>

       <option value="Animesh">Animesh</option>

       <option value="Amit">Amit</option>

       <option value="Anuj">Anuj</option>

       <option value="Prakhar">Prakhar</option>

       <option value="Sagar">Sagar</option>

       <option value="Abhinav">Abhinav</option>

       

     </select>


     <select style ={{marginLeft:90}}>
       <option value="Year">Year </option>
       <option value="2021-2022">2021-2022 </option> 
       <option value="2021-2022">2021-2022 </option>
     </select>
     
     <select style ={{marginLeft:90}}>
       <option value="Year">Year </option>
       <option value="2021-2022">2021-2022 </option> 
       <option value="2021-2022">2021-2022 </option>
     </select>

     <div style={{paddingTop:40, marginLeft:'50'}}>
     <button className='btn btn-sm btn-success'>Initiate</button>
     </div>
     </div>

     <div style={{paddingTop:70, marginLeft:'50',justifyContent:"space-between",}}>
      <Button onClick={NewDropdown} variant="contained" color="success" >Reset</Button>
      <Button variant="outlined">Reset</Button>
      <Button variant="text" href="Dropdown">Reset</Button>
      {/* <Stack direction="row"spacing={2}> */}
        {/* <Button variant="contained"startIcon={<SendIcon/>}>send</Button>
        <Button variant="text" endIcon={<DeleteIcon/>}>delete</Button> */}
      {/* </Stack> */}

     </div>
     <br/>
     <Button onClick={()=>{
      Navigate()
     }}variant="contained" color="error">delete</Button>
     <div style={{display:"flex",flexDirection:"column",width:"30%"}}>
     {/* <input style={{marginLeft:"50"}}type="text" placeholder='enter name' variant="standard"/> */}
     {/* <TextField type="text" placeholder="enter name" variant="standard"></TextField> */}
     {/* <input type="text" placeholder='enter name'/>
     <input type="text" placeholder='enter name'/> */}
      <TextField sx={{margin:"30px"}}type="text" placeholder="enter name" variant="standard"></TextField>
      <TextField sx={{margin:"30px"}}type="text" placeholder="enter name" variant="outlined"></TextField>
      <TextField sx={{backgroundColor:"red",margin:"30px"}} type="text" placeholder="enter name" variant="filled"></TextField>


     </div>
   </div>

   

 );

};

export default Dropdown;