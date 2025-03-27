import { useEffect, useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { io } from "socket.io-client";
var previousdata ;

function NFC() {
//const [IdCard_Number,setIdCard_Number] = useState("")
const [Patient_Name,setPatient_Name] = useState("")
const [First_Name,setFirst_Name] = useState("")
const [Last_Name,setLast_Name] = useState("")
const [Date_Of_Birth,setDate_Of_Birth] = useState("")
const [Patient_Id,setPatient_Id] = useState("")
const [Age,setAge] = useState("")
const [Image,setImage] = useState("")
const [Height,setHeight] = useState("")
const [Weight,setWeight] = useState("")
const [Address,setAddress] = useState("")
const [Phone_Number,setPhone_Number] = useState("")
const [Primary_Physician,setPrimary_Physician] = useState("")
const [Date_Of_Visit,setDate_Of_Visit] = useState("")
const [Additional_Data,setAdditional_Data] = useState("")

const [message, setMessage] = useState('');
const [nfcData, setNfcData] = useState({ uid: "", data: "" });

  const socket = io("wss://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net", {
    reconnection: true,      // Enable reconnection
    reconnectionAttempts: 10, // Number of retries before failing
    reconnectionDelay: 1000, // Delay between reconnect attempts
  }); // Use wss:// for secure WebSocket

  useEffect(() => {
    const handleNfcData = async(data) => {
      console.log("Received NFC Data:", data);
      setNfcData(data);
if(previousdata?.uid === data?.uid){

}else{
  console.log("not same",previousdata,data)
      fetch(`https://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net/api/getscanneddata`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "User-Agent": "*",
          "Content-Type": "application/json",
        },
    body: JSON.stringify({
      nfcData:data.data,
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
        if(res?.message === undefined || res?.message === "undefined" || res?.message === null || res?.message === "null" ){
          setScannedData(res)
          previousdata = data;
        }else{
setScannedData({
"id":"NA",
"IdCard_Number": "NA",
"Patient_Name": "NA",
"First_Name": "NA",
"Last_Name": "NA",
"Date_Of_Birth": "NA",
"Patient_Id": "NA",
"Age": "NA",
"Height": "NA",
"Weight": "NA",
"Address": "NA",
"Phone_Number": "NA",
"Primary_Physician": "NA",
"Date_Of_Visit": "NA",
"Additional_Data": "NA",
"DateTime": "NA",
"Image": "NA"
})
        }
      });
    };
 
  }

    const handleReconnect = () => {
      console.log("Reconnected to server");
    };

    const handleDisconnect = () => {
      console.log("Disconnected! Trying to reconnect...");
    };

    // Listen for NFC data
    socket.on("nfc_data", handleNfcData);

    // Handle reconnect and disconnect events
    socket.on("connect", handleReconnect);
    socket.on("disconnect", handleDisconnect);

    return () => {
      socket.off("nfc_data", handleNfcData);
      socket.off("connect", handleReconnect);
      socket.off("disconnect", handleDisconnect);
    };
    // eslint-disable-next-line
  }, []);
  

const navigate = useNavigate();

const adddata =async() =>{
  fetch(`https://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net/api/addpatient`,
  {
    method: "POST",
    headers: {
      Accept: "application/json",
      "User-Agent": "*",
      "Content-Type": "application/json",
    },
body: JSON.stringify({
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

const [scannedData,setScannedData] = useState({
  "id":"NA",
    "IdCard_Number": "NA",
    "Patient_Name": "NA",
    "First_Name": "NA",
    "Last_Name": "NA",
    "Date_Of_Birth": "NA",
    "Patient_Id": "NA",
    "Age": "NA",
    "Height": "NA",
    "Weight": "NA",
    "Address": "NA",
    "Phone_Number": "NA",
    "Primary_Physician": "NA",
    "Date_Of_Visit": "NA",
    "Additional_Data": "NA",
    "DateTime": "NA",
    "Image": "NA"
})

useEffect(() => {
  let buffer = '';
  let timer = null;

  const handleKeyPress = (event) => {
    // Ignore any special key presses (like Enter, Shift, etc.)
    if (event.key.length === 1) {
      buffer += event.key;

      // Clear buffer if there is a delay in keypress (more than 100ms means manual entry)
      if (timer) clearTimeout(timer);

      // Set a timeout to check when input has stopped
      timer = setTimeout(() => {
        console.log(buffer,"**********SCANNED BARCODE**********")
        setMessage(buffer)
        fetch(`https://meddesknode-f0djang2hcfub6dc.eastus2-01.azurewebsites.net/api/getscanneddata`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "User-Agent": "*",
            "Content-Type": "application/json",
          },
      body: JSON.stringify({
        nfcData:buffer,
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
          if(res?.message === undefined || res?.message === "undefined" || res?.message === null || res?.message === "null" ){
            setScannedData(res)
           
          }else{
setScannedData({
  "id":"NA",
  "IdCard_Number": "NA",
  "Patient_Name": "NA",
  "First_Name": "NA",
  "Last_Name": "NA",
  "Date_Of_Birth": "NA",
  "Patient_Id": "NA",
  "Age": "NA",
  "Height": "NA",
  "Weight": "NA",
  "Address": "NA",
  "Phone_Number": "NA",
  "Primary_Physician": "NA",
  "Date_Of_Visit": "NA",
  "Additional_Data": "NA",
  "DateTime": "NA",
  "Image": "NA"
})
          }
        });
       
        buffer = '';  // Clear the buffer after capturing the full barcode
      }, 100);
    }
  };

  // Add event listener for keypress
  window.addEventListener('keypress', handleKeyPress);

  // Cleanup event listener on component unmount
  return () => {
    window.removeEventListener('keypress', handleKeyPress);
  };
}, []);

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
maxHeight:'120px',height:"100%",marginLeft:"3%",
backgroundColor:"transparent",
display:"flex",flexDirection:"column",justifyContent:"space-between"
,textAlign:"flex-start",
alignItems:"flex-start",
color:"#fff",fontSize:"28px",paddingTop:"2%",
}}>
<div style={{display:"flex",width:"100%",justifyContent:"space-between", }}>
<div style={{width:"60%",backgroundColor:"#fff",justifyContent:"space-between",
display:"flex",padding:"1%",maxHeight:"70px",}}>
<img id="logodiv" alt="" src={require('../img/med.png')} style={{width:"95%",height:"26px"}} />
</div>
<div style={{ width: "55%",border:"3px solid #9ea3ac", 
maxHeight:'40px',height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",color:"#fff",fontSize:"60%",display:"flex",fontWeight:"600",
overflow:"hidden",
marginLeft:"15%"}}>
Patient ID CARD Data Viewer</div>
<div onClick={()=>{document.getElementById("myModal").style.display="block"}} style={{ width: "30%",
maxHeight:'40px',height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"70%",display:"flex",fontWeight:"500",
overflow:"hidden",
marginLeft:"25%",backgroundColor:"#fff",cursor:"pointer"}}>
ADD</div>
</div><span style={{fontSize:"70%"}}>It Just works Better ,Scanned Data: {message}UID: {nfcData?.uid} ,Data: {nfcData?.data}</span>

</div>
<div style={{color:"white",marginLeft:45,marginTop:30,}}></div>

<div style={{alignItems:"center", width: "94%",
maxHeight:'419px',height:"100%",marginLeft:"3%",marginTop:"1.5%",
justifyContent:"space-between",display:"flex"
}}>
<div style={{ width: "94%",
maxHeight:'419px',height:"100%",marginLeft:"0%",marginTop:"0%",
justifyContent:"center", alignItems:"flex-start",display:"flex",
flexDirection:"column",

}}>
<div style={{border:"2px solid #fff", width: "96.5%",
height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",display:"flex",color:"#000",fontSize:"18px",
backgroundColor:"#fff",  overflowX:"hidden"
}}>
<div style={{ width: "37%",
height:"100%",
justifyContent:"center",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"18px",
backgroundColor:"#e5e7eb",marginRight:"1%",
marginLeft:"1%"
}}>
<div style={{ width: "95%",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",
backgroundColor:"#f3f4f6",paddingLeft:"3%"}}>
PATIENT NAME:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Patient_Name}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",marginTop:"10%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
FIRST NAME:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.First_Name}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
LAST NAME:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Last_Name}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
DATE OF BIRTH:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Date_Of_Birth}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
PATIENT ID:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Patient_Id}</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
PATIENT AGE:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Age}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
PATIENT HEIGHT:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Height}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
PATIENT WEIGHT:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Weight}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
ADDRESS:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Address}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
PHONE NUMBER:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Phone_Number}</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
maxHeight:'80px',height:"100%",
justifyContent:"flex-start",textAlign:"center",
alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
}}>
PRIMARY PHYSICIAN:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>{scannedData?.Primary_Physician}</span>
</div>
</div>
<div style={{ width: "72%",
height:"100%",
textAlign:"center",
display:"flex",color:"#000",fontSize:"18px",
backgroundColor:"#fff",
flexDirection:"column",alignItems:"center"
}}>
<p style={{textAlign:"right",width:"99%",color:"#9ea3ac",fontFamily:"Poppins",paddingRight:"2%"}}>Data</p>
<div style={{ width: "98%",border:"2px solid #d1d5db",maxHeight:"380px",
height:"100%",marginTop:"3%"}}  className="table table-responsive" >
<table className="table table-responsive">
<thead style={{fontWeight:"500",fontSize:"12px",textAlign:"left"}}>
<tr style={{backgroundColor:"#e5e7eb"}}>
<th style={{borderRight:"1px solid #d1d5db"}}>DATE of visit</th>
<th style={{border:"none"}}>Addititonal Data</th>
</tr>
</thead>
<tbody  style={{fontWeight:"500",fontSize:"14px",textAlign:"left",
backgroundColor:"#d1d5db"}}>
<tr>
<td style={{border:"none"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{border:"none"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{border:"none"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{border:"none"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{borderRight:"1px solid #000",borderTop:"none"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}>{scannedData?.Additional_Data}</td>
</tr>
<tr>
<td style={{backgroundColor:"#fff",border:"none"}}>{scannedData?.Date_Of_Visit}</td>
<td style={{borderTop:"1px solid #000",borderRight:"1px solid #000",
borderBottom:"1px solid #000"}}>{scannedData?.Additional_Data}</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
<div style={{ width: "54%",
maxHeight:'419px',height:"100%",marginLeft:"0%",marginTop:"0%",
textAlign:"center",
alignItems:"center",display:"flex",color:"#fff",fontSize:"18px", flexDirection:"column",
}}>
<div style={{border:"2px solid #fff", width: "74%",
maxHeight:'300px',height:"100%",marginLeft:"0%",marginTop:"0%",
justifyContent:"center",textAlign:"center",
alignItems:"center",display:"flex",color:"#fff",fontSize:"18px",flexDirection:"column"
}}>Picture
<img alt="" src={scannedData?.Image} style={{width:"50%",marginTop:"5%"}} />   </div>
<div  style={{border:"2px solid #fff", width: "74%",
maxHeight:'40px',height:"100%",marginLeft:"0%",marginTop:"8%",
justifyContent:"center",textAlign:"center",overflow:"hidden",
alignItems:"center",display:"flex",color:"#fff",fontSize:"18px"
}}>{scannedData?.Patient_Id}</div>
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
<div id="myModal" className="modal">
<div className="modal-content">
<span className="close" onClick={()=>{document.getElementById("myModal").style.display="none"}}>&times;</span>
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
<div  style={{width:"100%",paddingTop:"1%",paddingBottom:"1%",color:"#156082",display:"flex",justifyContent:"space-between",
}}>
<button onClick={()=>{adddata();document.getElementById("myModal").style.display="none"}} 
style={{border:"2px solid #156082",width:"40%",backgroundColor:"#156082",height:"30px",
cursor:"pointer"}}>
<span style={{color:"white"}} >
Add</span>
</button>
<button onClick={()=>{navigate("/view")}} style={{border:"2px solid #156082",width:"40%",backgroundColor:"#156082",height:"30px",
cursor:"pointer",color:"white"
}}>View</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}

export default NFC;
