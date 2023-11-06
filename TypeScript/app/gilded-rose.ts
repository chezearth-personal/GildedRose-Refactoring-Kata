import {kill} from "process";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items
      .forEach(item => {
        if (!item || !item.name) { return; }  // make sure there is an item and it has a name
        if (item.name.substring(0, 8).toLowerCase() === 'sulfuras') {
          item.quality = 50;
          item.sellIn = 365;
          return item;
        }
        if (item.name.substring(0, 16).toLowerCase() === 'backstage passes') {
          return item.sellIn > 10
            ? this.degradeItem(item, 1)
            : item.sellIn > 5
              ? this.degradeItem(item, 2)
              : item.sellIn > 0
                ? this.degradeItem(item, 3)
                : this.killItem(item)
        }
        if (item.name.toLowerCase() === 'aged brie') {
          return this.degradeItem(item, 1)
        }
        return item.quality > 1
          ? item.sellIn > 0 ? this.degradeItem(item, -1) : this.degradeItem(item, -2)
          : this.killItem(item);        // item.quality = item.quality > 1
      })
    return this.items;
  }

  degradeItem(item: Item, rate: number) {
    item.quality = item.quality + rate;
    item.quality = item.quality > 50 ? 50 : item.quality < 0 ? 0 : item.quality;
    item.sellIn--;
    return item;
  }

  killItem(item: Item) {
    item.quality = 0;
    item.sellIn--;
    return item;
  }

  updateQualityOld() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items;
  }
}
