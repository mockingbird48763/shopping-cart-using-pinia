// 插件方法，有幾個模塊就執行幾次
export function presistedstate(context) {
  // 有幾個模塊就執行幾次
  console.log('初始化的時候執行', context.store.$id)
  // 根據模塊名，拿到對應的 localStorage
  
  // 可能為空
  const currentState = JSON.parse(
    localStorage.getItem(context.store.$id) || "{}"
  )

  // 把我們的數據放在 pinia 對應的模塊裡面
  context.store.$patch(currentState)

  /**
   * 每次 state 發生變化的時候
   * 都要把它保存在 locaStorage 裡面
   * 
   * 兩個參數
   * 第一個是當前修改的 store 的上下文
   * 第二個是當前修改的狀態
   */
  context.store.$subscribe((_stroem, state) => {
    console.log(_stroem, state)
    // 保存到 localStorage 裡面
    localStorage.setItem(_stroem.storeId, JSON.stringify(state))
  }, {
    // 組件卸載依賴還在
    detached: true
  })
}