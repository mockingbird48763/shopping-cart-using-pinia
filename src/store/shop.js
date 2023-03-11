import { defineStore } from 'pinia'

export const useShopStore = defineStore('shop', {
  state: () => ({
    goods: [
      {
        name: '羊肉串',
        price: 20,
      },
      {
        name: '豬肉串',
        price: 15,
      },
      {
        name: '雞肉串',
        price: 10,
      },
    ],
    isAllSelect: false
  }),
  getters: {
    total () {
      // 注意 num 可能是 undefined
      return this.goods
        .filter(item => item.select)
        .reduce((total, item) => (total += (item.num  || 1) * item.price), 0)
    }
  },
  actions: {
    updateNum (index, num) {
      // 初始化 num
      // 這樣撰寫的好處是當 num 為 0 時，可以搭配頁面最低顯示 1
      this.goods[index].num = this.goods[index].num || 1
    
      // 進行數值操作
      this.goods[index].num += num
    },
    allSelectChange () {
      // 每次點擊全選，都需要同步單選狀態
      this.goods.forEach(item => {
        item.select = this.isAllSelect
      })
    },
    singleChange () {
      // 每次點擊單選，判斷所有商品是否全選中，更改全選狀態
      // 全選中返回 true，只要一個不選中返回 false
      this.isAllSelect = this.goods.every((item => item.select))
    }
  }
})