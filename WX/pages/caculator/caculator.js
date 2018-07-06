// pages/caculator/caculator.js
const app = getApp();
var webhost = app.globalData.webhost;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    onLoading: false,
    param: {
      pur_perprice: '', //采购单价
      sale_perprice: '', //销售单价
      pre_fund_month: 0, //预付资金占用月数
      re_fund_month: 1, //应收资金占用月数
      freight_cost: '', //运费
      cut_cost: '', //分切费
      ba1_month: [0, 3, 6], //开银承月数
      selectIndex: 2, //下拉框默认选择第三个
      ba2_month: 6, //收银承月数
      ba1_rate: 0, //开银承银行费率
      ba1_limit_rate: 0.004, //开银承额度占用费率
      fund_rate: 0.0045, //资金月占用利率
      ba_discount_rate: 0.004, //银承月占用利率
      fund_rate_from: 0.0025, //资金月来源利率
      indirect_cost: 30, //间接费用
    },
    per_profit: '' //利润
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    // wx.request({
    //   url: webhost +'/cdweb/mobile/branch/getParamInfo',
    //   data:{

    //   },
    //   header:{
    //     'content-type': 'application/json'
    //   }
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 采购单价
   */
  bindPur_perprice: function(e) {
    this.setData({
      'param.pur_perprice': e.detail.value
    })
  },
  bindSale_perprice: function(e) {
    this.setData({
      'param.sale_perprice': e.detail.value
    })
  },
  bindPre_fund_month: function(e) {
    this.setData({
      'param.pre_fund_month': e.detail.value
    })
  },
  bindRe_fund_month: function(e) {
    this.setData({
      'param.re_fund_mont': e.detail.value
    })
  },
  bindFreight_cost: function(e) {
    this.setData({
      'param.freight_cost': e.detail.value
    })
  },
  bindCut_cost: function(e) {
    this.setData({
      'param.cut_cost': e.detail.value
    })
  },
  bindBa1_month: function(e) {
    this.setData({
      'param.ba1_month': e.detail.value
    })
  },
  bindBa2_month: function(e) {
    this.setData({
      'param.ba2_month': e.detail.value
    })
  },
  bindBa1_rate: function(e) {
    this.setData({
      'param.ba1_rate': e.detail.value
    })
  },
  bindBa1_limit_rate: function(e) {
    this.setData({
      'param.ba1_limit': e.detail.value
    })
  },
  bindFund_rate: function(e) {
    this.setData({
      'param.fund_rate': e.detail.value
    })
  },
  bindBa_discount_rate: function(e) {
    this.setData({
      'param.ba_discount_rate': e.detail.value
    })
  },
  bindSelectBa1_month: function(e) {
    this.setData({
      'param.selectIndex': e.detail.value
    })
  },
  result: function(e) {
    if (this.checkIsNull()) {
      wx.showNavigationBarLoading
      let str = JSON.stringify(this.data.param);
      wx.navigateTo({
        url: '../result/result?jsonStr=' + str,
      })
    }
  },
  checkIsNull: function() {
    var content = '请填写';
    let flag = false;
    if (this.data.param.pur_perprice === '') {
      content = content + '采购单价，'
      flag = true;
    }
    if (this.data.param.sale_perprice === '') {
      content = content + '销售单价，'
      flag = true;
    }
    if (this.data.param.pre_fund_month === '') {
      content = content + '预付资金占用月数，'
      flag = true;
    }
    if (this.data.param.re_fund_month == '') {
      content = content + '应收资金占用月数，'
      flag = true;
    }
    if (this.data.param.indirect_cost == '') {
      content = content + '间接费用.'
      flag = true;
    }
    if (flag) {
      wx.showModal({
        title: '提示',
        content: content.replace(/，$/, "."),
        confirmColor: '#a53f35',
        showCancel: false
      })
      return false;
    } else {
      return true;
    }
  }
})