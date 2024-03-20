function option(a,b,c,d,e,f){
    document.getElementById('line').style.transform="translateX("+a+"px)";
    document.getElementById('line').style.width=f+"px";
    document.getElementById(b).style.display="block";
    document.getElementById(c).style.display="none";
    d.style.color="black";
    document.getElementById(e).style.color="grey";

}
function nav(a,b,c){
    var op=["h","u","a","l"];
    

    for(let i=0;i<=op.length-1;i++){
        document.getElementById(op[i]).style.backgroundColor="white";
    }
    a.style.backgroundColor="rgba(0,0,250,0.1)";
    document.getElementById(b).style.display="block";
    document.getElementById(c).style.display="none"


}