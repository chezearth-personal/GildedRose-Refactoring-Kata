import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';
import exp from 'constants';

describe('Gilded Rose', () => {
  describe('should foo', () => {
    const gildedRose = new GildedRose([new Item('foo', 1, 4)]);
    let items;
    beforeEach(function() {
      items = gildedRose.updateQuality();
      return items;
    })
    it ('handle the first update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(0);
      expect(gildedRose.items[0].quality).to.equal(3);
    });
    it ('handle the second update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(-1);
      expect(gildedRose.items[0].quality).to.equal(1);
    });
    it ('handle the third update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(-2);
      expect(gildedRose.items[0].quality).to.equal(0);
    });
    it ('handle the fourth update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(-3);
      expect(gildedRose.items[0].quality).to.equal(0);
    });
  });
  describe('should handle `Aged Brie`', () => {
    const gildedRose = new GildedRose([new Item('Aged Brie', 2, 48)]);
    let items;
    beforeEach(function() {
      items = gildedRose.updateQuality();
      return items;
    })
    it ('handle the first update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(1);
      expect(items[0].quality).to.equal(49);
    });
    it ('handle the second update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the third uopdate', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(50);
    });
  });
  describe('should handle `Sulfuras`', () => {
    const gildedRose = new GildedRose([new Item('Sulfuras', 0, 50)]);
    let items;
    beforeEach(function() {
      items = gildedRose.updateQuality();
      return items;
    })
    it ('handle the first update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('Sulfuras');
      expect(items[0].sellIn).to.equal(365);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the second update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('Sulfuras');
      expect(items[0].sellIn).to.equal(365);
      expect(items[0].quality).to.equal(50);
    });
  });
  describe('should handle `Backstage passes`', () => {
    const gildedRose = new GildedRose([new Item('backstage passes', 11, 32)]);
    let items;
    beforeEach(function() {
      items = gildedRose.updateQuality();
      return items;
    })
    it ('handle the first update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(10);
      expect(items[0].quality).to.equal(33);
    });
    it ('handle the second update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(35);
    });
    it ('handle the third update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(8);
      expect(items[0].quality).to.equal(37);
    });
    it ('handle the fourth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(7);
      expect(items[0].quality).to.equal(39);
    });
    it ('handle the fifth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(6);
      expect(items[0].quality).to.equal(41);
    });
    it ('handle the sixth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(5);
      expect(items[0].quality).to.equal(43);
    });
    it ('handle the seventh update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(4);
      expect(items[0].quality).to.equal(46);
    });
    it ('handle the eighth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(3);
      expect(items[0].quality).to.equal(49);
    });
    it ('handle the ninth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(2);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the ninth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(1);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the ninth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the ninth update', () => {
      logNewItem(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(-1);
      expect(items[0].quality).to.equal(0);
    });
  });
  describe('should Conjured', () => {
    const gildedRose = new GildedRose([new Item('conjured', 1, 7)]);
    let items;
    beforeEach(function() {
      items = gildedRose.updateQuality();
      return items;
    })
    it ('handle the first update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('conjured');
      expect(gildedRose.items[0].sellIn).to.equal(0);
      expect(gildedRose.items[0].quality).to.equal(5);
    });
    it ('handle the second update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('conjured');
      expect(gildedRose.items[0].sellIn).to.equal(-1);
      expect(gildedRose.items[0].quality).to.equal(1);
    });
    it ('handle the third update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('conjured');
      expect(gildedRose.items[0].sellIn).to.equal(-2);
      expect(gildedRose.items[0].quality).to.equal(0);
    });
    it ('handle the fourth update', () => {
      logNewItem(items[0]);
      expect(gildedRose.items[0].name).to.equal('conjured');
      expect(gildedRose.items[0].sellIn).to.equal(-3);
      expect(gildedRose.items[0].quality).to.equal(0);
    });
  });
});

function logNewItem(item) {
  console.log('      becomes:', item);
}
