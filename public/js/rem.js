function remSize(){
	//获取浏览器窗口文档显示区域的宽度，不包括滚动条。
    var deviceWidth = document.documentElement.clientWidth || window.innerWidth
    if(deviceWidth > 750){
        deviceWidth = 750
    }
    if(deviceWidth <= 320){
        deviceWidth = 320
    }
    //设计稿是750 设置一半的宽度那么设计稿的宽度1rem等于设计稿的100像素
    document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px';
    document.querySelector('body').style.fontSize = 0.3 + 'rem';
} 
remSize()
window.onresize = function(){//onreset 事件在表单被重置后触发。
    remSize()
}
