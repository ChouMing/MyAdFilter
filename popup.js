function showNotification(msg){
		var notification = chrome.notifications.create(
			'1',{     
			type:"basic",
            title:"Ad filter Notification",
            message:msg,
            iconUrl:"filtericon.png"
			},
				function(){});
		notification.show();
}


function addListener(){
	var elements = document.getElementsByTagName("span");
	for(var i=0;i<elements.length;i++){
		elements[i].addEventListener('click', function(){
			chrome.tabs.create({url:this.title});		
		});
	}
}

document.addEventListener('DOMContentLoaded',function() {
	addListener();

	//showNotification("有电影更新！");
});

chrome.runtime.onMessage.addListener(function(request,sender,sendResponse){

		showNotification("已为您成功过滤广告！");		

});