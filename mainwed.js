function login() {
  window.location.href = "login.html";
}

// var searchInput = document.querySelector("input")
// searchInput.addEventListener("input",function(e){
//   let a = document.getElementById("carouselExampleInterval")
//   a.setAttribute("style","display:none")
//   let txtSearch = e.target.value.trim().toLowerCase()
//   let listSunDOM = document.querySelectorAll(".sun");
  
//   listSunDOM.forEach(item=>{
//     if(item.innerText.toLowerCase().includes(txtSearch)){
//       item.setAttribute("style","display:block")

//     }else{
//       item.setAttribute("style","display:none")
//     } 
//   })
// })
function phimyeuthich(){
  window.location.href ="phimyeuthich.html"
}
function search(){
  let valueInput = document.getElementById("inputSearch").value;
  document.getElementById("phimhot").setAttribute("style","display:none")
  let a = document.getElementById("carouselExampleInterval")
  a.setAttribute("style","display:none")
  if(valueInput==""){
    document.getElementById("phimhot").setAttribute("style","display:inline-flex")
    a.setAttribute("style","display:block")
  }
  let txtSearch = valueInput.trim().toLowerCase()
  let listSunDOM = document.querySelectorAll(".sun");
  listSunDOM.forEach(item=>{
        if(item.innerText.toLowerCase().includes(txtSearch)){
          item.setAttribute("style","display:block")
    
        }else{
          item.setAttribute("style","display:none")
        } 
      })
}
function theLoai(){
  console.log(1);
  
  
  document.getElementById("listMenu").setAttribute("style","display:none")
  document.getElementById("listMenu1").setAttribute("style","display:inline-block")
  document.getElementById("menu").setAttribute("style","display:inline-block")
  

}
function theLoai1(){
  
  
  document.getElementById("listMenu1").setAttribute("style","display:none")
  document.getElementById("listMenu").setAttribute("style","display:inline-block")
  document.getElementById("menu").setAttribute("style","display:none")


  
  

}





function comeHead(){
  window.location.href = "wed.html";
}

function dragon() {
  
  document.getElementById("inputSearch").setAttribute("value","dragon")
  
    let valueInput = document.getElementById("inputSearch").value;
    let a = document.getElementById("carouselExampleInterval")
    a.setAttribute("style","display:none")
    if(valueInput==""){
      a.setAttribute("style","display:block")
    }
    let txtSearch = valueInput.trim().toLowerCase()
    let listSunDOM = document.querySelectorAll(".sun");
    listSunDOM.forEach(item=>{
          if(item.innerText.toLowerCase().includes(txtSearch)){
            item.setAttribute("style","display:block")
      
          }else{
            item.setAttribute("style","display:none")
          } 
        })
  
    
  
  }
  function li1() {
  
    window.location.href ="anime.html"
    
      
    
    }
  function naruto() {
  
    document.getElementById("inputSearch").setAttribute("value","naruto")
    
      let valueInput = document.getElementById("inputSearch").value;
      let a = document.getElementById("carouselExampleInterval")
      a.setAttribute("style","display:none")
      if(valueInput==""){
        a.setAttribute("style","display:block")
      }
      let txtSearch = valueInput.trim().toLowerCase()
      let listSunDOM = document.querySelectorAll(".sun");
      listSunDOM.forEach(item=>{
            if(item.innerText.toLowerCase().includes(txtSearch)){
              item.setAttribute("style","display:block")
        
            }else{
              item.setAttribute("style","display:none")
            } 
          })
    
      
    
    }
    function hocVien() {
  
      document.getElementById("inputSearch").setAttribute("value","Học Viện Anh Hùng")
      
        let valueInput = document.getElementById("inputSearch").value;
        let a = document.getElementById("carouselExampleInterval")
        a.setAttribute("style","display:none")
        if(valueInput==""){
          a.setAttribute("style","display:block")
        }
        let txtSearch = valueInput.trim().toLowerCase()
        let listSunDOM = document.querySelectorAll(".sun");
        listSunDOM.forEach(item=>{
              if(item.innerText.toLowerCase().includes(txtSearch)){
                item.setAttribute("style","display:block")
          
              }else{
                item.setAttribute("style","display:none")
              } 
            })
      
        
      
      }
      function onePiece() {
  
        document.getElementById("inputSearch").setAttribute("value","One Piece")
        
          let valueInput = document.getElementById("inputSearch").value;
          let a = document.getElementById("carouselExampleInterval")
          a.setAttribute("style","display:none")
          if(valueInput==""){
            a.setAttribute("style","display:block")
          }
          let txtSearch = valueInput.trim().toLowerCase()
          let listSunDOM = document.querySelectorAll(".sun");
          listSunDOM.forEach(item=>{
                if(item.innerText.toLowerCase().includes(txtSearch)){
                  item.setAttribute("style","display:block")
            
                }else{
                  item.setAttribute("style","display:none")
                } 
              })
        
          
        
        }
    
  









const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

// $(document).ready(function () {


//   document
//     .getElementById("nameUser")
//     .setAttribute("data-bs-original-title", "New Tooltip Title");

//   console.log(nameUser);
// });
let nameUser = document.getElementById("nameUser");
let indexOfuser = localStorage.getItem("indexOfuser");
let getIdUser = localStorage.getItem("information");
let ArrgetIdUser =JSON.parse(getIdUser)
if(localStorage.getItem("indexLogin") == "true" ){
nameUser.setAttribute("data-bs-original-title", ArrgetIdUser[indexOfuser].username);
}
function movie1(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
      document.getElementById("ifDontLogin").setAttribute("style","display:none")
    }, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page2.html"
    


  }
}
function movie2(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page3.html"
    


  }
}

function Logout(){
  console.log(1)
  let nameUser = document.getElementById("nameUser");
  localStorage.setItem("indexLogin","false")
  nameUser.setAttribute("data-bs-original-title","Bạn chưa đăng nhập");
  console.log(nameUser)
  window.location.href ="login.html"
  
}
function movie3(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page4.html"
    


  }
}
function movie4(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page5.html"
    


  }
}
function movie5(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page6.html"
    


  }
}
function movie6(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page7.html"
    


  }
}
function movie7(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page8.html"
    


  }
}
function movie8(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page9.html"
    


  }
}
function movie9(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page10.html"
    


  }
}
function movie10(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page11.html"
    


  }
}
function movie11(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page12.html"
    


  }
}
function movie12(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page13.html"
    


  }
}
function movie13(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page14.html"
    


  }
}
function movie14(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page15.html"
    


  }
}
function movie15(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page16.html"
    


  }
}
function movie16(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page17.html"
    


  }
}
function movie17(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page18.html"
    


  }
}

function movie18(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page19.html"
    


  }
}
function movie19(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page20.html"
    


  }
}
function movie20(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page21.html"
    


  }
}
function movie21(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page22.html"
    


  }
}
function movie22(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page23.html"
    


  }
}
function movie23(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page24.html"
    


  }
}
function movie24(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page25.html"
    


  }
}
function movie25(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page26.html"
    


  }
}
function movie26(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page27.html"
    


  }
}
function movie27(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page28.html"
    


  }
}
function movie28(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page29.html"
    


  }
}
function movie29(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page30.html"
    


  }
}
function movie30(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page31.html"
    


  }
}
function movie31(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page32.html"
    


  }
}
function movie32(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page33.html"
    


  }
}
function movie33(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page34.html"
    


  }
}
function movie34(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page35.html"
    


  }
}
function movie35(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page36.html"
    


  }
}
function movie36(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page37.html"
    


  }
}
function movie37(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page38.html"
    


  }
}
function movie38(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page39.html"
    


  }
}
function movie39(){
  let checkShow = document.getElementById("nameUser");
console.log(checkShow.getAttribute("data-bs-original-title"));
  if(checkShow.getAttribute("data-bs-original-title")=="Bạn chưa đăng nhập"){
    document.getElementById("ifDontLogin").setAttribute("style","display:block")
    setTimeout(  function () {
  document.getElementById("ifDontLogin").setAttribute("style","display:none")
}, 2000);
  }else{
    document.getElementById("ifDontLogin").setAttribute("style","display:none")
    window.location.href = "page40.html"
    


  }
}






