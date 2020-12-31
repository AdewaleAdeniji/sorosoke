function get(e){
    return document.getElementById(e);
}
function value(e){
    return get(e).value;
}
function say(e){
  return  Swal.fire({
        html:e,
        showConfirmButton:false,
        showCancelButton:false,
        showCloseButton:true,
        allowOutsideClick:true,
    
    })
}
function load(e){
    
        KTApp.blockPage({
         overlayColor: '#8432D4',
         state: 'primary',
         message: e,    
        });   
}
function pull(requrl,body){
    if(window.location.origin=='http://localhost'){
           var prefix ='http://localhost/backend/sorosoke/'
  
       }
       else {
          //var prefix ='../backend/budgetapp/'
         var prefix = "https://begetmusic.com/sorosoke/";
     }
    // console.log(prefix+requrl);
   return  fetch(prefix+requrl,body)
           
  
  
}
function pref(){
    if(window.location.origin=='http://localhost'){
         var prefy ='http://localhost/backend/sorosoke/'

     }
     else {
        //var prefix ='../backend/budgetapp/'
       var prefy = "https://begetmusic.com/sorosoke/";
   }
   return prefy;
}
function emailval(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function closeload(){
    KTApp.unblockPage();
}
function setitem(name,value){
    return localStorage.setItem(name,value);
 }
 function getitem(name){
    if(localStorage.getItem(name)==undefined||localStorage.getItem(name)==null||localStorage.getItem(name)==""){
        return false;
    }
    else {
        return localStorage.getItem(name);
    }
 }