Component({
  externalClasses: ['title-class', 'icon-class', 'number-class'],
  options: {
    multipleSlots: true,
  },
  properties: {
    orderTagInfos: {
      type: Array,
      value: [],
    },
    title: {
      type: String,
      value: '与我有关的故事',
    },
    desc: {
      type: String,
      value: '延续的所有故事',
    },
    isTop: {
      type: Boolean,
      value: true,
    },
    classPrefix: {
      type: String,
      value: 'wr',
    },
  },
  methods: {
    onClickItem(e) {
      this.triggerEvent('onClickItem', e.currentTarget.dataset.item);
    },

    onClickTop() {
      this.triggerEvent('onClickTop', {});
    },
    jumpAllOrder() {
      wx.navigateTo({ url: '/pages/order/order-list/index' });
    }
  },
});
