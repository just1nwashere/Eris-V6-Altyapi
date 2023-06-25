const Eris = require("eris");
const client = new Eris.Client(TOKEN);
const bot = new Eris("token");
bot.on("ready", () => {
          console.log("ready");
})
bot.on("messageCreate", (msg) => {
          if(msg.content === "!ping") {
                    bot.createMessage(msg.channel.id, '**pong!**');
          }
})
bot.connect();
client.on("interactionCreate", Interaction => {
          if (Interaction instanceof Eris.CommandInteraction); {
                    if (Interaction.data.name == "ping"); {
                              return Interaction.createMessage("**Discord Botçular Birliği Hazır Eris Alt Yapısı**");
                    };
          };
});
client.connect();