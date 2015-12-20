window.onload=function() {
	var ulbox=document.getElementById('list');
	
	var arr=['望月提','市高级技校','赤壁中学','赤壁桥','赤壁公园','五甲街','黄州商场','区医院胜利街分院','电信局','市人民医院','三医院','十字街','爱尔眼科医院','市运管局','交警一大队','武商','海军招待所','西湖安居小区','育英学校','市劳动保障局','红卫小学','黄冈宾馆','科技职业学校','万象巴黎','经济园','东门小区','商城','市中医院','市妇幼保健院','市卫校','市母婴健康中心','君佳康乐园','三清'];
	   for(var i=0;i<arr.length;i++){
	   		var lis=document.createElement('li');
	   		lis.innerHTML=arr[i];
	   		ulbox.appendChild(lis);
	   }
   console.log(arr.length);
}