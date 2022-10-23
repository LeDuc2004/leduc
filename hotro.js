function taoId(){
    var id = '';
    id = Math.random().toString() + "_" + String(new Date().getTime());
    return id;
}
console.log(taoId())