module.exports.config = {
    name: "autosend",
    version: "1.0.1",
    hasPermission: 0,
    credits: "Imran",
    description: "sad video",
    commandCategory: "user",
    usages: "",
      cooldowns: 5
};
const r = a => a[Math.floor(Math.random()*a.length)],
{
  get
} = require('axios'),
config = [{
      timer: '12:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '1:00:00 AM',
  message: ['🔔====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======🔔\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '2:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '3:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '4:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '5:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '6:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '7:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
  timer: '8:00:00 AM',
  message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '9:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{ 
      timer: '10:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{ 
      timer: '12:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '11:00:00 AM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '1:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '2:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '3:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '4:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '5:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '6:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '7:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '8:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '9:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '10:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
},
{
      timer: '11:00:00 PM',
      message: ['====== 𝗔𝗨𝗧𝗢 𝗦𝗘𝗡𝗗 ======\n━━━━━━━━━━━━━━━━\n➝ 𝗡𝗼𝘄 𝗜𝘀: {time} \n\n💬:{thinh}\n━━━━━━━━━━━━━━━━━━\n➝ 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗔𝗻 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰 𝗠𝗲𝘀𝘀𝗮𝗴𝗲']
  }];
module.exports.onLoad = o => {
  if (!!global.autosendmessage_setinterval) clearInterval(global.autosendmessage_setinterval);
  global.autosendmessage_setinterval = setInterval(async function() {
      if (á = config.find(i => i.timer == new Date(Date.now()+25200000).toLocaleString().split(/,/).pop().trim())) {
          var msg = r(á.message);
          msg = msg.replace(/{time}/g, (require("moment-timezone")).tz("Asia/Dhaka").format("hh:mm:ss (D/MM/YYYY) (dddd)")).replace(/{thinh}/g, (await get(`https://imran-status-api.onrender.com/status`)).data.data.title)
          msg = {
              body: msg, attachment: (await get((await get(`https://imran-status-api.onrender.com/status`)).data.data.url, {
                  responseType: 'stream'
              })).data
          };
          global.data.allThreadID.forEach(i => o.api.sendMessage(msg, i));
      };
  }, 1000);
};
module.exports.run = () => {};
