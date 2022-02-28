import {Component, OnInit} from '@angular/core';
import {DataStore} from "aws-amplify";
import {Cart, Inventory, Item, ItemStack, Itemtype} from "../../../models";
import * as inventoryFunctions from './InventoryFunctions';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
  createCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "apple",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 1
            })
          })
        }
      )
    ).then(item=>{
      console.log()
    })
  }

  addAppleToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "apple",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 1
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 apple was added to cart")
    })
  }

  addBellPeppersToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "bellpepper",
              price: 100,
              itemType: Itemtype.VEGITABLE,
              itemNumber: 2
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Bell Pepper was added to cart")
    })
  }

  addCarrotToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "carrot",
              price: 100,
              itemType: Itemtype.VEGITABLE,
              itemNumber: 3
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Carrot was added to cart")
    })
  }

  addCherriesToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "cherry",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 4
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 LB of cherries were added to cart")
    })
  }

  addCucumberToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "babycarrot",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 5
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Cucumber added to cart")
    })
  }

  addEggplantToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "eggplant",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 16
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Eggplant was added to cart")
    })
  }

  addGrapesToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "Grapes",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 7
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 LB of Grapes were added to cart")
    })
  }

  addKiwiToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "kiwi",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 8
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Kiwi was added to cart")
    })
  }

  addMangoToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "mango",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 9
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Mango was added to cart")
    })
  }

  addOrangesToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "oranges",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 10
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Orange was added to cart")
    })
  }

  addPotatoToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "pineapple",
              price: 100,
              itemType: Itemtype.VEGITABLE,
              itemNumber: 11
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Potato was added to cart")
    })
  }

  addTomatoToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "tomato",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 12
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Tomato was added to cart")
    })
  }

  addWatermelonToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "watermelon",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 13
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Watermelon was added to cart")
    })
  }

  addZucchiniToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "zucchini",
              price: 100,
              itemType: Itemtype.VEGITABLE,
              itemNumber: 14
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Zucchini was added to cart")
    })
  }

  addPineappleToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "pineapple",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 15
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Grapefruit was added to cart")
    })
  }



  addPeachToCart(): void {
    DataStore.save(
      new Cart({
          Items: new ItemStack({
            quantity: 1,
            Item: new Item({
              name: "peach",
              price: 100,
              itemType: Itemtype.FRUIT,
              itemNumber: 17
            })
          })
        }
      )
    ).then(item=>{
      console.log("1 Peach was added to cart")
    })
  }


  // printCart(): void {
  //   for (var i=0, i>=Cart.length)
  // }




  addAppleToInventory(): void {
    // inventoryFunctions.addToCart(item)
    DataStore.save(
      new Inventory({
        Items: new ItemStack({
          quantity: 100,
          Item: new Item({
            name: "apple",
            price: 100,
            itemType: Itemtype.FRUIT,
            itemNumber: 1
          })
        })
        }
      )
    ).then(item=>{
      console.log("apple was added to inventory")
    })
  }

  addPearToInventory(): void {
    // inventoryFunctions.addToCart(item)
    DataStore.save(
      new Inventory({
          Items: new ItemStack({
            quantity: 100,
            Item: new Item({
              name: "Pear",
              price: 200,
              itemType: Itemtype.FRUIT,
              itemNumber: 2
            })
          })
        }
      )
    ).then(item=>{
      console.log("apple was added to cart")
    })
  }
  checkItems(): void {
    DataStore.query(Inventory).then(item=>{
      console.log(item)

    })
  }

}
// updateCartTotal();
//
// /* button event listeners */
// document.getElementById("emptycart").addEventListener("click", emptyCart);
// var btns = document.getElementsByClassName('addtocart');
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener('click', function() {addToCart(this);});
// }
//
// /* ADD TO CART */
//
// function addToCart(elem) {
//   //init
//   var sibs = [];
//   var getprice;
//   var getproductName;
//   var cart = [];
//   var stringCart;
//   //cycles siblings for product info near the add button
//   while(elem = elem.previousSibling) {
//     if (elem.nodeType === 3) continue; // text node
//     if(elem.className == "price"){
//       getprice = elem.innerText;
//     }
//     if (elem.className == "productname") {
//       getproductName = elem.innerText;
//     }
//     sibs.push(elem);
//   }
//   //create product object
//   var product = {
//     productname : getproductName,
//     price : getprice
//   };
//   //convert product data to JSON for storage
//   var stringProduct = JSON.stringify(product);
//   /*send product data to session storage */
//
//   if(!sessionStorage.getItem('cart')){
//     //append product JSON object to cart array
//     cart.push(stringProduct);
//     //cart to JSON
//     stringCart = JSON.stringify(cart);
//     //create session storage cart item
//     sessionStorage.setItem('cart', stringCart);
//     addedToCart(getproductName);
//     updateCartTotal();
//   }
//   else {
//     //get existing cart data from storage and convert back into array
//     cart = JSON.parse(sessionStorage.getItem('cart'));
//     //append new product JSON object
//     cart.push(stringProduct);
//     //cart back to JSON
//     stringCart = JSON.stringify(cart);
//     //overwrite cart data in sessionstorage
//     sessionStorage.setItem('cart', stringCart);
//     addedToCart(getproductName);
//     updateCartTotal();
//   }
// }
// /* Calculate Cart Total */
// function updateCartTotal(){
//   //init
//   var total = 0;
//   var price = 0;
//   var items = 0;
//   var productname = "";
//   var carttable = "";
//   if(sessionStorage.getItem('cart')) {
//     //get cart data & parse to array
//     var cart = JSON.parse(sessionStorage.getItem('cart'));
//     //get no of items in cart
//     items = cart.length;
//     //loop over cart array
//     for (var i = 0; i < items; i++){
//       //convert each JSON product in array back into object
//       var x = JSON.parse(cart[i]);
//       //get property value of price
//       price = parseFloat(x.price.split('$')[1]);
//       productname = x.productname;
//       //add price to total
//       carttable += "<tr><td>" + productname + "</td><td>$" + price.toFixed(2) + "</td></tr>";
//       total += price;
//     }
//
//   }
//   //update total on website HTML
//   document.getElementById("total").innerHTML = total.toFixed(2);
//   //insert saved products to cart table
//   document.getElementById("carttable").innerHTML = carttable;
//   //update items in cart on website HTML
//   document.getElementById("itemsquantity").innerHTML = items;
// }
// //user feedback on successful add
// function addedToCart(pname) {
//   var message = pname + " was added to the cart";
//   var alerts = document.getElementById("alerts");
//   alerts.innerHTML = message;
//   if(!alerts.classList.contains("message")){
//     alerts.classList.add("message");
//   }
// }
// /* User Manually empty cart */
// function emptyCart() {
//   //remove cart session storage object & refresh cart totals
//   if(sessionStorage.getItem('cart')){
//     sessionStorage.removeItem('cart');
//     updateCartTotal();
//     //clear message and remove class style
//     var alerts = document.getElementById("alerts");
//     alerts.innerHTML = "";
//     if(alerts.classList.contains("message")){
//       alerts.classList.remove("message");
//     }
//   }
// }
