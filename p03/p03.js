const whosOnline = (friends) => {
    // Your code here...
          const output = {}
        friends.forEach((e) => {
            if (e.status == 'online' && e.lastActivity <= 10) {
                if (!output.online) output.online = [];
                output.online.push(e.username)
            } else if (e.status == 'offline')
             { if(!output.offline) output.offline = [];
                output.offline.push(e.username)
            } else 
            { if(!output.away) output.away = [];
                  output.away.push(e.username)
                }
        })
        return output;
    }
    