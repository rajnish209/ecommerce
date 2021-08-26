

    const detergent_json = JSON.stringify(detergent);

localStorage.setItem("myDetergents", detergent_json);

  let myDetergents = localStorage.getItem("myDetergents")

 myDetergents = JSON.parse(myDetergents);
//  //console.log(myDetergents)

 function showproducts(){

     let data_div = document.getElementById("data");

     myDetergents.forEach(function (product){
       // console.log(Products)
       let div = document.createElement("div");

       
       let p_name = document.createElement("p");
       p_name.innerText = product.name;
       let p_price = document.createElement("p");
       p_price.innerText = product.price;
       let image = document.createElement("img");
       image.src = product.image;

       let btn = document.createElement("button");
       btn.innerText = "Add to cart"

       btn.onclick = function(){
           addToCart(product);
       }

       div.append(image ,p_name ,p_price ,btn);

       data_div.append(div);
     });
 }
showproducts();
if(localStorage.getItem("cart") === null){
localStorage.setItem("cart" ,JSON.stringify([]))
}
function addToCart(p){
    //console.log("p:" ,p)
    let cart_data = JSON.parse(localStorage.getItem("cart"));
    cart_data.push(p);

    localStorage.setItem("cart" ,JSON.stringify(cart_data));
}