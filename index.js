const Slack = require('slack-node');  // 슬랙 모듈 사용

apiToken = "xoxp-948166928677-938005983073-950370745238-eb32ac25b1f0cf898617580548c3e177";
const slack = new Slack(apiToken);

const send = async(message) => {
    slack.api('chat.postMessage', {
        username: 'dev-test',  // 슬랙에 표시될 봇이름
        text:message,
        channel:'#general'  // 전송될 채널 및 유저
    }, function(err, response){
        console.log(response);
    });
};

send('메세지 내용');