<script setup>
import { useShopStore } from '@/store/shop'
const shopStore = useShopStore()
const updateNum = (index, num) => {
  // view 僅作為數據的展示和事件的分發，不處理業務邏輯
  // 邏輯在 pinia 處理
  shopStore.updateNum(index, num)
}

const allSelectChange = () => {
  shopStore.allSelectChange()
}

const singleChange = () => {
  shopStore.singleChange()
}
</script>

<template>
  <div>我是購物車</div>
  <div>全選 <input v-model="shopStore.isAllSelect" type="checkbox" @change="allSelectChange"></div>
  <div>
    <div v-for="(item, index) in shopStore.goods" :key="index">
      <input @change="singleChange" v-model="item.select" type="checkbox">
      商品名稱：{{ item.name }} ---
      商品價格：{{ item.price }}
      <button @click="updateNum(index, 1)">+</button>
      {{ item.num || 1 }}
      <button @click="updateNum(index,-1)">-</button>
      小計 {{ item.price * (item.num || 1) }}
    </div>
  </div>
  <div>
    總價：{{ shopStore.total }}
  </div>
</template>