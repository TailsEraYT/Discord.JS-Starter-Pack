././*
First, we make the immutable values (Const's) to Discord.js and Client respecively.
*/
const discord = require("discord.js");
const client = new discord.Client();
require("dotenv"); // this is for added security on Open Source bots, and if it applys, closed Source bots.
const prefix = "+" // this is the prefix. you can change this at any time.

client.on ('ready', () => {
  console.log("logged in.");
  //this is a confirmation that the bot has gotten online and is ready for use.
});

client.on ('message', message => {
  // this next part will get complicated. so stay with me here.

if (message.author.bot || !message.content.startsWith(prefix)) return; // if the Message is from a bot OR doesnt start with the prefix, it returns.

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
// these 2 are really importent for sub-menus / arguments, like a say command.

/* 
Now, there is 2 ways you can go with this.

you can do

(message.content === "some command")

or

(command === "some command")

We will stick to The 2nd option, as 2 args where made for this in mind.
*/

  if (command === "about") {
    channel.message.send("Discord.JS Starters V 1.0.0, by TailsEraYT");
  }
})

client.login(process.env.token); // this logs the bot in. it can be at the start, or end, but NEVER in the middle of 'client.' code. you'll just mess something up.