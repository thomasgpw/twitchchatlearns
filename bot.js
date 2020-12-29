const tmi = require('tmi.js');
const accounts = require('./accounts')
const Emotes = require('./emotes')
const Texts = require('./texts')
const channels = ['voidslime']

const Handler = (props) => {

  // Define configuration options
  const opts = {
    options: { debug: true },
    connection: {
      port: props.port,
      reconnect: true
    },
    identity: accounts[props.name],
    channels: channels
  };

  // Create a client with our options
  const client = new tmi.client(opts);
  
  // Register our event handlers (defined below)
  client.on('connected', onConnectedHandler);

  client.addListener('connecting', function (address, port) {
      console.log('Connecting', 'chat-connection-good-connecting');
    });
  client.addListener('logon', function () {
      console.log('Authenticating', 'chat-connection-good-logon');
    });
  client.addListener('connectfail', function () {
      console.log('Connection failed', 'chat-connection-bad-fail');
    });
  client.addListener('connected', function (address, port) {
      console.log('Connected', 'chat-connection-good-connected');
      joinAccounced = [];
    });
  client.addListener('disconnected', function (reason) {
      console.log('Disconnected: ' + (reason || ''), 3000, 2, 'chat-connection-bad-disconnected');
    });
  client.addListener('reconnect', function () {
      console.log('Reconnected', 'chat-connection-good-reconnect');
    });
  // client.addListener('join', function (channel, username) {
  //     // console.log(channel, username, client.getUsername())
  //     if(username == client.getUsername()) {
  //       console.log('Joined ' + capitalize(dehash(channel)), 'chat-room-join');
  //       joinAccounced.push(channel);
  //     }
  //   });
  client.addListener('part', function (channel, username) {
      var index = joinAccounced.indexOf(channel);
      if(index > -1) {
        console.log('Parted ' + capitalize(dehash(channel)), 'chat-room-part');
        joinAccounced.splice(joinAccounced.indexOf(channel), 1)
      }
    });

  client.addListener('crash', function () {
      console.log('Crashed', 'chat-crash');
    });

  
  // Connect to Twitch:
  client.connect().catch(console.error);
  
  // Called every time the bot connects to Twitch chat
  function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
    sendMessage()
  }
  // for (let i =1; i < Math.random() * 10; i++) {
  //   emote[i] = emote[0];
  // }
  // return emote.join(' ');
  function sendMessage () {
    client.say('Voidslime', Emotes.getEmote()).then((resolve, reject) => {
      setTimeout(() => {sendMessage()}, 5000)
    })
  }
}
exports.Handler = Handler;