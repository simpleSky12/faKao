// components/catalog/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: Object
  },

  observers: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nowText:"请选择",
    boultAnimation:{}, //右边箭头动画
    height: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 下拉列表是否显示
    selectToggle (e) {
      let animation = wx.createAnimation({
        timingFunction:"ease"
      })
      this.animation = animation

      if (this.data.selected) {
        animation.rotate(0).step();
      }else{
        animation.rotate(90).step();
      }

      this.setData({
        selected: !this.data.selected,
        boultAnimation:animation.export(),
      })
      console.log(this.data.selected)
    },

    onGotoLearn (e) {
      console.log(e)
      const id = Math.floor(e.currentTarget.dataset.lessonId/100)
      const url = e.currentTarget.dataset.url
      const title = e.currentTarget.dataset.title
      wx.redirectTo({
        url: `/pages/learn/learn?id=${id}&url=${url}&title=${title}`
      })
    }
  },
})
