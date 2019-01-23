//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['A', 'B', 'C', 'D','E'],
    index:0,
  },
  onLoad: function () {
   
  },
  onReady: function (e) {
    this.selectA();
    //this.selectB();
    //this.selectC();
    //this.selectD();
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

    }
    
  },

  selectA(){
    //使用 wx.createContext 获取绘图上下文 context
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0,0,350,350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(1);
    context.moveTo(346,260);
    context.lineTo(322,50);
    context.lineTo(282, 50);
    context.lineTo(284, 68);
    context.moveTo(260,68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(240, 67, 80, 146);
    context.drawImage("../img/A.png",266,122,30,30);
    context.stroke();
    context.draw();
  },

  selectB() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0,0,350,350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(1);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(214, 50);
    context.lineTo(214, 68);
    context.moveTo(214, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(177, 67, 76, 146);
    context.drawImage("../img/B.png", 200, 118, 30, 30);
    context.stroke();
    context.draw();
  },

  selectC() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(1);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(148, 50);
    context.lineTo(148, 68);
    context.moveTo(128, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(110, 67, 76, 146);
    context.drawImage("../img/C.png", 138, 114, 36, 36);
    context.stroke();
    context.draw();
  },

  selectD() {
    const context = wx.createCanvasContext('firstCanvas');
    context.clearRect(0, 0, 350, 350);
    context.setStrokeStyle('#ff0000');
    context.setLineWidth(1);
    context.moveTo(346, 260);
    context.lineTo(322, 50);
    context.lineTo(83, 50);
    context.lineTo(83, 68);
    context.fillStyle = "rgba(255,0,0,0.4)";
    context.fillRect(38, 67, 78, 146);
    context.drawImage("../img/D.png", 64, 116, 30, 30);
    context.stroke();
    context.draw();
  },

})
