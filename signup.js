
function register(){
    var emailtext=document.getElementById("form").value;
    var password=document.getElementById("form1").value;
    
   
    
    if(emailtext!="" && password!=""){
    localStorage.setItem("emailid",form)
    localStorage.setItem("passwords",form1)
    window.location.href="thanks.html"
    }
    if(password==""){
       
       var p=document.getElementById('pt')
        p.innerText="Password can't be empty!"
        p.style.color="red"
    
    }  
}

$(function () {
  console.log('Script loaded!!!')

// Slick Carousel
$('.slider-wrapper').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  dots: true,
  speed: 300,
  autoScroll: true
});
});


function decrese(){
  var inc = document.getElementById("price").textContent;
  var cnumber = Number(inc);
  var realprice = cnumber-499;
  document.getElementById("price").textContent = realprice;
  document.getElementById("totalprice").textContent = realprice;
  document.getElementById("totalpriceadd").textContent = realprice;

  var a= document.getElementById("display").textContent;
  var b = Number(a);
  var i = 1;
  var c = b-1;
  
  document.getElementById("display").textContent = c;
}

function function1(){
  var inc = document.getElementById("price").textContent;
  var cnumber = Number(inc);
  var realprice = cnumber+499;
  document.getElementById("price").textContent = realprice;
  document.getElementById("totalprice").textContent = realprice;
  document.getElementById("totalpriceadd").textContent = realprice;

  var a= document.getElementById("display").textContent;
  var b = Number(a);
  var i = 1;
  var c = b+1;
  
  document.getElementById("display").textContent = c;
}


function logintohome(){
  var emailtext=document.getElementById("email").value;
  var password=document.getElementById("password").value;
  
 
  
  if(emailtext!="" && password!=""){
  localStorage.setItem("emailid",email)
  localStorage.setItem("passwords",password)
  window.location.href="index.html"
  }
  if(password==""){
     
     var p=document.getElementById('ok')
      p.innerText="Password is incorrect!"
      p.style.color="red"
  
  }  
}


