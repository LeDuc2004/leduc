
function showPassword(){
   
    let checkPass = document.getElementById("checkPass")
   

    let icon =document.getElementById("icon")
    if(checkPass.type == "password"){
        checkPass.type="text";
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
    }else{
        checkPass.type="password";
        icon.classList.remove("fa-eye-slash")
        icon.classList.add("fa-eye")
    }
}

function register(){  
    let valueCheckPass = document.getElementById("checkPass").value;
    let emailLocal = localStorage.getItem("information");
    let num = false
    let checkEmail = document.getElementById("checkEmail").value ;
    let spanemail = document.getElementById("erorEmail")
    let spanmk = document.getElementById("confirnPass")
    
    let re =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let flag = false
    console.log(emailLocal);
    if (emailLocal ==null){
       document.getElementById("erorEmail").setAttribute("style","display:block;color:red");
    }
    if(re.test(checkEmail)==false){
        spanemail.setAttribute("style","display:blok;color:red")
        

    }else{
        flag=true
        spanemail.setAttribute("style","display:none")
        // let xx = document.getElementById("erorEmail")
    // xx.setAttribute("style","display:none")
    }   let checkPass = document.getElementById("checkPass"). value;
    
    if(checkPass==""){ 
        spanmk.setAttribute("style","display:block;color:red")

    }else{
        spanmk.setAttribute("style","display:none;")
        
    }
    
    if(flag=true){
    let obj1 = {
        email:checkEmail,
        pass:checkPass,
    }
     
    
    
    let changeArray =JSON.parse(emailLocal);
   
    for (i=0 ; i< changeArray.length ; i++ ){
        if(obj1.email !== changeArray[i].email ){
            continue
          
       


        } else{

            num=i
            localStorage.setItem("indexOfuser",i)
            localStorage.setItem("indexLogin",true)
            
        }

           
    }
     console.log(num);
     let ok = num
    let kxd = document.getElementById("erorEmail1");
   if(num==false && checkEmail !=="" ){
    console.log(99);
    spanemail.setAttribute("style","display:none");
    kxd.setAttribute("style","display:block;color:red");
   }
   if(num !==false && checkEmail !=="" ){
    console.log(99);
    spanemail.setAttribute("style","display:none");
    kxd.setAttribute("style","display:none;color:red");
   }
   if(num !==false && checkEmail !=="" && changeArray[num].password !== obj1.pass){
    document.getElementById("confirnPass").setAttribute("style","display:block;color:red")
    document.getElementById("checkPass").value = ""
   }
   if(num=false && checkEmail !=="" && valueCheckPass !== ""){
    document.getElementById("confirnPass").setAttribute("style","display:block;color:red")
    document.getElementById("checkPass").value = ""

   }
    console.log(emailLocal);
    

     if(changeArray[ok].password == obj1.pass){
        console.log(100);
        kxd.setAttribute("style","display:none");
         window.location.href="wed.html"
    }else{
        spanmk.setAttribute("style","display:block;color:red")
    }
   
    console.log()
}   
    
}

function register2(){
    window.location.href ="index.html"
}






