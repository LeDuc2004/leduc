



var jsonDanhsachPhim = localStorage.getItem("userChoice");
var danhsachPhim = JSON.parse(jsonDanhsachPhim);
console.log(danhsachPhim);

var HTML = chuyendoiDanhsachPhimRaHtml(danhsachPhim); 

var nodePhim = document.getElementById("bodyContent");
nodePhim.innerHTML = HTML;




function chuyendoiDanhsachPhimRaHtml(danhsachPhim) {
    var HTMLdanhsachPhim = '<div id="bodyContent">';
    for (let i = 0; i < danhsachPhim.length; i++) {
        var phim = danhsachPhim[i]
        var htmlPhim = chuyendoiDoiTuonthanhHtml(phim);
        HTMLdanhsachPhim = HTMLdanhsachPhim + htmlPhim;

        
    }
    HTMLdanhsachPhim = HTMLdanhsachPhim + '</div>';
    return HTMLdanhsachPhim;

}


function chuyendoiDoiTuonthanhHtml(phim) {
    console.log(phim.name)
    var htmlPhim = '';
    htmlPhim +=  '<div class="sun">'
    htmlPhim +=    '<img  src="'+ phim.image+'" alt="" srcset="" />'
    htmlPhim +=   ' <p>'+ phim.name+'</p>'
    htmlPhim +=    '<i onclick="clickdelete1()" class="fa-solid fa-trash"></i>'
    htmlPhim +=    '</div>'
    

    return htmlPhim


}

console.log(danhsachPhim);
function clickdelete1(){
   
   
    
    for(i=0 ; i < danhsachPhim.length ; i++){
        if(danhsachPhim[i].image =="./image/dragon100.jpg"){
            let i =[]
            danhsachPhim.splice(i,1)
            i.push(danhsachPhim)
            JSON.stringify(i)
            localStorage.setItem("userChoice",i)
            location.reload()
        }
    }

    
}



