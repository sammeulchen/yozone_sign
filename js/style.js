/**
 * Created by Administrator on 2017/4/25 0025.
 */

//动态计算html的font-size
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
//当deviceWidth大于设计稿的横向分辨率时，html的font-size始终等于横向分辨率/body元素宽：
var deviceWidth = document.documentElement.clientWidth;
if(deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';