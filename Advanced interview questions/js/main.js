var obj={
   init:function(){
   	var list=this;
   	list.render();
   	list.bind();
   },
   render:function(){
   	var list=this;
   	var dlbtn=document.getElementById('btn');
   	var btn=dlbtn.getElementsByTagName('dd');
   	var box=document.getElementsByClassName('list-box');
   	list.box=box;
   	list.btn=btn;
   	console.log(list.btn);
   },
   bind:function(){
   	var list=this;
   	for(var i=0;i<list.btn.length;i++){
   		 	list.btn[i]=i;
   		    list.btn[i].onclick=function(){
   		    for(var i=0;i<list.btn.length;i++){
        		if(this==list.btn[i]){
        			list.box[i].style.display='block';
        			this.className = 'show';
        		}else{
        			list.box[i].style.display='none';
        			list.btn[i].className = '';
        		}
   		    }
   		}
   	}
   }
}
window.onload=function(){
	obj.init();	
}
