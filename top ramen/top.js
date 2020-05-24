/*window.onload = function(){

var xml = new XMLHttpRequest();

xml.onreadystatechange = function(){
    if(xml.readyState == 4 && xml.status == 200){
        console.log(JSON.parse(xml.response));
    }
};

xml.open("GET","https://api.jsonbin.io/b/5ea441ca98b3d53752344cc5",true);
xml.send();


//console.log(xml);
}
*/
window.onload = function(){

var http = new XMLHttpRequest();
http.onreadystatechange = function(){
    if(http.readyState==4 && http.status ==200){
        let food = JSON.parse(http.response);
    }
};
http.open("GET","https://api.jsonbin.io/b/5ea441ca98b3d53752344cc5",true);
http.send();
console.log("https://api.jsonbin.io/b/5ea441ca98b3d53752344cc5");

};