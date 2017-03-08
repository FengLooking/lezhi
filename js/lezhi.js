// JavaScript Document
window.onload=function(){
	autoadaption();
	
	allGoodsListAction();

	//首页图片轮播部分
	picsAutoChange();
	
	//首页商品展示1F处
	var slbtnsId=document.getElementById("shoplist_btns");
	var ulsId=document.getElementById("shop_show");	
	selectCardAction(slbtnsId,ulsId,"slbtns_on","shoplist_on");
	//首页商品展示2F
	var slsecondbtnsId=document.getElementById("spltsecond_btns");
	var swsecondulId=document.getElementById("spswsecond_show");	
	selectCardAction(slsecondbtnsId,swsecondulId,"slbtns_on second_on","shoplist_on sls_on");
	//首页商品展示3F
	var slthirdbtnsId=document.getElementById("spltthird_btns");
	var swthirdulId=document.getElementById("spswthird_show");	
	selectCardAction(slthirdbtnsId,swthirdulId,"slbtns_on tird_on","shoplist_on tirdsls_on");

	//详情页商品详情部分
	detailPageGoodsIntroduceAction();

	//详情页商品排行部分
	var htgsbtnsId=document.getElementById("hotgsbtns");
	var htgsulId=document.getElementById("hotgslist");	
	detailPageSorted(htgsbtnsId,htgsulId,"htgsb_on","gdslist");

	//详情页商品图片展示部分
	detailPagePicsBanner();

	//顶部导航二级列表
	var topFirst=element.getByClass("first_nav");
	var topSecond = element.getByClass("sub_nav");
	navList(topFirst,topSecond);

	//搜索商品部分
	shopsSearch();

	//详情页增加和减少购买数量部分
	addOrReduceNum();

	//详情页左边搜索框的文字调整
	detailSearchAction();

	//列表页左边导航部分
	listPageLeftNav();

	//个人中心左边导航部分
	personalCenterLeftNav("trademanage");
	personalCenterLeftNav("customservice");
	personalCenterLeftNav("datamanage");

	//个人中心底部收藏部分
	if(element.getByClass("wgdsshow_list"))
	{
		var ul = element.getByClass("wgdsshow_list");
		var leftBtn = element.getByClass("wgds_left");
		var rightBtn = element.getByClass("wgds_right");
		personalCenterCollection(ul[0],leftBtn[0],rightBtn[0]);
		personalCenterCollection(ul[1],leftBtn[1],rightBtn[1]);
		personalCenterCollection(ul[2],leftBtn[2],rightBtn[2]);
	}

	//侧边栏
	asideShowOrHide();

	//公告部分
	gonggaoScroll();
	
	//公告部分
	gonggaoList();

	//列表页列表切换部分
	listPageChangeAction();
}
autoadaption();
window.onresize=function(){
	autoadaption();
}
//设置宽度
function autoadaption(){
	var width=document.documentElement.clientWidth;
	var bdw=document.getElementsByTagName("body")[0];
	if(width<1202)
	{
		bdw.style.width="1202"+"px";
	}
	else
	{
		bdw.style.width="100%";
	}
}

//导航二级列表
function navList(first, second){
	for(var i=0; i<first.length; i++)
	{
		first[i].index = i;
		first[i].onmouseover=function(){
			for(var j=0; j<first.length; j++)
			{
				second[j].style.display="none";
			}
			second[this.index].style.display="block";
		}
		first[i].onmouseout=function(){
			second[this.index].style.display="none";
		}
	}
}

//搜索商品部分
function shopsSearch(){
	if(element.getByClass("form")[0])
	{
		var shop = element.getByClass("form")[0].
				getElementsByTagName("div")[0];
		var list = element.getByClass("form")[0].
					getElementsByTagName("div")[0].
					getElementsByTagName("ul")[0];
		shop.onmouseover=function(){
			list.style.display="block";
		}
		shop.onmouseout=function(){
			list.style.display="none";
		}

		//调节搜索框内的文字
		var searchTxt = element.getByClass("form")[0].
					getElementsByTagName("input")[0];
		searchTxt.onfocus=function(){
			if(searchTxt.value=="请输入商品名称")
			{
				searchTxt.value="";
			}
		}
		searchTxt.onblur=function(){
			if(searchTxt.value=="")
			{
				searchTxt.value="请输入商品名称";
			}
		}

		if(element.getById("search_shop"))
		{
			var shopTitle = element.getById("search_shop").
						getElementsByTagName("em")[0];
			var lis = element.getById("search_shop").
						getElementsByTagName("li");
			for(var i=0; i<lis.length; i++)
			{
				lis[i].onclick=function(){
					shopTitle.innerHTML = this.innerHTML;
				}
			}
		}
	}	
}

//公告部分
function gonggaoScroll(){
	if(element.getById("gg_box"))
	{
		var ggBox = element.getById("gg_box");
		var con1 = element.getByClass("gngo_list")[0];
		var con2 = element.getByClass("gngo_list")[1];

		var speed = 50;
		var timer = null;
		ggBox.scrollTop = 0;
		con2.innerHTML=con1.innerHTML;
		function scrollUp(){
			if(ggBox.scrollTop>=300)
			{
				ggBox.scrollTop=0;
			}else{
				ggBox.scrollTop++;
			}
		}
		function play(){
			timer = setInterval(scrollUp, speed);
		}
		function stop(){
			clearInterval(timer);
		}
		eventObj.addEvent(ggBox, "mouseover", stop);
		eventObj.addEvent(ggBox, "mouseout", play);
		play();
	}
	
}

//侧边栏
function asideShowOrHide(){
	if(element.getById("toolclose_btn"))
	{
		var closeBtn = element.getById("toolclose_btn");
		var openBtn = element.getById("openttool_btn");
		var aside = element.getById("aside");
		eventObj.addEvent(closeBtn,"click",function(){
			aside.style.display="none";
			openBtn.style.display="block";
		});
		eventObj.addEvent(openBtn,"click",function(){
			this.style.display="none";
			aside.style.display="block";
		});
		eventObj.addEvent(openBtn,"mouseover",function(){
			openBtn.style.background="url(img/tool2.png) no-repeat"
		});
		eventObj.addEvent(openBtn,"mouseout",function(){
			openBtn.style.background="url(img/tool1.png) no-repeat"
		});
	}	
}

//公告部分
function gonggaoList(){
	if(element.getByClass("gngo_list")[0])
	{
		var list0 = element.getByClass("gngo_list")[0].getElementsByTagName("li");
		var list1 = element.getByClass("gngo_list")[1].getElementsByTagName("li");
		listAction(list0);
		listAction(list1);
	}

	function listAction(list){
		for(var i=0; i<list.length; i++)
		{
			eventObj.addEvent(list[i],"mouseover",function(){
				this.style.textDecoration="underline";
				this.style.color="rgb(228,57,60)";
			});
			eventObj.addEvent(list[i],"mouseout",function(){
				this.style.textDecoration="none";
				this.style.color="#777";
			});
		}
	}	
}

//首页图片轮播部分
function picsAutoChange(){
	if(document.getElementById("banner_btns"))
	{
		var buttons = document.getElementById("banner_btns").getElementsByTagName("span");
		var timer;
		var lis = element.getChildsById("pics","li");
		var a=0;
		function animate(offset){	
			for(var f=0; f<lis.length; f++)
			{
				lis[f].style.display="none";
			}
			if(a==lis.length)
			{
				a=0;
			}
			lis[a].style.display="block";
			a++;
			
		}
		function showButton(num){
			for(var i=0; i<buttons.length; i++)
			{
				if(buttons[i].className=="bannerbtn_on")
				{
					buttons[i].className="";
				}
				if(num)
				{
					buttons[num-1].className="bannerbtn_on";
					a=num-1;
				}else{
					buttons[a-1].className="bannerbtn_on";
				}				
			}
		}
		for(var i=0; i<buttons.length; i++)
		{
			eventObj.addEvent(buttons[i],"mouseover",function(){
				var index = this.getAttribute("index");
				showButton(index);
				animate();
			});
		}
		function play(){
			timer = setInterval(function(){
				animate();
				showButton();
			},2000);
		}
		function stop(){
			clearInterval(timer);
		}
		container.onmouseover = stop;
		container.onmouseout = play;
		play();
	}

}

//首页所有商品列表部分
function allGoodsListAction(){
	if(document.getElementById("gdsclist"))
	{
		var gdslis=document.getElementById("gdsclist").getElementsByTagName("li");
		var subList = element.getByClass("submenu");
		for(var i=0; i<gdslis.length; i++)
		{
			gdslis[i].index=i;
			var gdpic = "gst"+i;
			gdslis[i].style.background="url(img/gdslst/"+gdpic+".png)"+" 15px no-repeat";
			gdslis[i].onmouseover=function(){
				this.style.background="#FFF url(img/dianqi.png) 13px no-repeat";
				this.style.borderLeft="1px solid #D6123E";
				subList[this.index].style.display="block";
			}
			gdslis[i].onmouseout=function(){
				var otpic = "gst"+this.index;
				this.style.background=" url(img/gdslst/"+otpic+".png)"+" 15px no-repeat";
				subList[this.index].style.display="none";
			}
		}
	}
}

//首页商品展示部分，有hr
function selectCardAction(btnId,listId,btnon,liston){
	if(btnId)
	{
		var stbtns=btnId.getElementsByTagName("span");
		var slhrs=btnId.getElementsByTagName("hr");
		var uls=listId.getElementsByTagName("ul");
		for(var j=0; j<stbtns.length; j++)
		{
			stbtns[j].index=j;
			stbtns[j].onmouseover=function(){
				if(this.className==btnon)
				{
					return;
				}
				for(var m=0; m<stbtns.length; m++)
				{
					stbtns[m].className="";
					slhrs[m].style.display="none";
					uls[m].style.display="none";
				}
				this.className=btnon;
				slhrs[this.index].style.display="block";
				uls[this.index].style.display="block";
				uls[this.index].className=liston;
			}
		}
	}
}

//详情页商品详情部分
function detailPageGoodsIntroduceAction(){
	if(document.getElementById("gsdsole_btns"))
	{
		var gsbtns=document.getElementById("gsdsole_btns").getElementsByTagName("span");
		var ditps=document.getElementById("goods_introduce").getElementsByTagName("p");
		for(var n=0; n<gsbtns.length; n++)
		{
			gsbtns[n].index=n;
			gsbtns[n].onclick=function(){
				if(this.className=="gsdb_on")
				{
					return;
				}
				for(var k=0; k<gsbtns.length; k++)
				{	
					gsbtns[k].className="";
					ditps[k].style.display="none";
				}
				this.className="gsdb_on";
				ditps[this.index].style.display="block";
			}
		}
	}
}

//详情页商品排行部分,没有hr
function detailPageSorted(btnId,listId,btnon,liston){
	if(btnId)
	{
		var stbtns=btnId.getElementsByTagName("span");
		var uls=listId.getElementsByTagName("ul");
		for(var j=0; j<stbtns.length; j++)
		{
			stbtns[j].index=j;
			stbtns[j].onclick=function(){
				if(this.className==btnon)
				{
					return;
				}
				for(var m=0; m<stbtns.length; m++)
				{
					stbtns[m].className="";
					uls[m].style.display="none";
				}
				this.className=btnon;
				uls[this.index].style.display="block";
				uls[this.index].className=liston;
			}
		}
	}
}
//详情页左边搜索框的文字调整
function detailSearchAction(){
	if(element.getById("searchF"))
	{
		var searchTxt = element.getById("searchF");
		searchTxt.onfocus=function(){
			if(searchTxt.value=="搜索店内商品")
			{
				searchTxt.value="";
			}
		}
		searchTxt.onblur=function(){
			if(searchTxt.value=="")
			{
				searchTxt.value="搜索店内商品";
			}
		}
	}
	
}

//详情页增加和减少购买数量部分
function addOrReduceNum(){
	if(element.getById("increase"))
	{
		var addBtn = element.getById("increase");
		var numTxt= element.getById("buynum");
		var num = parseInt(numTxt.value);
		var reduce = element.getById("reduce");
		eventObj.addEvent(addBtn,"click",function(){
			num++;
			numTxt.value = num;
		});
		eventObj.addEvent(reduce,"click",function(){
			if(num>1)
			{
				num--;
				numTxt.value = num;
			}
		});
	}	
}

//详情页商品图片展示部分
function detailPagePicsBanner(){
	if(element.getChildsById("fdimg","img"))
	{
		var fdimg = element.getChildsById("fdimg","img")[0];
		if(document.getElementById("gssmall"))
		{
			var gssmalls=document.getElementById("gssmall").getElementsByTagName("li");
			var gsbigs=document.getElementById("gsbig").getElementsByTagName("li");
			for(var f=0; f<gssmalls.length; f++)
			{
				gssmalls[f].index=f;
				gssmalls[f].onmouseover=function(){
					if(this.className=="gss_on")
					{
						return;
					}
					for(var l=0; l<gssmalls.length; l++)
					{
						gssmalls[l].className="";
						gsbigs[l].style.display="none";
					}
					this.className="gss_on";
					gsbigs[this.index].style.display="inline-block";
					fdimg.src = this.getElementsByTagName("img")[0].src;
				}
				if(f==0)
				{
					fdimg.src = gssmalls[f].getElementsByTagName("img")[0].src;
				}
			}

			var bgimgCtr = element.getByClass("bigpics")[0];
			var bigImg = element.getChildsById("gsbig","img");
			var smallLi = element.getChildsById("gssmall","li");
			var mask = element.getByClass("mask")[0];
			var fdCtr = element.getById("fdimg");
			
			var show = element.getById("show");

			eventObj.addEvent(show,"mouseover",function(e){
				mask.style.display="block";
				fdCtr.style .display="block";
			});
			eventObj.addEvent(show,"mouseout",function(e){
				mask.style.display="none";
				fdCtr.style .display="none";
			});

			var maskWidth = parseInt(element.getStyle(mask,"width"));

			eventObj.addEvent(show,"mousemove",function(e){
				var evt = eventObj.getEvent(e);
				var x = evt.offsetX;
				var y = evt.offsetY;
				var left = x-maskWidth/2;
				var top = y-maskWidth/2;
				if(left<0)
				{
					left = 0;
				}
				if(top<0)
				{
					top=0;
				}
				if(left>bgimgCtr.offsetWidth-maskWidth)
				{
					left = bgimgCtr.offsetWidth-maskWidth;
				}
				if(top>bgimgCtr.offsetWidth-maskWidth)
				{
					top=bgimgCtr.offsetWidth-maskWidth;
				}
				mask.style.left = left+"px";
				mask.style.top = top+"px";
				fdimg.style.marginLeft = -1.5*left+"px";
				fdimg.style.marginTop = -1.5*top+"px";
			});
		}
	}
	
}
//列表页列表切换部分
function listPageChangeAction(){
	if(element.getById("lstpg_btns"))
	{
		var listBtns = element.getById("lstpg_btns").
						getElementsByTagName("li");
		var listPage = element.getById("listpage_box").
						getElementsByTagName("ul");
		var nextPage = element.getById("nextpage"); 
		var prePage = element.getById("prepage");
		var liNextBtn = element.getById("btmnextpage");
		var index = 1;
		for(var i=0; i<listBtns.length-2; i++)
		{
			eventObj.addEvent(listBtns[i],"click",function(){
				if(this.className=="lstpg_btnon")
				{
					return;
				}
				var btnIndex = parseInt(this.getAttribute("index"));
				index = btnIndex;
				showButton(btnIndex);
				showList(btnIndex);
			});
		}

		eventObj.addEvent(nextPage,"click",function(){
			nextPageAction();
		});
		eventObj.addEvent(prePage,"click",function(){
			prePageAction();
		});
		eventObj.addEvent(liNextBtn,"click",function(){
			nextPageAction();
		});

		function nextPageAction(){
			if(index==3)
			{
				index=1;
			}else{
				index+=1;
			}
			showButton(index);
			showList(index);
		}
		function prePageAction(){
			if(index==1)
			{
				index=3;
			}else{
				index-=1;
			}
			showButton(index);
			showList(index);
		}

		function showButton(num){
			for(var m=0; m<listBtns.length-2; m++)
			{
				if(listBtns[m].className=="lstpg_btnon")
				{
					listBtns[m].className="";
					break;
				}
			}
			listBtns[num-1].className="lstpg_btnon";
		}
		function showList(num){
			for(var n=0; n<listPage.length; n++)
			{
				listPage[n].style.display="none";
			}
			listPage[num-1].style.display="block";
		}
	}
	
}

//获取元素的纵坐标 
function getTop(e){ 
	var offset=e.offsetTop; 
	if(e.offsetParent!=null) offset+=getTop(e.offsetParent); 
	return offset; 
} 
//获取元素的横坐标 
function getLeft(e){ 
	var offset=e.offsetLeft; 
	if(e.offsetParent!=null) offset+=getLeft(e.offsetParent); 
	return offset; 
} 
var element = {
	//获取任意样式
	getStyle:function(ele, attr){
		return ele.currentStyle?ele.currentStyle[attr]:getComputedStyle(ele)[attr];
	},
	//通过class获取元素
	getByClass:function(cls){
		if(document.getElementsByTagName(cls))
		{
			var ele = document.getElementsByClassName(cls)
			return ele;
		}else{
			var ele = document.getElementsByTagName("*");
			var arr = [];
			for(var i=0; i<ele.length; i++)
			{
				if(ele[i].className==cls)
				{
					arr.push(ele[i]);
				}
			}
			return arr;
		}	
	},
	//通过tagName获取元素
	getByTagName:function(tagName){
		if(document.getElementsByTagName(tagName))
		{
			var ele = document.getElementsByTagName(tagName);
			return ele;
		}	
	},
	//通过ID获取元素
	getById:function(id){
		if(document.getElementById(id))
		{
			var ele = document.getElementById(id);
			return ele;
		}	
	},
	//通过ID获取子元素
	getChildsById:function(id,ele){
		if(document.getElementById(id))
		{
			var eles = document.getElementById(id).
						getElementsByTagName(ele);
			return eles;
		}
	}
}

//跨浏览器事件处理程序
var eventObj = {
	//获取事件对象
	getEvent:function(event){
		return event?event:window.event;
	},
	//获取事件类型
	getType:function(event){
		return event.type;
	},
	//获取事件目标
	getEventTarget:function(event){
		return event.target || event.srcElement;
	},
	//阻止事件默认行为
	preventDefault:function(event){
		if(event.preventDefault)
		{
			event.preventDefault();
		}
		else
		{
			event.returnValue = false; //IE
		}
	},
	//阻止事件冒泡
	stopPropagation:function(event){
		if(event.stopPropagation)
		{
			event.stopPropagation();
		}
		else
		{
			event.cancelBubble = true; //IE
		}
	},
	//添加事件
	addEvent:function(element, type, handler){
		if(element.addEventListener)
		{
			//默认值为false，即为冒泡传递，当为true时，事件使用捕获传递
			element.addEventListener(type, handler, false);
		}
		else if(element.attachEvent)
		{
			element.attachEvent('on'+type, handler);
		}
		else
		{
			element['on'+type]=handler;
		}
	},
	//删除事件
	removeEvent:function(element, type, handler){
		if(element.removeEventListener)
		{
			element.removeEventListener(type, handler, false);
		}
		else if(element.detachEvent)
		{
			element.detachEvent('on'+type, handler);
		}
		else
		{
			element['on'+type]=null;
		}
	}
}

//列表页左边导航部分
function listPageLeftNav(){
	if(element.getChildsById("listpage_left","p"))
	{
		var title = element.getChildsById("listpage_left","p")[0];
		var dl = element.getById("class_list");
		var flag = true;
		title.onclick=function(){
			if(flag)
			{
				dl.style.display="none";
				flag=false;
			}else{
				dl.style.display="block";
				flag=true;
			}	
		}
	}
}

//个人中心左边导航部分
function personalCenterLeftNav(id){
	if(element.getChildsById(id,"dd"))
	{
		var dds = element.getChildsById(id,"dd");
		var dt = element.getChildsById(id,"dt")[0];
		var flag = true;
		dt.onclick=function(){
			if(flag)
			{
				for(var i=0; i<dds.length; i++)
				{
					dds[i].style.display="none";
					
				}
				flag=false;
			}else{
				for(var i=0; i<dds.length; i++)
				{
					dds[i].style.display="block";	
				}
				flag=true;
			}
		}
	}
	
}

//个人中心底部收藏部分
function personalCenterCollection(ul, leftBtn, rightBtn){
	if(ul)
	{
		ul.style.left=-228+"px";
	    var flag = false;
	    var offsetW = -72-6
	    function move(offsetW,n){
	        flag=true;
	        var newLeft = parseInt(element.getStyle(ul,"left"))+offsetW;
	        var time = 400; //位移总时间
	        var ptm = 10;  //位移间隔时间
	        var speed = offsetW/(time/ptm);
	        function go(){
	            if(speed<0 && parseInt(element.getStyle(ul,"left"))>newLeft||
	                speed>0&&parseInt(element.getStyle(ul,"left"))<newLeft)
	            {
	                ul.style.left=parseInt(element.getStyle(ul,"left"))+speed+"px";
	                setTimeout(go,ptm);
	            }else{
	                flag=false;
	                ul.style.left = newLeft+"px";
	                if(n==0)
	                {
	                    if(newLeft<-384)
	                    {
	                        ul.style.left=0+"px";
	                    } 
	                }
	                if(n==1)
	                {
	                    if(newLeft>0)
	                    {
	                        ul.style.left=-384+"px";
	                    }
	                }
	            }
	        }
	        go();
	        
	    }
	    rightBtn.onclick=function(){
	        if(!flag)
	        {
	          move(-offsetW,1);  
	        } 
	    }
	    leftBtn.onclick=function(){
	        if(!flag)
	        {
	          move(offsetW,0);  
	        } 
	    }
	}
	
}