import {kill} from "process";
import {G} from "vitest/dist/types-0373403c";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name: string, sellIn: number, quality: number) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;
  /**
   * Types-List: insert any objects with string names and define rates to have them follow the rules laid out
   * in updateQuality 
   */
  type1 = [{ name: 'sulfuras', rate: 1 }];
  type2 = [{ name: 'backstage passes', rate: 1 }];
  type3 = [{ name: 'aged brie', rate: 1 }];
  typedefault = [{ name: 'conjured', rate: 2 }];

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items
      .forEach(item => {
        const nm = item.name.toLowerCase();
        if (!item || !item.name) { return; }                            // make sure there is an item and it has a name
        if (this.type1.map(e => e.name).includes(nm.substring(0, 8))) { // The legendary items is set to max
          item.quality = 50;
          item.sellIn = 365;
          return item;
        }
        if (this.type2.map(e => e.name).includes(nm.substring(0, 16))) {
          return item.sellIn > 10
            ? this.degradeItem(item, this.type2.filter(e => e.name === nm)[0].rate)
            : item.sellIn > 5
              ? this.degradeItem(item, this.type2.filter(e => e.name === nm)[0].rate  * 2)
              : item.sellIn > 0
                ? this.degradeItem(item, this.type2.filter(e => e.name === nm)[0].rate * 3)
                : this.expireItem(item)
        }
        if (this.type3.map(e => e.name).includes(nm)) {
          return this.degradeItem(item, this.type3.filter(e => e.name === nm)[0].rate);
        }
        const rate:number = this.typedefault.filter(e => e.name === nm)[0] ? this.typedefault.filter(e => e.name === nm)[0].rate : 1
        return this.defaultDegrade(item, -1 * rate);
      });
    return this.items;
  }

  defaultDegrade(item: Item, rate: number) {
    return item.quality > 1
      ? item.sellIn > 0 ? this.degradeItem(item, rate) : this.degradeItem(item, rate * 2)
      : this.expireItem(item);
  }

  degradeItem(item: Item, rate: number) {
    item.quality = item.quality + rate;
    item.quality = item.quality > 50 ? 50 : item.quality < 0 ? 0 : item.quality;
    item.sellIn--;
    return item;
  }

  expireItem(item: Item) {
    item.quality = 0;
    item.sellIn--;
    return item;
  }
}

