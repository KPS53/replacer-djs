# replacer-djs

replacer-djs makes it easier for you when you need to replace values in a string. It can be used for the DiscordJS library when you want to modify a keyword {server} by the name of the server.

### Basic usage
Imagine you're using a handler for your commands, means you have access to `message` parameter.
```js
const Discord = require("discord-js")
const replacer = require("replacerdjs")

//  your run here (client, message, args) //
let data = "This {server} has a particularity, it's using {module} made by author" // string that contains values that have to be changed.
let replaced = {
  "{server}": message.guild.name,
  "{module}": "replacerdjs",
  "author": "KPS53"
} // object which has one or several key(s) (to be replaced) and their value (replaced by)

message.channel.send(replacer(data, replaced)) OR by using an embed class.
```
