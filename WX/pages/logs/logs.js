//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    flag: false
  },
  onLoad: function() {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  },
  clearOne: function(e) {
    this.setData({
      flag: true
    });
    var index = e.currentTarget.dataset.index;
    var temp = this.data.logs||[];
    temp.splice(index, 1);
    wx.setStorageSync('logs', temp);
    this.setData({
      logs: temp,
      flag: false
    });
  }
})