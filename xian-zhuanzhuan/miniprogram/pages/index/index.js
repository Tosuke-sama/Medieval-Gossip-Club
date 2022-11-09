// index.js
// const app = getApp()
const utils = require("../../utils/util.js")
Page({
  data: {
    date:0,
  },
onLoad(){
  this.setData({
    date:utils.formatDate(new Date()) 

  })
}


});