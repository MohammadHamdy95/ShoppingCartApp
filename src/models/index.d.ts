import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum Itemtype {
  FRUIT = "FRUIT",
  VEGITABLE = "VEGITABLE"
}

export declare class ItemStack {
  readonly Item: Item;
  readonly quantity?: number;
  constructor(init: ModelInit<ItemStack>);
}

export declare class Item {
  readonly name: string;
  readonly price: number;
  readonly itemType: Itemtype | keyof typeof Itemtype;
  readonly itemNumber: number;
  constructor(init: ModelInit<Item>);
}

type CartMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type InventoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Cart {
  readonly id: string;
  readonly Items: ItemStack;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cart, CartMetaData>);
  static copyOf(source: Cart, mutator: (draft: MutableModel<Cart, CartMetaData>) => MutableModel<Cart, CartMetaData> | void): Cart;
}

export declare class Inventory {
  readonly id: string;
  readonly Items: ItemStack;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Inventory, InventoryMetaData>);
  static copyOf(source: Inventory, mutator: (draft: MutableModel<Inventory, InventoryMetaData>) => MutableModel<Inventory, InventoryMetaData> | void): Inventory;
}