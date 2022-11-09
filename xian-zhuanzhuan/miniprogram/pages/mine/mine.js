// pages/mine/mine.js

const menuData = [
  [
    {
       
      title: '收货地址',
      tit: '',
      url: '',
      type: 'address',
    },
    // {
    //   title: '优惠券',
    //   tit: '',
    //   url: '',
    //   type: 'coupon',
    // },
    {
      title: '积分',
      tit: '',
      url: '',
      type: 'point',
    },
  ],
  [
    {
      title: '帮助中心',
      tit: '',
      url: '',
      type: 'help-center',
    },
    {
      title: '联系我们',
      tit: '',
      url: '',
      type: 'service',
      icon: 'service',
    },
  ],
];

const orderTagInfos = [
  {
    title: '收藏夹',
    iconName: 'wallet',
    orderNum: 0,
    tabType: 5,
    status: 1,
  },
  {
    title: '已购买',
    iconName: 'deliver',
    orderNum: 0,
    tabType: 10,
    status: 1,
  },
  {
    title: '已告别',
    iconName: 'package',
    orderNum: 0,
    tabType: 40,
    status: 1,
  }
];
const getDefaultData = () => ({
  showMakePhone: false,
  userInfo: {
    avatarUrl: '',
    nickName: '正在登录...',
    phoneNumber: '',
  },
  menuData,
  orderTagInfos,
  customerServiceInfo: {},
  currAuthStep: 1,
  showKefu: true,
  versionNo: '1.0',
});
Page({

  /**
   * 页面的初始数据
   */
  data: getDefaultData(),

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  getuserlogin(){
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res);
        this.setData({
          currAuthStep:2
        })
        wx.request({
          header: {
              "content-type":      "application/json"
          },
          method: "POST",
          url:"http://skymee.gnway.cc/login",
          data: {
            "cloudid":res.cloudID
          },
          success: res => {
            console.log(res)
              // var token = res.data.data
              // console.log(token);
              // wx.setStorageSync('token', token);
              // 设置完token之后获取首页数据
              // resolve()
          }
      })
      }
    })
  },
  gotoUserEditPage(){
    const { currAuthStep } = this.data;
    if (currAuthStep === 2) {
      wx.navigateTo({ url: '/pages/usercenter/person-info/index' });
    } else {
      this.fetUseriInfoHandle();
    }
  },
  submit(){
    console.log("hello");
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {

        console.log(res);
        wx.request({
          header: {
              "content-type": "application/json"
          },
          method: "POST",
          url:"https://47q15g2458.hsk.top/login",
          data: {
            "userName":"skyme",
            "password":"123456"
          },
          success: res => {
            console.log(res)
              // var token = res.data.data
              // console.log(token);
              // wx.setStorageSync('token', token);
              // 设置完token之后获取首页数据
              // resolve()
          }
      })
      }
    })
  },
})