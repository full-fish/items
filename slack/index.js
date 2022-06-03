// // Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
// const { WebClient, LogLevel } = require("@slack/web-api");

// // WebClient instantiates a client that can call API methods
// // When using Bolt, you can use either `app.client` or the `client` passed to listeners.
// const client = new WebClient("xoxb-3406794856546-3392212171463-73s9XKSvMOEVipfcpbTbmtfk", {
//   // LogLevel can be imported and used to make debugging simpler
//   logLevel: LogLevel.DEBUG,
// });
// // ID of the channel you want to send the message to
// const channelId = "C03BVSY2F1T";
// async function a() {
//   try {
//     // Call the chat.postMessage method using the WebClient
//     const result = await client.chat.postMessage({
//       channel: channelId,
//       text: "Hello world",
//     });

//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// }
// a();
//!
// Require the Node Slack SDK package (github.com/slackapi/node-slack-sdk)
const { WebClient, LogLevel } = require("@slack/web-api");

// WebClient instantiates a client that can call API methods
// When using Bolt, you can use either `app.client` or the `client` passed to listeners.
const client = new WebClient("xoxb-3406794856546-3392212171463-73s9XKSvMOEVipfcpbTbmtfk", {
  // LogLevel can be imported and used to make debugging simpler
  logLevel: LogLevel.DEBUG,
});
// ID of the channel you want to send the message to
const channelId = "C03BVSY2F1T";

const a = async () => {
  try {
    // Call the chat.postMessage method using the WebClient
    const result = await client.chat.postMessage({
      channel: channelId,
      text: "Hello world2",
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
a();
