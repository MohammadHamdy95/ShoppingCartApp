import {Component, OnInit} from '@angular/core';
import {DataStore} from "aws-amplify";
import {Inventory, Item, ItemStack, Itemtype} from "../../models";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addInventory(): void {
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
      console.log("item saved")
    })
  }
  checkItems(): void {
    DataStore.query(Inventory).then(item=>{
      console.log(item)
    })
  }

}
