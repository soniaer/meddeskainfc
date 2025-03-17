import { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Patients() {
const [data,setdata] = useState([])
const [Patient_Name,setPatient_Name] = useState("")
const [SelectedId,setSelectedId] = useState("")
const [First_Name,setFirst_Name] = useState("")
const [Image,setImage] = useState("")
const [Last_Name,setLast_Name] = useState("")
const [Date_Of_Birth,setDate_Of_Birth] = useState("")
const [Patient_Id,setPatient_Id] = useState("")
const [Age,setAge] = useState("")
const [Height,setHeight] = useState("")
const [Weight,setWeight] = useState("")
const [Address,setAddress] = useState("")
const [Phone_Number,setPhone_Number] = useState("")
const [Primary_Physician,setPrimary_Physician] = useState("")
const [Date_Of_Visit,setDate_Of_Visit] = useState("")
const [Additional_Data,setAdditional_Data] = useState("")


const navigate = useNavigate();


const getdata =async() =>{
  fetch(`https://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net/api/getdata`,
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "*",
      "Content-Type": "application/json",
    },
  }
)
  .then((response) => {
 if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response?.status} ${response?.statusText}`
      );
    }

    return response.json();
  })
  .then((res) => {
    console.log(res);
    if(res?.message === undefined || res?.message === "undefined" ||
    res?.message === null || res?.message === "null"){
        setdata(res)
    }else{
       
    }
  
  });
}

useEffect(()=>{
    getdata()
  const interval =   setInterval(() => {
        getdata()
    }, 5000);
    return(()=>{
        clearInterval(interval)
    })
})

const deleteid = async(id) =>{
console.log(id)
fetch(`https://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net/api/deletepatient`,
{
  method: "POST",
  headers: {
    Accept: "application/json",
    "User-Agent": "*",
    "Content-Type": "application/json",
  },
body: JSON.stringify({
id:id,
}),
}
)
.then((response) => {
if (!response.ok) {
    throw new Error(
      `HTTP error! Status: ${response?.status} ${response?.statusText}`
    );
  }

  return response.json();
})
.then((res) => {
  console.log(res);
});
}

function sendMessage() {
  const fileInput = document.getElementById('file-input');
  
  const fileNameDisplay = document.getElementById('fileName');
  const file = fileInput.files[0];
  fileNameDisplay.innerHTML=file?.name
console.log(file?.name,"Product_iamge")
  if (file) {
     console.log(file,"file")
     const reader = new FileReader();

                // Once the file is loaded, convert to Base64 and display
                reader.onload = function(event) {
                    const base64String = event.target.result;
                  console.log(base64String)
                  setImage(base64String)
                };

                // Read the file as a Data URL (Base64)
                reader.readAsDataURL(file);
  }
  fileInput.value = '';
}

const updateitem = async() =>{
  console.log(SelectedId)
  fetch(`https://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net/api/updatepatients`,
  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "User-Agent": "*",
      "Content-Type": "application/json",
    },
  body: JSON.stringify({
  id:SelectedId,
  IdCard_Number:Patient_Id,
Patient_Name: Patient_Name ,
First_Name:First_Name,
Last_Name:Last_Name,
Date_Of_Birth:Date_Of_Birth,
Patient_Id:Patient_Id  ,
Age:Age,
Height:Height,
Weight:Weight ,
Address:Address,
Phone_Number: Phone_Number,
Primary_Physician:Primary_Physician,
Date_Of_Visit:Date_Of_Visit,
Additional_Data:Additional_Data  ,
DateTime: new Date() ,
Image:Image,
  }),
  }
  )
  .then((response) => {
  if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response?.status} ${response?.statusText}`
      );
    }
    return response.json();
  })
  .then((res) => {
    console.log(res);
  });
  }

return (
<div id="main"
style={{  
flex:1,
backgroundColor: "#156082",
width: "100",
height: "137vh",
alignItems:"center",
justifyContent:"center",
fontFamily:"Poppins",

}}
>
<div style={{height:"100%", width: "100%",overflowX:"hidden" }}>


<div style={{ width: "94%",
maxHeight:'100px',height:"100%",marginLeft:"3%",
backgroundColor:"transparent",
display:"flex",flexDirection:"column",justifyContent:"space-between"
,textAlign:"flex-start",
alignItems:"flex-start",
color:"#fff",fontSize:"28px",paddingTop:"2%"
}}>
<div style={{display:"flex",width:"100%",justifyContent:"space-between", }}>


<div onClick={()=>{navigate("/")}} style={{width:"60%",backgroundColor:"#fff",justifyContent:"space-between",
display:"flex",padding:"1%",maxHeight:"70px",cursor:"pointer"}}>


<img id="logodiv"  alt="" src={require('../img/med.png')} style={{width:"95%",height:"26px"}} />
</div>
<div style={{ width: "55%",border:"3px solid #9ea3ac", 
maxHeight:'40px',height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",color:"#fff",fontSize:"60%",display:"flex",fontWeight:"600",
overflow:"hidden",
marginLeft:"15%"}}>
Patients Data Viewer</div>
<div disabled style={{ width: "30%",
maxHeight:'40px',height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",color:"#156082",fontSize:"70%",display:"flex",fontWeight:"500",
overflow:"hidden",
marginLeft:"25%",backgroundColor:"#156082",}}>
ADD</div>
</div><span style={{fontSize:"70%"}}>It Just works Better</span>
</div>
<div style={{alignItems:"center", width: "94%",
maxHeight:'419px',height:"100%",marginLeft:"3%",marginTop:"1.5%",
justifyContent:"space-between",display:"flex"
}}>
<div style={{ width: "100%",
maxHeight:'419px',height:"100%",marginLeft:"0%",marginTop:"0%",
justifyContent:"center", alignItems:"flex-start",display:"flex",
flexDirection:"column",

}}>
<div style={{border:"2px solid #fff", width: "100%",
height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",display:"flex",color:"#000",fontSize:"18px",
backgroundColor:"#fff",  overflowX:"hidden"
}}>

<div style={{ width: "82%",
height:"100%",
textAlign:"center",
display:"flex",color:"#000",fontSize:"18px",
backgroundColor:"#fff",
flexDirection:"column",alignItems:"center"
}}>
<div style={{ width: "100%",border:"2px solid #d1d5db",maxHeight:"440px",
height:"100%",marginTop:"1%"}}  class="table table-responsive" >
<table class="table table-responsive">
<thead style={{fontWeight:"500",fontSize:"12px",textAlign:"left"}}>
<tr style={{backgroundColor:"#e5e7eb"}}>
<th style={{border:"none"}}>PATIENT ID</th>
<th style={{border:"none"}}>PATIENT NAME</th>
<th style={{border:"none"}}>FIRST NAME</th>
<th style={{border:"none"}}>LAST NAME</th>
<th style={{border:"none"}}>DATE OF BIRTH</th>
<th style={{border:"none"}}>PATIENT AGE</th>
<th style={{border:"none"}}>PATIENT HEIGHT</th>
<th style={{border:"none"}}>PATIENT WEIGHT</th>
<th style={{border:"none"}}>ADDRESS</th>
<th style={{border:"none"}}>PHONE NUMBER</th>
<th style={{border:"none"}}>PRIMARY PHYSICIAN</th>
<th style={{border:"none"}}>Edit</th>
<th style={{border:"none"}}>Delete</th>
</tr>
</thead>
<tbody  style={{fontWeight:"500",fontSize:"14px",textAlign:"left",
backgroundColor:"#d1d5db"}}>
    {data?.map((item,index)=>
        <tr>
<td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>{item?.Patient_Id}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Patient_Name}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.First_Name}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Last_Name}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Date_Of_Birth}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Age}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Height}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Weight}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Address}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Phone_Number}</td>
<td style={{borderRight:"2px solid #d1d5db",borderTop:"none"}}>{item?.Primary_Physician}</td>
<td onClick={()=>{setSelectedId(item.id);setPatient_Id(item?.Patient_Id);setPatient_Name(item?.Patient_Name);setFirst_Name(item?.First_Name);
setLast_Name(item?.Last_Name);setDate_Of_Birth(item?.Date_Of_Birth);setAge(item?.Age);setHeight(item?.Height);setWeight(item?.Weight);setAddress(item?.Address);
setPhone_Number(item?.Phone_Number);setPrimary_Physician(item?.Primary_Physician);setAdditional_Data(item?.Additional_Data);setDate_Of_Visit(item?.Date_Of_Visit);
document.getElementById("myModal").style.display="block"}} style={{borderRight:"2px solid #d1d5db",borderTop:"none",cursor:"pointer"}}><img alt="" src={require("../img/pencil.png")} 
style={{width:"20px",height:"20px"}} /></td>
<td onClick={()=>deleteid(item?.id)} style={{borderRight:"2px solid #d1d5db",borderTop:"none",cursor:"pointer"}}><img alt="" src={require("../img/delete.png")} 
style={{width:"20px",height:"20px"}} /></td>
</tr>
    )}
</tbody>
</table>
</div>
</div>
</div>

</div>
</div>
<div>

<div style={{marginTop:"19.55vh",width:"96%",paddingLeft:"2%",color:"white",paddingRight:"0%"}}>

<div style={{fontSize:"16px"}}>
Disclaimers and warning :
</div>
<div style={{fontSize:"16px",fontWeight:"600"}}>
Is it to be clear that All in and above of the data presentation and the 
presented datasheet, and the information presented, including any medicine or personal or medical data, 
is solely for illustrative, demonstration, and educational explanatory purposes and should not 
be construed as real data or representative of any actual real medical data .
</div>
<div style={{fontSize:"16px",marginTop:"1.25%"}}>
This webpage is been powered by MedDesk-AI all rights received ©
</div>
<div id="myModal" class="modal">

<div class="modal-content">
<span class="close" onClick={()=>{document.getElementById("myModal").style.display="none"}}>&times;</span>



<h4 style={{color:"#156082"}}>Add Data</h4>
<div style={{display:"flex",justifyContent:"center",alignItems:"center",width:"100%"}}>


<div style={{width:"80%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
flexDirection:"column"}}>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>


<label>PATIENT NAME:</label>

<input value={Patient_Name} onChange={(e)=>setPatient_Name(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>FIRST NAME:</label>

<input value={First_Name} onChange={(e)=>setFirst_Name(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>LAST NAME:</label>

<input value={Last_Name} onChange={(e)=>setLast_Name(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>DATE OF BIRTH:</label>

<input value={Date_Of_Birth} onChange={(e)=>setDate_Of_Birth(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>PATIENT ID:</label>

<input value={Patient_Id} onChange={(e)=>setPatient_Id(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>PATIENT AGE:</label>

<input value={Age} onChange={(e)=>setAge(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
  <label>PATIENT IMAGE:</label>

<input type="file" id="file-input" onChange={(e)=>{sendMessage()}} style={{width:"20%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
<div id="fileName" style={{marginTop:"0.5%",overflow:"hidden",width:"25%",maxHeight:"20px"}}>No file chosen</div>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>PATIENT HEIGHT:</label>

<input value={Height} onChange={(e)=>setHeight(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>PATIENT WEIGHT:</label>

<input value={Weight} onChange={(e)=>setWeight(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>ADDRESS:</label>

<input value={Address} onChange={(e)=>setAddress(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div  style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>PHONE NUMBER:</label>

<input value={Phone_Number} onChange={(e)=>setPhone_Number(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div  style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>PRIMARY PHYSICIAN:</label>

<input value={Primary_Physician} onChange={(e)=>setPrimary_Physician(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>DATE OF VISIT:</label>

<input value={Date_Of_Visit} onChange={(e)=>setDate_Of_Visit(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
<div  style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<label>ADDITIONAL DATA:</label>

<input value={Additional_Data} onChange={(e)=>setAdditional_Data(e.target.value)} style={{width:"60%",border:"2px solid #156082",marginBottom:"2%"}}>
</input>
</div>
</div>

</div>
<button onClick={()=>{updateitem(); document.getElementById("myModal").style.display="none"}} style={{border:"2px solid #156082",width:"40%",backgroundColor:"#156082",height:"30px",
cursor:"pointer"}}>
<span style={{color:"white"}} >
Update</span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

export default Patients;
