
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






// let addToCartButtons = document.getElementsByClassName('add-button')
// let cartContainer = document.getElementsByTagName('tbody')[0]
// let quantityFields = document.getElementsByClassName('num')
// let delete_buttons = document.getElementsByClassName('uk-button-danger')

// // picking up all the Add-To-Cart buttons
//  for(let i = 0; i < addToCartButtons.length; i++){
//     addToCartButtons.addEventListener('click', addToCart)
//  }   

// // This function helps to add items to our cart
// function addToCart(event){

    
//     let itemContainer = document.createElement('tr')
//     let btn = event.target
//     let btnGrandParent = btn.parentElement.parentElement
//     let btnParent = btn.parentElement
//     let itemImage = btnGrandParent.children[0].src
//     let itemName = btnParent.children[0].innerText
//     let itemPrice = btnParent.children[1].innerText
    
    
//     itemContainer.innerHTML = `
//     <td><input class="uk-checkbox" type="checkbox"></td>
//     <td><img class="uk-preserve-width uk-border-circle" src=${itemImage} width="40" alt=""></td>
//     <td class="uk-table-link">
//         <h3 class = "item-name">${itemName}</h3>
//     </td>
//     <td class="uk-text-truncate item-price"><h3>${itemPrice}</h3></td>
//     <td><input type = 'number' class = 'num' value = '1'></td>
//     <td class="uk-text-truncate total-price"><h3>${itemPrice}</h3></td>
//     <td><button class="uk-button uk-button-danger" type="button">Remove</button></td>
// `

//     cartContainer.append(itemContainer)




//     // Accessing individual quantity fields
//     for(let i = 0; i < quantityFields.length; i++){
//         quantityFields[i].value = 1
//         quantityFields[i].addEventListener('change', totalCost)
                
//     }

//     // Accessing individual quantity fields
//     for(let i = 0; i < delete_buttons.length; i++){
//         delete_buttons[i].addEventListener('click', removeItem)
//     }

//     grandTotal()

   
// }



// // This function helps to multiply the quantity and the price
// function totalCost(event){
//     let quantity = event.target
//     quantity_parent = quantity.parentElement.parentElement
//     price_field = quantity_parent.getElementsByClassName('item-price')[0]
//     total_field = quantity_parent.getElementsByClassName('total-price')[0]
//     price_field_content = price_field.innerText.replace('$', '')
//     total_field.children[0].innerText = '$' +  quantity.value * price_field_content
//     grandTotal()
//     if(isNaN(quantity.value)|| quantity.value <= 0){
//         quantity.value = 1
//     }

    
    
// }

// // This function helps to add up the total of the items
// function grandTotal(){
//     let total = 0
//     let grand_total = document.getElementsByClassName('grand-total')[0]
//     all_total_fields = document.getElementsByClassName('total-price')
//     for(let i = 0; i < all_total_fields.length; i++){
//         all_prices = Number(all_total_fields[i].innerText.replace('$', ''))
//         total+=all_prices
//     }
//     grand_total.children[0].innerText = "$"+total
//     grand_total.children[0].style.fontWeight = 'bold'
//     console.log(total)
// }


// function removeItem(event){
//     del_btn = event.target
//     del_btn_parent = del_btn.parentElement.parentElement
//     del_btn_parent.remove()
//     console.log(del_btn)
//     grandTotal()
    
// }



// // var shoppingCart = (function() {
// //     // Private methods and propeties
// //     cart = [];
    
// //     // Constructor
// //     function Item(name, price, count) {
// //       this.name = name;
// //       this.price = price;
// //       this.count = count;
// //     }
    
// //     // Save cart
// //     function saveCart() {
// //       localStorage.setItem('shoppingCart', JSON.stringify(cart));
// //     }
    
// //       // Load cart
// //     function loadCart() {
// //       cart = JSON.parse(localStorage.getItem('shoppingCart'));
// //     }
// //     if (localStorage.getItem("shoppingCart") != null) {
// //       loadCart();
// //     }
    
// //     // Public methods and propeties
// //     var obj = {};
    
// //     // Add to cart
// //     obj.addItemToCart = function(name, price, count) {
// //       for(var item in cart) {
// //         if(cart[item].name === name) {
// //           cart[item].count ++;
// //           saveCart();
// //           return;
// //         }
// //       }
// //       var item = new Item(name, price, count);
// //       cart.push(item);
// //       saveCart();
// //     }
// //     // Set count from item
// //     obj.setCountForItem = function(name, count) {
// //       for(var i in cart) {
// //         if (cart[i].name === name) {
// //           cart[i].count = count;
// //           break;
// //         }
// //       }
// //     };
// //     // Remove item from cart
// //     obj.removeItemFromCart = function(name) {
// //         for(var item in cart) {
// //           if(cart[item].name === name) {
// //             cart[item].count --;
// //             if(cart[item].count === 0) {
// //               cart.splice(item, 1);
// //             }
// //             break;
// //           }
// //       }
// //       saveCart();
// //     }
  
// //     // Remove all items from cart
// //     obj.removeItemFromCartAll = function(name) {
// //       for(var item in cart) {
// //         if(cart[item].name === name) {
// //           cart.splice(item, 1);
// //           break;
// //         }
// //       }
// //       saveCart();
// //     }
  
// //     // Clear cart
// //     obj.clearCart = function() {
// //       cart = [];
// //       saveCart();
// //     }
  
// //     // Count cart 
// //     obj.totalCount = function() {
// //       var totalCount = 0;
// //       for(var item in cart) {
// //         totalCount += cart[item].count;
// //       }
// //       return totalCount;
// //     }
  
// //     // Total cart
// //     obj.totalCart = function() {
// //       var totalCart = 0;
// //       for(var item in cart) {
// //         totalCart += cart[item].price * cart[item].count;
// //       }
// //       return Number(totalCart.toFixed(2));
// //     }
  
// //     // List cart
// //     obj.listCart = function() {
// //       var cartCopy = [];
// //       for(i in cart) {
// //         item = cart[i];
// //         itemCopy = {};
// //         for(p in item) {
// //           itemCopy[p] = item[p];
  
// //         }
// //         itemCopy.total = Number(item.price * item.count).toFixed(2);
// //         cartCopy.push(itemCopy)
// //       }
// //       return cartCopy;
// //     }
  
// //     return obj;
// //   })();
  
// //   // Add item
// //   $('.add-to-cart').click(function(event) {
// //     event.preventDefault();
// //     var name = $(this).data('name');
// //     var price = Number($(this).data('price'));
// //     shoppingCart.addItemToCart(name, price, 1);
// //     displayCart();
// //   });
  
// //   // Clear items
// //   $('.clear-cart').click(function() {
// //     shoppingCart.clearCart();
// //     displayCart();
// //   });
  
  
// //   function displayCart() {
// //     var cartArray = shoppingCart.listCart();
// //     var output = "";
// //     for(var i in cartArray) {
// //       output += "<tr>"
// //         + "<td>" + cartArray[i].name + "</td>" 
// //         + "<td>(" + cartArray[i].price + ")</td>"
// //         + "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" + cartArray[i].name + ">-</button>"
// //         + "<input type='number' class='item-count form-control' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
// //         + "<button class='plus-item btn btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
// //         + "<td><button class='delete-item btn btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
// //         + " = " 
// //         + "<td>" + cartArray[i].total + "</td>" 
// //         +  "</tr>";
// //     }
// //     $('.show-cart').html(output);
// //     $('.total-cart').html(shoppingCart.totalCart());
// //     $('.total-count').html(shoppingCart.totalCount());
// //   }
  
// //   // Delete item button
  
// //   $('.show-cart').on("click", ".delete-item", function(event) {
// //     var name = $(this).data('name')
// //     shoppingCart.removeItemFromCartAll(name);
// //     displayCart();
// //   })
  
  
// //   // -1
// //   $('.show-cart').on("click", ".minus-item", function(event) {
// //     var name = $(this).data('name')
// //     shoppingCart.removeItemFromCart(name);
// //     displayCart();
// //   })
// //   // +1
// //   $('.show-cart').on("click", ".plus-item", function(event) {
// //     var name = $(this).data('name')
// //     shoppingCart.addItemToCart(name);
// //     displayCart();
// //   })
  
// //   // Item count input
// //   $('.show-cart').on("change", ".item-count", function(event) {
// //      var name = $(this).data('name');
// //      var count = Number($(this).val());
// //     shoppingCart.setCountForItem(name, count);
// //     displayCart();
// //   });
  
// //   displayCart();
  
