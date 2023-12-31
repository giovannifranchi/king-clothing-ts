import { type } from "os";

export enum CART_ACTION_TYPES {
    TOGGLE_IS_OPEN = 'TOGGLE_IS_OPEN',
    ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART',
    REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART',
    CLEAR_ITEMS = 'CLEAR_ITEMS',
    UPDATE_TOTAL_AMOUNT = 'UPDATE_TOTAL_AMOUNT'
}


export type ItemsMap = {
    [key:number]: Item
}

export type Item = {
    info: ItemInfo;
    itemAmount:number
}

export type ItemInfo = {
    id:number;
    name: string;
    imageUrl: string;
    price: number;
}

