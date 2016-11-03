
function dyttAdFilter(){
	var body=document.getElementsByTagName("body");
	var hyperlink=body[0].getElementsByTagName("a");
	body[0].removeChild(hyperlink[0]);

	var ad = document.getElementsByTagName("iframe");
	setTimeout(function() {
		for(var i=0;i<ad.length;i++){
			console.log("next->"+ad[i]);
			ad[i].parentNode.parentNode.removeChild(ad[i].parentNode);
		}
	}, 500);

}

//2016/10/23 14 QQ空间推广id
//fct_20050606_5000_1_1477198624_0_1
//fct_0_6600_1_1477202258_0_1
//fct_0_6600_4_1477202379_0_1
//fct_20050606_5000_1_1477288193_0_1
//2016/10/23 16:20 
//fct_0_6600_4_1477210942_0_1

window.addEventListener('load',function(event) {
	//alert("conpleted");
	var url = document.URL;
	if(url.search("http://user.qzone.qq.com/")>-1){
		var eles = new Array(4);
		eles[0] = document.getElementById("QM_Container_100006");
		eles[1] = document.getElementById("QM_Container_100005");
		eles[2] = document.getElementById("QM_100005_Body");
		eles[2] = document.getElementById("QM_Container_100002");
		for (var i=0;i<eles.length ;i++ )
		{
			//alert(eles[0]);
			eles[i].parentNode.removeChild(eles[i]);
		}
		document.getElementById("qz_notification").sytle.display="none";
		
		
	}
	else if (url.search("http://blog.csdn.net/")>-1)
	{
		setTimeout(function() {
			document.getElementById("cpro_u2392861").style.display = "none";
			//document.getElementById("cpro_u2734128").style.display = "none";
			document.getElementById("cpro_u2734133").style.display = "none";
		}, 300);
	}
	else if ((url.search("http://dy")>-1)||(url.search("http://www.dy")>-1))
	{
		setTimeout(function() {
			dyttAdFilter();
		}, 300);
		chrome.runtime.sendMessage({greeting:"filtered"},function(response){
		
		});
	}
});

