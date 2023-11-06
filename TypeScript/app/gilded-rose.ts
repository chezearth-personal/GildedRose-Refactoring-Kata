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
          // console.log('sellIn =', item.sellIn);
          // console.log('quality =', item.quality);
          if (item.sellIn > 10) {
            item.quality++;
          } else {
            // console.log('! > 10: sellIn =', item.sellIn);
            if (item.sellIn > 5) {
              // console.log('> 5: sellIn =', item.sellIn);
              item.quality+=2;
            } else {
              // console.log('! > 5: sellIn =', item.sellIn);
              item.quality = item.sellIn > 0 
                ? item.quality + 3
                : 0;
            }
          }
          // console.log('quality =', item.quality);
          item.quality = item.quality > 50 ? 50 : item.quality;
          item.sellIn--;
          return item;
        }
        if (item.name.toLowerCase() === 'aged brie') {
          item.quality += (item.quality < 50 ? 1 : 0);
          item.sellIn--;
          return item;
        }
        item.quality = item.quality > 1
          ? item.sellIn > 0 ? item.quality - 1 : item.quality - 2
          : item.quality = 0;
        item.sellIn--;
        return item;
      })
    return this.items;
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
