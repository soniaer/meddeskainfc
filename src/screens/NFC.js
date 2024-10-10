import '../App.css';

function NFC() {
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


          <div  style={{ width: "60%",
          maxHeight:'100px',height:"100%",marginLeft:"3%",
          backgroundColor:"transparent",
          display:"flex",flexDirection:"column",justifyContent:"space-between"
          ,textAlign:"flex-start",
          alignItems:"flex-start",
          color:"#fff",fontSize:"28px",paddingTop:"2%"
         }}>
          <div style={{display:"flex",width:"100%"}}>

        
          <div  style={{width:"50%",backgroundColor:"#fff",justifyContent:"center",
        display:"flex",padding:"1%",maxHeight:"70px"}}>

         
     <img id="logodiv" alt="" src={require('../img/med.png')} style={{width:"85%",height:"26px"}} />
     </div>
     <div style={{ width: "55%",border:"3px solid #9ea3ac", 
          maxHeight:'40px',height:"100%",
          justifyContent:"center",textAlign:"center",
          alignItems:"center",color:"#fff",fontSize:"70%",
          display:"flex",fontWeight:"600",
   overflow:"hidden",
          marginLeft:"25%"}}>
Patient ID CARD Data Viewer</div>
     </div><span style={{fontSize:"70%"}}>It Just works Better</span>
          </div>
          <div style={{alignItems:"center", width: "94%",
          maxHeight:'410px',height:"100%",marginLeft:"3%",marginTop:"2%",
          justifyContent:"space-between",display:"flex"
         }}>
           <div style={{ width: "94%",
          maxHeight:'410px',height:"100%",marginLeft:"0%",marginTop:"0%",
          justifyContent:"center", alignItems:"flex-start",display:"flex",
          flexDirection:"column",
        
         }}>
      <div style={{border:"2px solid #fff", width: "96.5%",
          maxHeight:'410px',height:"100%",
          justifyContent:"center",textAlign:"center",
          alignItems:"center",display:"flex",color:"#000",fontSize:"18px",
          backgroundColor:"#fff",  overflowX:"hidden"
         }}>
  <div style={{ width: "37%",
          maxHeight:'410px',height:"100%",
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
PATIENT NAME:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>Mister Jhonson</span>
</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",marginTop:"10%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
FIRST NAME:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>Mister</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
LAST NAME:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>Jhonson</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
DATE OF BIRTH:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>15/7/1985</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
PATIENT ID:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>PJ-19850715</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
PATIENT AGE:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>46</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
PATIENT HEIGHT:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>180 cm</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
PATIENT WEIGHT:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>60 kg</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
       
          }}>
ADDRESS:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>123 Main St,Anytown,U</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
       
          }}>
PHONE NUMBER:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>1234567890</span>

</div>
<div style={{ width: "95%",backgroundColor:"#f3f4f6",border:"3px solid #9ea3ac", 
          maxHeight:'80px',height:"100%",
          justifyContent:"flex-start",textAlign:"center",
          alignItems:"center",color:"#000",fontSize:"13px",display:"flex",fontWeight:"600",paddingLeft:"3%",
          }}>
PRIMARY PHYSICIAN:<span style={{color:"#000",fontSize:"13px",fontWeight:"500",marginLeft:"5%",overflow:"hidden",}}>Dr. Smith</span>

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
height:"100%",marginTop:"3%"}}  class="table table-responsive" >
<table class="table table-responsive">
    <thead style={{fontWeight:"500",fontSize:"12px",textAlign:"left"}}>
      <tr style={{backgroundColor:"#e5e7eb"}}>
        <th style={{borderRight:"1px solid #d1d5db"}}>DATE of visit</th>
        <th style={{border:"none"}}>Addititonal Data</th>
     
      </tr>
    </thead>
    <tbody  style={{fontWeight:"500",fontSize:"14px",textAlign:"left",
    backgroundColor:"#d1d5db"}}>
      <tr>
        <td style={{border:"none"}}>NA</td>
        <td style={{border:"none"}}></td>
     
      </tr>
      <tr>
        <td style={{border:"none"}}>NA</td>
        <td style={{border:"none"}}></td>
       
      </tr>
      <tr>
        <td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>NA</td>
        <td style={{borderRight:"1px solid #000",borderTop:"none"}}></td>
       
      </tr>
      <tr>
        <td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>NA</td>
        <td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}></td>
       
      </tr>
      <tr>
        <td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>NA</td>
        <td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}></td>
       
      </tr>
      <tr>
        <td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>NA</td>
        <td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}></td>
       
      </tr>
      <tr>
        <td style={{backgroundColor:"#fff",borderBottom:"2px solid #d1d5db"}}>NA</td>
        <td style={{borderTop:"1px solid #000",borderRight:"1px solid #000"}}></td>
       
      </tr>
      <tr>
        <td style={{backgroundColor:"#fff",border:"none"}}>NA</td>
        <td style={{borderTop:"1px solid #000",borderRight:"1px solid #000",
      borderBottom:"1px solid #000"}}></td>
       
      </tr>
    </tbody>
  </table>
</div>
         </div>
         </div>
        
         </div>
    
         <div style={{ width: "54%",
          maxHeight:'410px',height:"100%",marginLeft:"0%",marginTop:"0%",
         textAlign:"center",
          alignItems:"center",display:"flex",color:"#fff",fontSize:"18px", flexDirection:"column",
         }}>
             <div style={{border:"2px solid #fff", width: "74%",
          maxHeight:'300px',height:"100%",marginLeft:"0%",marginTop:"0%",
          justifyContent:"center",textAlign:"center",
          alignItems:"center",display:"flex",color:"#fff",fontSize:"18px",
         
         }}>Picture</div>
    <div style={{border:"2px solid #fff", width: "74%",
          maxHeight:'40px',height:"100%",marginLeft:"0%",marginTop:"8%",
          justifyContent:"center",textAlign:"center",overflow:"hidden",
          alignItems:"center",display:"flex",color:"#fff",fontSize:"18px"
         }}>Id card number raw data reading</div>
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
</div>
</div>
</div>
      </div>
 
  
    );
  }
  
  export default NFC;
