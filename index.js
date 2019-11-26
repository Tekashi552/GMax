const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "!";

client.login("NjQ4MjA4NjY0MTc5NTA3MjEw.Xdq57A.MXcd8doIKfMRrS0BKhg0jtVSVFA");

client.on("guildMemberAdd", user =>{
   let joinEmbed = new Discord.RichEmbed()
   .setColor("#bdff00")
   .setAuthor(user.user.username, user.user.displayAvatarURL)
   .setDescription("**:hugging:  Bienvenue à toi**" + user + "**dans notre serveur j espere que tu vas passer de tres bons moments avec nous dans notre serveur**" + user.guild.name + " !")
   .setFooter("cordialement l'equipe d'administration")
   user.guild.channels.get("648202287226814496").send(joinEmbed)
});

client.on("guildMemberRemove", user =>{
    let leaveEmbed = new Discord.RichEmbed()
    .setColor("#ff0101")
    .setAuthor(user.user.username, user.user.displayAvatarURL)
    .setDescription("**:disappointed_relieved:  bon bein c triste mais c vrai**" + user + "**viens tous juste de quitter notre serveur j espere qu'il va revenir un jour :grin: **" + user.guild.name + " !")
    .setFooter("cordialement l'equipe d'administration")
    user.guild.channels.get("648202287226814496").send(leaveEmbed)
})

 client.on("message", message =>{
    if(!message.guild) return
    if(message.content === prefix + "hello"){
        message.channel.send("**bonjour**" + message.author + "!")
    }
});

