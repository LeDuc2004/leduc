function selectProduct() {
    let userChoice = JSON.parse(localStorage.getItem("userChoice"))
    let layOutSum = document.getElementsByClassName("detail-choice")
    let layOut = ''; 
    for (let key1=0;key1<userChoice.length;key1++) {
        layOut+= ` <div class="img-product">
                        <img src="${userChoice[key1].img}" alt="">
                    </div>
                    <div class="name-product">
                        <h2>${userChoice[key1].name}<h2>
                    </div>
                    <div class="input-product">
                        <input  class='input-value' type="number" onclick="buyClick(),total()" onkeydown="buy(event)" min="1" value="1">
                        <button onclick = "noticeCheckoutSuccess()">CheckOut</button>
                    </div>
                    <div class="price-product">
                        <h2>${userChoice[key1].price}</h2>
                        <span ></span>
                        <p onclick="total()">Total :<label></label> </p> 
                        <button onclick="deleteProduct(${key1})" class"bnt-delete"  ><i class="fa-solid fa-trash"></i></button>
                    </div>`
                     
                    
                }
                
        layOutSum[0].innerHTML = layOut
}
selectProduct()