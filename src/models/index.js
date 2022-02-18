// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Itemtype = {
  "FRUIT": "FRUIT",
  "VEGITABLE": "VEGITABLE"
};

const { Cart, Inventory, ItemStack, Item } = initSchema(schema);

export {
  Cart,
  Inventory,
  Itemtype,
  ItemStack,
  Item
};