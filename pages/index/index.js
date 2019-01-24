//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['A', 'B', 'C', 'D','E'],
    arrayEntry:['A1','A2','A3'],
    emptyNum:[5,3,1,4,2],
    parkingArray:['经贸大厦地下停车场','百货大楼地下停车场'],
    parkingIndex:0,
    entryIndex:0,
    index:0,
    motto: 'Hello World',
    modelColor: ["#25ddea","#ccc"],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    carCode:"苏A-JKB686"
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onReady: function (e) {
    this.selectA();
    //this.selectB();
    //this.selectC();
    //this.selectD();
    //this.selectE();
    //this.findA1();
    //this.findA2();
    //this.findA3();
  },

  bindPickerChange(data){
    let index=data.detail.value;
    this.setData({
      index:data.detail.value
    })
    if(index==0){
      this.selectA();
    }else if(index==1){
      this.selectB();
    }else if(index==2){
      this.selectC();
    }else if(index==3){
      this.selectD();
    }else if(index==4){
      this.selectE();
    }
  },
  bindPickerChangeParking(data) {
    this.setData({
      parkingIndex: data.detail.value
    })
  },

  parkingModel(){
    this.setData({
      modelColor: ["#25ddea", "#ccc"],
      index:0,
      entryIndex:0,
      parkingIndex:0
    })
    this.selectA();
  },

  findingModel(){
    this.setData({
      modelColor: ["#ccc", "#25ddea"],
      index: 0,
      entryIndex: 0,
      parkingIndex: 0
    })
    this.findA1();
  },

  changeEntry(data){
    let index = data.detail.value;
    this.setData({
      entryIndex: data.detail.value
    })
    if(index==0){
      this.findA1();
    }else if(index==1){
      this.findA2();
    }else if(index==2){
      this.findA3();
    }
  },

  selectA(){
    //使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0,0,350,350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(2);
    context.moveTo(346,260);
    context.lineTo(322,50);
    context.lineTo(282, 50);
    context.lineTo(284, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(245, 67, 80, 146);
    context.fillStyle = "rgba(0,255,0,0.8)";
    context.fillRect(246, 72, 23, 11);
    context.fillRect(289, 83, 23, 11);
    context.fillRect(250, 146, 23, 11);
    context.fillRect(294, 146, 23, 11);
    context.fillRect(252, 172, 23, 11);
    context.drawImage("../img/A.png",266,122,30,30);
    context.stroke();
    context.draw();
  },

  selectB() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0,0,350,350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(2);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(214, 50);
    context.lineTo(214, 68);
    context.moveTo(214, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(180, 67, 74, 146);
    context.fillStyle = "rgba(0,255,0,0.8)";
    context.fillRect(224, 84, 23, 11);
    context.fillRect(182, 172, 23, 11);
    context.fillRect(225, 122, 23, 11);
    context.drawImage("../img/B.png", 200, 118, 30, 30);
    context.stroke();
    context.draw();
  },

  selectC() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(2);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(148, 50);
    context.lineTo(148, 68);
    context.moveTo(128, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(110, 67, 76, 146);
    context.fillStyle = "rgba(0,255,0,0.8)";
    context.fillRect(113, 121, 23, 11);
    context.drawImage("../img/C.png", 138, 114, 36, 36);
    context.stroke();
    context.draw();
  },

  selectD() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(2);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(83, 50);
    context.lineTo(83, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(38, 67, 78, 146);
    context.fillStyle = "rgba(0,255,0,0.8)";
    context.fillRect(43, 121, 23, 11);
    context.fillRect(43, 145, 23, 11);
    context.fillRect(93, 72, 23, 11);
    context.fillRect(88, 184, 23, 11);
    context.drawImage("../img/D.png", 64, 116, 30, 30);
    context.stroke();
    context.draw();
  },

  selectE() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(2);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(276, 50);
    context.lineTo(290, 240);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(28, 240, 306, 36);
    context.fillStyle = "rgba(0,255,0,0.8)";
    context.fillRect(58, 246, 11, 26);
    context.fillRect(147, 246, 11, 26);
    context.drawImage("../img/E.png", 170, 246, 26, 26);
    context.stroke();
    context.draw();
  },

  findA1(){
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#0000ff');
    context.setLineWidth(2);
    context.moveTo(244, 290);
    context.lineTo(241, 224);
    context.lineTo(219, 224);
    context.lineTo(217, 140);
    context.drawImage("../img/car.png", 220, 128, 34, 22);
    context.stroke();
    context.draw();
  },

  findA2(){
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#0000ff');
    context.setLineWidth(2);
    context.moveTo(120, 290);
    context.lineTo(120, 224);
    context.lineTo(219, 224);
    context.lineTo(217, 140);
    context.drawImage("../img/car.png", 220, 128, 34, 22);
    context.stroke();
    context.draw();
  },

  findA3(){
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#0000ff');
    context.setLineWidth(2);
    context.moveTo(148, 20);
    context.lineTo(148, 50);
    context.lineTo(215, 50);
    context.lineTo(217, 140);
    context.drawImage("../img/car.png", 220, 128, 34, 22);
    context.stroke();
    context.draw();
  }
  

})
