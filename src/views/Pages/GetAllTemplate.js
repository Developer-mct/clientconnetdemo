
import './MailChampEdit.css';
//import imgLogo from './image/dummylogo.jpg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SubCtrl from "../Subscription/subCtrl/subscriptionCtrl";
import swal from "sweetalert";
import { PinDropSharp } from '@material-ui/icons';
import config from '../../config/Config';

function GetAllTemplate(props) {
    
    // const [data,setData] = useState([]);
    // var userId = localStorage.getItem("userId");
    // useEffect(()=>{
    //     SubCtrl.getAllTem(userId,(result) => {
    //         console.log("result", result)
    //         // if (result.data.status === true) {
    //         //     swal({
    //         //         title: "Congratulations!",
    //         //         text: "You are successfully updated Mailchimp template",
    //         //         icon: "success",
    //         //     });
    //         // }
    //     })
    // },[])

    const [data,setData] = useState([]);
    const [click,setClick] = useState(false);
    var userId = localStorage.getItem("userId");

     const fetchData = ()=>{
      axios.get(config.baseUrl+`/mailchimp/getAllTemplatenew/${userId}`)
      .then(res2=>{
          console.log("hello",res2.data);
          console.log("hello1",res2.data.dataa);
          setData(res2.data.dataa);
      })
     }
     
     fetchData();
      useEffect(()=>{
         fetchData()
      },[])

    const handleClick = (id)=>{
       //props.history.push('/home/user/updateTemplate/'+id)
      // var userId = localStorage.getItem("userId");
      //setClick(true)
       console.log("userrrrrrrrrrrrrrid",userId)
      props.history.push(`/home/user/updateTemplate/${id}/${userId}`)
    }
    
   const btnClick = ()=>{
       console.log("btn clicked",props)
       props.history.push('/home/user/mailchampEdit')
    }

    return(
      <div>
           <div style={{marginTop:'10px',display:'flex',justifyContent:'center'}}>
            
             <button className="fa fa-plus" style={{marginLeft:'20px',width:'150px',border:'none',height:'40px',borderRadius:'10px',backgroundColor:'#c2c0ba'}} onClick={btnClick}>Add new Template</button>
           </div>
       
           <div style={{marginBottom:'10px'}}>
            { data.map(i=>{
               return(
                     <div className="templateList" key={i.cid} onClick={()=>handleClick(i.cid)}>
                        <div>
                        <img src = {i.thumbnail} width="40px" height="60px"/>
                        </div>
                     
                        <div style={{marginLeft:'10px'}}>
                           <h2>{i.name}</h2>
                           <p style={{fontSize:'10px',fontWeight:'bold'}}>created on {i.date_created} by {i.created_by}</p>
                           <input type="hidden" name="userId" value={userId}/>
                        </div>
                     </div>
               )
            })}
           </div>
      </div>
    )
 }




export default GetAllTemplate;

