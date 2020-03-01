module.exports = function(Discord, options = {}) {
  if(options.hasOwnProperty("defaultEmbed")) {
    if(Discord.version === "12.0.0-dev") {
      class MessageEmbed extends Discord.MessageEmbed {
        constructor() {
          super();
          for(let i = 0; i < Object.keys(options.defaultEmbed).length; i++) {
            let key = Object.keys(options.defaultEmbed)[i];
            if(key === "color") {
              this.setColor(Object.values(options.defaultEmbed)[i])
            } else {
              this[key] = Object.values(options.defaultEmbed)[i];
            }
          }
        }
      }

      Discord.MessageEmbed = MessageEmbed;
    } else {
      class RichEmbed extends Discord.RichEmbed {
        constructor() {
          super();
          for(let i = 0; i < Object.keys(options.defaultEmbed).length; i++) {
            let key = Object.keys(options.defaultEmbed)[i];
            if(key === "color") {
              this.setColor(Object.values(options.defaultEmbed)[i])
            } else {
              this[key] = Object.values(options.defaultEmbed)[i];
            }
          }
        }
      }

      Discord.RichEmbed = RichEmbed;
    }
  }
}