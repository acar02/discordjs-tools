# discordjs-tools
A easily configurable DiscordJS.

```js
const Discord = require("discord.js");
require("discordjs-tools")(Discord, {
  "defaultEmbed": {
    "color": "RED", // sa
    "description": "Hi" // sa
  }
})

let embed = new Discord.RichEmbed(); // if you are using 12.0.0-dev version, it is Discord.MessageEmbed();
embed.setDescription("hi xd");
/*
  embed color is red,
  embed description is 'hi xd';
*/
```