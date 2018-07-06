// pages/caculator/caculator.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false,
    show6: false,
    show7: false,
    show8: false,
    show9: false,
    param: {},
    fund_cost: '',
    ba2_discount_cost: '',
    ba1_save_interest: '',
    finance_cost: '',
    manage_cost: '',
    sale_tax: '',
    other_tax: '',
    per_profit1: '',
    per_profit_rate: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let str = JSON.parse(options.jsonStr);
    this.setData({
      param: str
    })
    this.initPage();
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

  tapshow: function(e) {
    var show = e.currentTarget.dataset.show;
    var flag = '';
    switch (show) {
      case 'show1':
        flag = this.data.show1;
        if (flag == true) {
          this.setData({
            show1: false
          })
        } else {
          this.setData({
            show1: true
          })
        }
        break;
      case 'show2':
        flag = this.data.show2;
        if (flag == true) {
          this.setData({
            show2: false
          })
        } else {
          this.setData({
            show2: true
          })
        }
        break;
      case 'show3':
        flag = this.data.show3;
        if (flag == true) {
          this.setData({
            show3: false
          })
        } else {
          this.setData({
            show3: true
          })
        }
        break;
      case 'show4':
        flag = this.data.show4;
        if (flag == true) {
          this.setData({
            show4: false
          })
        } else {
          this.setData({
            show4: true
          })
        }
        break;
      case 'show5':
        flag = this.data.show5;
        if (flag == true) {
          this.setData({
            show5: false
          })
        } else {
          this.setData({
            show5: true
          })
        }
        break;
      case 'show6':
        flag = this.data.show6;
        if (flag == true) {
          this.setData({
            show6: false
          })
        } else {
          this.setData({
            show6: true
          })
        }
        break;
      case 'show7':
        flag = this.data.show7;
        if (flag == true) {
          this.setData({
            show7: false
          })
        } else {
          this.setData({
            show7: true
          })
        }
        break;
      case 'show8':
        flag = this.data.show8;
        if (flag == true) {
          this.setData({
            show8: false
          })
        } else {
          this.setData({
            show8: true
          })
        }
        break;
      case 'show9':
        flag = this.data.show9;
        if (flag == true) {
          this.setData({
            show9: false
          })
        } else {
          this.setData({
            show9: true
          })
        }
        break;
    }
  },
  initPage: function() {
    var obj = this.data.param;
    //资金占用费fund_cost
    var fund_cost = (obj.pur_perprice * (obj.pre_fund_month > 0 ? obj.fund_rate : obj.fund_rate_from) * obj.pre_fund_month) + (obj.sale_perprice * (obj.re_fund_month > 0 ? obj.fund_rate : obj.fund_rate_from) * obj.re_fund_month);
    this.setData({
      fund_cost: this.formatDight(fund_cost, 2)
    })
    //收银承贴现费用
    var ba2_discount_cost = obj.sale_perprice * obj.ba_discount_rate * obj.ba2_month;
    this.setData({
      ba2_discount_cost: this.formatDight(ba2_discount_cost, 2)
    })
    //开银承节约利息
    var ba1_save_interest = obj.pur_perprice * (obj.fund_rate_from * obj.ba1_month[obj.selectIndex] - obj.ba1_rate - obj.ba1_limit_rate);
    this.setData({
      ba1_save_interest: this.formatDight(ba1_save_interest, 2)
    })
    //财务费用
    var finance_cost = fund_cost + ba2_discount_cost - ba1_save_interest;
    this.setData({
      finance_cost: this.formatDight(finance_cost, 2)
    })
    //经营费用
    var manage_cost = Number(obj.freight_cost / 1.10 + obj.cut_cost);
    this.setData({
      manage_cost: this.formatDight(manage_cost, 2)
    })
    //销售税金
    var sale_tax = (obj.sale_perprice / 1.16 * 0.16 - (obj.pur_perprice / 1.16 * 0.16 + obj.freight_cost / 1.10 * 0.10)) * 0.12;
    this.setData({
      sale_tax: this.formatDight(sale_tax, 2)
    })
    //其他税金
    var other_tax = obj.sale_perprice / 1.16 * 0.001;
    this.setData({
      other_tax: this.formatDight(other_tax, 2)
    })
    //利润（每吨收益）
    var per_profit = obj.sale_perprice / 1.16 - (obj.pur_perprice / 1.16 + finance_cost + manage_cost + sale_tax + other_tax) - obj.indirect_cost;
    this.setData({
      per_profit1: this.formatDight(per_profit, 2)
    })
    //利润率（%）
    var per_profit_rate = per_profit * 1.16 * 100 / obj.sale_perprice;
    this.setData({
      per_profit_rate: this.formatDight(per_profit_rate,2)
    })
  },
  formatDight: function(dight, num) {
    var d = Math.round(dight * Math.pow(10, num)) / Math.pow(10, num);
    return d;
  }
})