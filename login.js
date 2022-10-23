
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
    let emailLocal = localStorage.getItem("information");
    let num = false
    let checkEmail = document.getElementById("checkEmail").value ;
    let spanemail = document.getElementById("erorEmail")
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
    let spanmk = document.getElementById("confirnPass")
    if(checkPass==""){ 
        spanmk.setAttribute("style","display:block;color:red")

    }else{
        spanmk.setAttribute("style","display:none;")
        // window.location.href="wed.html"
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
    let kxd = document.getElementById("erorEmail1");
   if(num==false && checkPass !==""){
    console.log(1);
    spanemail.setAttribute("style","display:none");
    kxd.setAttribute("style","display:block;color:red");
   }
    console.log(emailLocal);
    
     if(changeArray[num].password == obj1.pass ){
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






