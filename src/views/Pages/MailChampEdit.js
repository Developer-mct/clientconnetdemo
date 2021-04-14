import './MailChampEdit.css';
//import imgLogo from './image/dummylogo.jpg';
import React, { useState, useEffect, useHistory } from 'react';
import axios from 'axios';
import SubCtrl from "../Subscription/subCtrl/subscriptionCtrl";
import swal from "sweetalert";

function MailChampEdit(props) {
 

  //const [logo,setLogo] = useState('');
  const [logo, setLogo] = useState({ preview: "", raw: "" });

  const [content, setContent] = useState("Hi *|FNAME|*, need legal assistance?");
  const [content1, setContent1] = useState("I found your name listed on the *|COUNTY|* Sheriffs database, where it was listed that you were recently arrested for a *|CHARGE|* charge. If you are already represented by an attorney or have resolved this matter, please disregard this email.")
  const [content2, setContent2] = useState("If not, don’t worry – ________Attorney at Law is here to help. You need a seasoned law firm that is going to care about you and the fight you are in. Weve represented people in your position, and worse, for __ years.");
  const [content3, setContent3] = useState("Schedule a consultation to discuss how we can tackle your defense and get you the best case result.");
  const [content4, setContent4] = useState("Our lawyers will listen to your side of the story, take time to understand your goals, and use their experience to help you navigate the often treacherous waters of our criminal justice system. We know what it takes to build and present a solid and compelling case, and thats exactly what we do. Vigorously and earnestly, we tackle the most complex challenges and pursue your goals with creativity and determination.");
  const [content5, setContent5] = useState("We offer no-cost consultations over the phone, Zoom, or in our conveniently located offices. Let our firm help you get this matter dismissed or downgraded. Contact us today at (xxx) xxx-xxxx to discuss your case with one of our attorneys.");

  const [content6, setContent6] = useState("Sincerely");
  const [content7, setContent7] = useState("ATTORNEY NAME");
  const [content8, setContent8] = useState("LAW FIRM");
  const [content9, setContent9] = useState("ADDRESS");
  const [content10, setContent10] = useState("Copyright © 2021 LAW FIRM, All rights reserved.");
  const [content11, setContent11] = useState("LAW FIRM ADDRESS");

  var userId = localStorage.getItem("userId");

  const handleChange = e => {
    if (e.target.files.length) {
      setLogo({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  };

  const handleSubmit = async () => {
    
    const datanew = new FormData();

    // datanew.append("file",logo) ;
    datanew.append("file", logo.raw);
    datanew.append("content", content);
    datanew.append("content1", content1);
    datanew.append("content2", content2);
    datanew.append("content3", content3);
    datanew.append("content4", content4);
    datanew.append("content5", content5);

    datanew.append("content6", content6);
    datanew.append("content7", content7);
    datanew.append("content8", content8);
    datanew.append("content9", content9);
    datanew.append("content10", content10);
    datanew.append("content11", content11);

    datanew.append("userId", userId);


    SubCtrl.createTem(datanew, (result) => {
      console.log("result", result)
          if (result.data.status === true) {
                swal({
                  title: "Congratulations!",
                  text: "Template created successfully ",
                  icon: "success",
                });
               
          }
          props.history.push('/home/user/getAllTemplate')    
    })
    
}


return (
  <div className="MailChampEdit">
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1 style={{ textAlign: 'center', padding: '10px' }}>Add your Template</h1>
      <button onClick={handleSubmit} style={{ width: "80px", height: '40px',marginTop:'12px',fontSize:'15px'}}>Add</button>
    </div>
    {/* <div className="templateHeader">
     
    </div> */}

    <div className="templateHeader">

     <div style={{width:'13%',margin:'auto'}}>
        <label htmlFor="upload-button">
                {logo.preview ? (
                  <img src={logo.preview} alt="dummy" width="100" height="90" />
                ) : (
                  <>
                    {/* <span className="fa-stack fa-2x mt-3 mb-2">
                      <i className="fas fa-circle fa-stack-2x" />
                      <i className="fas fa-store fa-stack-1x fa-inverse" />
                    </span> */}
                    <div style={{margin:'auto',width:'43%'}}><span className="fa fa-plus fa-4x"  ></span></div>
                    <h5 className="text-center" style={{color:'#3e5b77',fontSize:'12px',marginLeft:'10px'}}>Upload your Logo</h5>
                  </>
                )}
              </label>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none",justifyContent:'center'}}
                onChange={handleChange}
              />
          <br /> 
     </div>
     
    </div>


    <div style={{ marginTop: '30px' }}>
      <div className="legalassistance">

        <div style={{ marginLeft: '12px', marginTop: '6px' }}><textarea value={content} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', fontSize: '15px', fontWeight: 'bold', padding: "10px", width: "630px", height: "50px", border: 'none' }} onChange={(e) => setContent(e.target.value)}></textarea></div>
        <div style={{ marginLeft: '12px', marginTop: '10px' }}>

          <textarea wrap='soft' value={content1} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '95px', border: 'none', fontSize: '14px', padding: "10px" }} onChange={(e) => setContent1(e.target.value)}></textarea>
        </div>
        <div style={{ marginLeft: '12px', marginTop: '7px' }}>

          <textarea wrap='soft' value={content2} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '90px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent2(e.target.value)}></textarea>
        </div>
        <div style={{ marginLeft: '12px', marginTop: '7px' }}>

          <textarea wrap='soft' value={content3} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '80px', border: 'none', fontSize: '15px', fontWeight: 'bold', padding: "10px" }} onChange={(e) => setContent3(e.target.value)}></textarea>
        </div>
      </div>
    </div>

    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <a className='anchorbutton' href="" style={{fontSize:'14px'}}>Schedule Attorney Consultation</a>
    </div>

    <div style={{ marginTop: '30px' }}>
      <div className="legalassistance">

        <div style={{ marginLeft: '12px', marginTop: '10px' }}>
          <textarea wrap='soft' value={content4} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '115px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent4(e.target.value)}></textarea>
        </div>

        <div style={{ marginLeft: '12px', marginTop: '10px' }}>
          <textarea wrap='soft' value={content5} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '100px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent5(e.target.value)}></textarea>

          <div style={{ marginLeft: '12px', marginTop: '10px' }}>
            <textarea wrap='soft' value={content6} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '40px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent6(e.target.value)}></textarea>
            <textarea wrap='soft' value={content7} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '40px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent7(e.target.value)}></textarea>
            <textarea wrap='soft' value={content8} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '40px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent8(e.target.value)}></textarea>
            <textarea wrap='soft' value={content9} style={{ color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '40px', border: 'none', fontSize: '13px', padding: "10px" }} onChange={(e) => setContent9(e.target.value)}></textarea>
          </div>

        </div>
      </div>

      <div style={{ marginTop: '30px', backgroundColor: '#eeeeee', paddingTop: '20px', paddingBottom: '20px' }}>
        <div >
          <hr style={{ width: '650px', border: '1px solid ' }} />
        </div>

        {/* <div style={{ marginTop: '50px' }}>
          <p style={{ textAlign: 'center', fontStyle: 'italic', lineHeight: '6px' ,fontSize:'12px'}}>Copyright © 2021 LAW FIRM, All rights reserved.</p>
          <p style={{ textAlign: 'center', fontWeight: 'bold', lineHeight: '6px',fontSize:'12px' }}>Our mailing address is:</p>
          <p style={{ textAlign: 'center', lineHeight: '6px',fontSize:'12px' }}>LAW FIRM ADDRESS</p>
          <p style={{ textAlign: 'center', lineHeight: '6px',fontSize:'12px' }}>Want to change how you receive these emails?</p>
          <p style={{ textAlign: 'center', lineHeight: '6px',fontSize:'12px' }}>You can update your preferences or unsubscribe from this list.</p>
        </div> */}
        <div style={{ marginTop: '20px' }}>
                          {/* <p style={{ textAlign: 'center', fontStyle: 'italic', lineHeight: '6px',fontSize:'12px'}}>Copyright © 2021 LAW FIRM, All rights reserved.</p> */}
                          <div style={{  marginTop: '10px' ,display:'flex',justifyContent:'center'}}>
                               <textarea wrap='soft' value={content10} style={{ textAlign:'center' ,color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '40px', border: 'none', fontSize: '14px', padding: "10px" }} onChange={(e) => setContent10(e.target.value)}></textarea>
                           </div>
                          <p style={{ marginTop:'10px',textAlign: 'center', fontWeight: 'bold', lineHeight: '6px',fontSize:'12px' }}>Our mailing address is:</p>
                          {/* <p style={{ textAlign: 'center', lineHeight: '6px',fontSize:'12px' }}>LAW FIRM ADDRESS</p> */}
                          <div style={{  marginTop: '10px' ,display:'flex',justifyContent:'center'}}>
                               <textarea wrap='soft' value={content11} style={{ textAlign:'center' ,color: '#3e5b77', backgroundColor: '#EEEEEE', width: "630px", height: '40px', border: 'none', fontSize: '14px', padding: "10px" }} onChange={(e) => setContent11(e.target.value)}></textarea>
                           </div>
                          <p style={{ textAlign: 'center', fontSize:'12px' ,marginTop:'10px'}}>Want to change how you receive these emails?</p>
                          <p style={{ textAlign: 'center', lineHeight: '6px',fontSize:'12px' }}>You can update your preferences or unsubscribe from this list.</p>
                      </div>

      </div>


    </div>
  </div>
);


}

export default MailChampEdit;


























// import './MailChampEdit.css';
// //import imgLogo from './image/dummylogo.jpg';
// import React,{useState,useEffect} from 'react';
// import axios from 'axios';
// import SubCtrl from "../Subscription/subCtrl/subscriptionCtrl";
// import swal from "sweetalert";

// function MailChampEdit() {

//  const [logo,setLogo] = useState('');
//  const [content,setContent] = useState('Hi *|FNAME|*, need legal assistance?');
//  const [content1,setContent1] = useState('I found your name listed on the *|COUNTY|* Sheriff\'s database, where it was listed that you were recently arrested for a *|CHARGE|* charge. If you are already represented by an attorney or have resolved this matter, please disregard this email.')
//  const [content2,setContent2] = useState('If not, don’t worry – ________Attorney at Law is here to help. You need a seasoned law firm that is going to care about you and the fight you are in. We\'ve represented people in your position, and worse, for __ years.');
//  const [content3,setContent3] = useState('Schedule a consultation to discuss how we can tackle your defense and get you the best case result.');
//  const [content4,setContent4] = useState('Our lawyers will listen to your side of the story, take time to understand your goals, and use their experience to help you navigate the often treacherous waters of our criminal justice system. We know what it takes to build and present a solid and compelling case, and that’s exactly what we do. Vigorously and earnestly, we tackle the most complex challenges and pursue your goals with creativity and determination.');
//  const [content5,setContent5] = useState('We offer no-cost consultations over the phone, Zoom, or in our conveniently located offices. Let our firm help you get this matter dismissed or downgraded. Contact us today at (xxx) xxx-xxxx to discuss your case with one of our attorneys.');
//  const [content6,setContent6] = useState('Sincerely\nATTORNEY NAME\nLAW FIRM\nADDRESS');

//  var userId = localStorage.getItem("userId");

//  const handleSubmit = ()=>{
//     const datanew = new FormData();
//     datanew.append("file",logo) ;
//    // console.log("hello this is",logo.name)

//   var data={

//     content:content,
//     content1:content1, 
//     content2:content2, 
//     content3:content3,
//     content4:content4, 
//     content5:content5, 
//     content5:content5, 
//     content6:content6,  
//     userId: userId
//   }
//  SubCtrl.createTem(data,(result) => {
//    console.log("result", result)
//   if (result.data.status === true) {
//     swal({
//       title: "Congratulations!",
//       text: "You are successfully connected to Mailchimp",
//       icon: "success",
//     });
// }
//  })
// }
//   return (
//     <div className="MailChampEdit">
//       <div className="templateHeader">
//          {/* <div style={{display:'flex',justifyContent:'center'}}>
//             <div><img src={imgLogo} width="90px" height="80px"/></div>
//             <div><h1 style={{ color: '#3e5b77',marginLeft:'10px' }}>Replace this with your firm's logo</h1></div>
//          </div> */}
//          <div style={{display:'flex',justifyContent:'center'}}>
//             {/* <div><img src={imgLogo} width="90px" height="80px"/></div> */}
//             {/* <input type='text' value="Replace this with your firm's logo" style={{ width:"500px", fontSize:'30px',fontWeight:'bold',color: '#3e5b77',border:'none'}}/> */}
//             <input type="file" id="profile-photo-input" name="profile_picture" accept="image/png, image/jpeg"  onChange={(e)=>setLogo(e.target.files[0])}/>
//             <button style={{marginLeft: '10px'}} onClick={handleSubmit} >send</button> 
//          </div>
//       </div>


//       <div style={{ marginTop: '30px' }}>
//         <div className="legalassistance">
//           {/* <div>
//             <h3 style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>Hi <input  type="text" style={{ width:"80px"}}/> need legal assistance?</h3>


//           </div> */}
//           <div style={{marginLeft:'12px',marginTop:'6px'}}><input type="text" value={content} style={{color:'#3e5b77',fontSize:'15px', fontWeight:'bold',padding:"10px",width:"630px"}} onChange={(e)=>setContent(e.target.value)} /></div>
//           <div style={{ marginLeft: '12px',marginTop:'10px'}}>
//             {/* <p style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>I found your name listed on the *|COUNTY|* Sheriff's database, where it was listed that you were recently arrested for a *|CHARGE|* charge. If you are already represented by an attorney or have resolved this matter, please disregard this email.</p> */}
//             <textarea wrap='soft' value={content1} style={{color:'#3e5b77',width:"630px",height: '95px',border:'none',fontSize:'14px',padding:"10px"}} onChange={(e)=>setContent1(e.target.value)}></textarea>
//           </div>
//           <div style={{ marginLeft: '12px',marginTop:'7px'}}>
//             {/* <p style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>If not, don’t worry – ________Attorney at Law is here to help. You need a seasoned law firm that is going to care about you and the fight you are in. We've represented people in your position, and worse, for __ years.</p> */}
//             <textarea wrap='soft' value={content2} style={{color:'#3e5b77',width:"630px",height: '90px',border:'none',fontSize:'13px',padding:"10px"}} onChange={(e)=>setContent2(e.target.value)}></textarea>
//           </div>
//           <div style={{ marginLeft: '12px',marginTop:'7px'}}>
//             {/* <h4 style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>Schedule a consultation to discuss how we can tackle your defense and get you the best case result. </h4> */}
//             <textarea wrap='soft' value={content3} style={{color:'#3e5b77',width:"630px",height: '80px',border:'none',fontSize:'15px', fontWeight:'bold',padding:"10px"}} onChange={(e)=>setContent3(e.target.value)}></textarea>
//           </div>
//         </div>
//       </div>

//       <div style={{ textAlign: 'center', marginTop: '20px' }}>
//         <a className='anchorbutton' href="">Schedule Attorney Consultation</a>
//       </div>

//       <div style={{ marginTop: '30px' }}>
//         <div className="legalassistance">
//           {/* <div>
//             <p style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>Our lawyers will listen to your side of the story, take time to understand your goals, and use their experience to help you navigate the often treacherous waters of our criminal justice system.&nbsp;We know what it takes to build and present a solid and compelling case, and that’s exactly what we do. Vigorously and earnestly, we tackle the most complex challenges and pursue your goals with creativity and determination.</p>
//           </div>*/}
//            <div style={{ marginLeft: '12px',marginTop:'10px'}}>
//             <textarea wrap='soft' value={content4} style={{color:'#3e5b77',width:"630px",height: '115px',border:'none',fontSize:'13px',padding:"10px"}} onChange={(e)=>setContent4(e.target.value)}></textarea>
//           </div>  
//           {/* <div> 
//             <p style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>We offer <strong>no-cost consultations</strong> over the phone, Zoom, or in our conveniently located offices. Let our firm help you get this matter dismissed or downgraded.&nbsp;Contact us&nbsp;today at <strong>(xxx) xxx-xxxx</strong> to discuss your case with one of our attorneys.</p>
//           </div> */}
//            <div style={{ marginLeft: '12px',marginTop:'10px'}}>
//             <textarea wrap='soft' value={content5} style={{color:'#3e5b77',width:"630px",height: '115px',border:'none',fontSize:'13px',padding:"10px"}} onChange={(e)=>setContent5(e.target.value)}></textarea>
//           </div>  
//           {/* <div style={{ marginTop: '40px' }}>
//             <p style={{ paddingLeft: '15px', paddingRight: '15px', color: '#3e5b77' }}>Sincerely <br /> ATTORNEY NAME  <br />   LAW FIRM <br /> ADDRESS</p>
//           </div> */}
//           <div style={{ marginLeft: '12px',marginTop:'10px'}}>
//             <textarea wrap='soft' value={content6} style={{color:'#3e5b77',width:"630px",height: '115px',border:'none',fontSize:'13px',padding:"10px"}} onChange={(e)=>setContent6(e.target.value)}></textarea>
//           </div> 
//         </div>
//       </div>

//       <div style={{ marginTop: '30px', backgroundColor: '#eeeeee', paddingTop: '20px', paddingBottom: '20px' }}>
//         <div >
//           <hr style={{ width: '650px', border: '1px solid ' }} />
//         </div>

//         <div style={{ marginTop: '50px' }}>
//           <p style={{ textAlign: 'center', fontStyle: 'italic', lineHeight: '6px' }}>Copyright © 2021 LAW FIRM, All rights reserved.</p>
//           <p style={{ textAlign: 'center', fontWeight: 'bold', lineHeight: '6px' }}>Our mailing address is:</p>
//           <p style={{ textAlign: 'center', lineHeight: '6px' }}>LAW FIRM ADDRESS</p>
//           <p style={{ textAlign: 'center', lineHeight: '6px' }}>Want to change how you receive these emails?</p>
//           <p style={{ textAlign: 'center', lineHeight: '6px' }}>You can update your preferences or unsubscribe from this list.</p>
//         </div>

//       </div>


//     </div>
//   );
// }

// export default MailChampEdit;

