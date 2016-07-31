// JavaScript Document



//空白跟踪参照物
var c=0,d=0;
//计步器
var sum=0;
//计时器
var clockStart,clockEnd;
var time;
//提示文档
var str;
var se,m=0,h=0,s=0,ss=1;  


//打乱函数
function Mess()
{   
	var td=new Array;
	var k=0;
	for(var i=0;i<3;i++)
	{
		 td[i]=new Array;	
		 for(var j=0;j<3;j++)	
		 td[i][j]=document.getElementsByTagName("img")[k++];
	}

	for(var r=0;r<1000;r++)
	{	
		var ran1=Math.floor(Math.random()*3);
		var ran2=Math.floor(Math.random()*3);
   		if (Math.abs(ran1 - c) + Math.abs(ran2 - d) == 1)
		{
			td[c][d].setAttribute('src',td[ran1][ran2].getAttribute('src'));
			td[ran1][ran2].setAttribute('src','pic/images/01.jpg');
			c=ran1;d=ran2;sum=0;
		}
	}	
	document.getElementsByTagName("button")[0].innerHTML='重新开始'
    clockStart=new Date();
    sum=-1;
    document.getElementById("step").innerHTML=++sum;

		// 计时器
		clearInterval(se);ss=1;m=s=0;
		se=setInterval("second()",10);  //这个函数是要放到按钮的click事件上的


}

//时间

	function second(){  
		if((ss%100)==0){s+=1;ss=1;}  
		if(s>0 && (s%60)==0){m+=1;s=0;}  
		t=m+" 分 "+s+" 秒  "+ss;  //时分秒运算
		document.getElementById("showtime").innerHTML=t;//showtime的input赋值的语句，可以实现动态计时。
		//其实所谓的动态计时，就是在很短的时间里不停给显示时间的地方更新数值，由于速度很快，这样计时器看起来时刻都在变化。但其实不是的，它从本质上还是静态的，这跟js的伪多线程原理是一样的。
		ss+=1;  
		}  
//加载时为每个元素绑定响应动作	
window.onload = function()
{ 
	var td=new Array;
	var k=0;
	for(var i=0;i<3;i++)
	{
		 td[i]=new Array;	
		 for(var j=0;j<3;j++)	
		 td[i][j]=document.getElementsByTagName("img")[k++];
	}

    for(var i= 0;i<3;i++)
    {
		 for(var j=0;j<3;j++)
		 {
         	IMGMOVE(i,j);
	     }
	}  

}
      
//动作函数	 
function IMGMOVE(a,b)
{
	var td=new Array;
	var k=0;
	for(var i=0;i<3;i++)
	{
		td[i]=new Array;	
		for(var j=0;j<3;j++)	
		td[i][j]=document.getElementsByTagName("img")[k++];
	}
	td[a][b].onmousedown=function()
	{
		
		if (Math.abs(a - c) + Math.abs(b - d) == 1)
		{
			td[c][d].setAttribute('src',td[a][b].getAttribute('src'));
			td[a][b].setAttribute('src','pic/images/01.jpg');
			c=a;d=b;
			document.getElementById("step").innerHTML=++sum;
			succeed();
		}
	}
}	  
	 




//判成功函数
function succeed()
{  
	var k=1;
	if(document.getElementsByTagName("img")[0].getAttribute('src')=='pic/images/01.jpg')
	{
		for(var i=1;i<=9;i++)
		{
				if(document.getElementsByTagName("img")[i-1].getAttribute('src')!=='pic/images/0'+(k++) +'.jpg')
				break;
		}
         if(i==10){
		clearInterval(se);
		alert("成功！");
		}
	}
}





	    
  
