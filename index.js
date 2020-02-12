const Slack = require('slack-node');  // 슬랙 모듈 사용
const webhookUri = "https://hooks.slack.com/services/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";  // Webhook URL

const slack = new Slack();
slack.setWebhook(webhookUri);

const send = async(message) => {
    slack.webhook({
        text:"인터넷 검색 포털 사이트",
        attachments:[
            {
                fallback:"링크주소: <https://www.google.com|구글>",
                pretext:"링크주소: <https://www.google.com|구글>",
                color:"#00FFFF",
                fields:[
                    {
                        title:"알림",
                        value:"해당링크를 클릭하여 검색해 보세요.",
                        short:false
                    }
                ]
            }
        ]
    }, function(err, response){
        console.log(response);
    });
}