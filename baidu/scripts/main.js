/*
使用了单例模式，避免了全局变量，全局函数被覆盖。
*/
var index = {
  innit: function() {
    var baidu = this;
    baidu.render();
    baidu.bind();
  },
  render: function() {
    var baidu = this;
    var spans = document.getElementsByClassName('navlist');
    var spanContain = document.getElementsByClassName('type-box'); //获取点击事件对象
    baidu.contain = spanContain;
    baidu.btn = spans;
    var search1 = document.getElementById('search1');
    baidu.search1 = search1; //input输入框
    var search2 = document.getElementById('search2');
    baidu.search2 = search2; //input 百度button
  },
  bind: function() {
    var baidu = this;
    for (var i = 0; i < baidu.btn.length; i++) {
      baidu.btn[i].onclick = function() { //触发导航类型切换事件
        for (var i = 0; i < baidu.btn.length; i++) {
          if (this == baidu.btn[i]) {
            baidu.contain[i].style.display = 'block';
          } else {
            baidu.contain[i].style.display = 'none';
          }
        }
      }
    }
    //键盘输入时触发事件
    var index=-1;
    baidu.search1.onkeydown = function(e) {
      var ulbox=document.getElementById('ulist');
      var lis=ulbox.getElementsByTagName('li');
      var ev = e || event;
      if (ev.keyCode == 40) {
          index++;
          if(index==10){
            index=-1;
          }
          for(var i=0;i<lis.length;i++){
            if(index==i){
              lis[i].className='list-style';
              baidu.search1.value=lis[i].innerHTML;
            }
            else{
              lis[i].className='';
            }
          }
      }
      if (ev.keyCode == 38) {
       
          if(index==-1){
            index=10;
          }
           index--;
          for(var i=0;i<lis.length;i++){
            if(index==i){
              lis[i].className='list-style';
              baidu.search1.value=lis[i].innerHTML;
            }
            else{
              lis[i].className='';
            }
          }
      } else if (ev.keyCode == 13) {

      }
    }


    //离开键盘触发事件
    baidu.search1.onkeyup = function(e) {
        var ulbox=document.getElementById('ulist');
        ulbox.style.display='block';
        var ev = e || event;
        if (ev.keyCode == 40) return;
        if (ev.keyCode == 38) return;
        if (ev.keyCode == 13) {
          window.open('https://www.baidu.com/s?wd=' + baidu.search1.value);
          baidu.search1.value = '';
        }
        //ajax请求数据
        $.ajax({
          type: "get",
          url: "http://suggestion.baidu.com/su?",
          dataType: "jsonp",
          jsonp: "callback",
          jsonpCallback: "getJson",
          data: {
            wd: baidu.search1.value,
            cb: "getJson"
          },
          success: function(jsons) {
          },
          error: function() {}
        });
      }
      //点击确定按钮
    baidu.search2.onclick = function() {
      window.open('https://www.baidu.com/s?wd=' + baidu.search1.value);
      baidu.search1.value = '';
    }
  }
};
//json 数据
function getJson(jsondata) {
   console.log(jsondata);
  var data=jsondata.s;
  var ulbox=document.getElementById('ulist');
  var search1=document.getElementById('search1');
  ulbox.innerHTML='';
  for(var i=0;i<data.length;i++){
     var lis=document.createElement('li');
     lis.innerHTML=data[i];
     ulbox.appendChild(lis);
  }
}

window.onload = function() {
  index.innit();
  document.onclick=function(){
  var ulbox=document.getElementById('ulist');
  ulbox.style.display='none';
 }
}