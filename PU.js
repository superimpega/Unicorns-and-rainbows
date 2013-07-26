API.chatLog('Project Sunshine & Rainbows v1.7 Initialized')
  API.on (API.CHAT, function (data) {
    	console.log(data);
             var a = data.message.toLowerCase();
              if (a.indexOf('hue') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
              else if (a.indexOf('brbr') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
              else if (a.indexOf('br br') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
              else if (a.indexOf('hu3') > -1)
              {
              	API.moderateKickUser(data.fromID, "spamming");
              }
			  else if (a.indexOf('kkkkk') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
			  else if (a.indexOf('spoder') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
			  else if (a.indexOf('fuck you ambassadors') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
			  else if (a.indexOf('fuck ambassadors') > -1)
              {
				API.moderateKickUser(data.fromID, "spamming");
              }
			  else if (a.indexOf('kkkk') > -1)
			  {
				API.moderateDeleteChat(date.chatID);
			  }
			  else if (a.indexOf('hu3') > -1)
			  {
				API.moderateDeleteChat(date.chatID);
			  }
			  else if (a.indexOf('brbr') > -1)
			  {
				API.moderateDeleteChat(data.chatID);
			  }
			  else if (a.indexOf('br br') > -1)
			  {
				API.moderateDeleteChat(data.chatID);
			  }
			  else if (a.indexOf('hue') > -1)
			  {
				API.moderateDeleteChat(data.chatID);
			  }
          })
