var div=document.getElementById("div");function display(){
   axios.get('https://slack.com/api/conversations.list?token=xoxp-648089766759-648089767127-648097818055-b0c878db536a6b2209b28bdb80e20a76')
   .then(function (response) {var channelList=response.data.channels;
   for(let x in channelList){
   let channelName=document.createElement("h1");
   channelName.innerHTML=channelList[x].name;
   var channelId=channelList[x].id;
   axios.get(`https://slack.com/api/conversations.history?token=xoxp-648089766759-648089767127-648097818055-b0c878db536a6b2209b28bdb80e20a76&channel=${channelId}`)
      .then(function (response) {
          div.appendChild(channelName);
        var messageList=response.data.messages;
        for(var i in messageList){
          var para=document.createElement("p");
          div.appendChild(para);
          para.innerHTML=messageList[i].text;
        }
      })
      .catch(function (error) {      console.log(error);
      });
   }  console.log(response);
   })
   .catch(function (error) {  console.log(error);
   });
   };
   setInterval(function(){div.innerHTML=" ";display();},10000);
