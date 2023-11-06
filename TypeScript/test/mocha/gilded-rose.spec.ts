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
      console.log(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(0);
      expect(gildedRose.items[0].quality).to.equal(3);
    });
    it ('handle the second update', () => {
      console.log(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(-1);
      expect(gildedRose.items[0].quality).to.equal(1);
    });
    it ('handle the third update', () => {
      console.log(items[0]);
      expect(gildedRose.items[0].name).to.equal('foo');
      expect(gildedRose.items[0].sellIn).to.equal(-2);
      expect(gildedRose.items[0].quality).to.equal(0);
    });
    it ('handle the fourth update', () => {
      console.log(items[0]);
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
      console.log(items[0]);
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(1);
      expect(items[0].quality).to.equal(49);
    });
    it ('handle the second update', () => {
      console.log(items[0]);
      expect(items[0].name).to.equal('Aged Brie');
      expect(items[0].sellIn).to.equal(0);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the third uopdate', () => {
      console.log(items[0]);
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
      console.log(items[0]);
      expect(items[0].name).to.equal('Sulfuras');
      expect(items[0].sellIn).to.equal(365);
      expect(items[0].quality).to.equal(50);
    });
    it ('handle the second update', () => {
      console.log(items[0]);
      expect(items[0].name).to.equal('Sulfuras');
      expect(items[0].sellIn).to.equal(365);
      expect(items[0].quality).to.equal(50);
    });
  });
  describe('should handle `Sulfuras`', () => {
    const gildedRose = new GildedRose([new Item('backstage passes', 11, 42)]);
    let items;
    beforeEach(function() {
      items = gildedRose.updateQuality();
      return items;
    })
    it ('handle the first update', () => {
      console.log(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(10);
      expect(items[0].quality).to.equal(43);
    });
    it ('handle the second update', () => {
      console.log(items[0]);
      expect(items[0].name).to.equal('backstage passes');
      expect(items[0].sellIn).to.equal(9);
      expect(items[0].quality).to.equal(45);
    });
  });
});
