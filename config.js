var config = {};

config.app = {};
config.api = {};
config.caldav = {};
config.slack = {};

/* App Settings */
config.app.name = "PlannerBot";

/* calDav Settings */
config.caldav.url = "";
config.caldav.username = "";
config.caldav.password = "";
config.caldav.timeFormat = "YYYYMMDDTHHmms";

/* API Settings */
config.api.port = 3000;

/* Slack WebHook Settings */
config.slack.username = config.app.name;
config.slack.emoji = ":calendar:";
config.slack.channel = "";
config.slack.webhook_url = "";
config.slack.eventColor = "good"; // can either be one of good, warning, danger, or any hex color code (eg. #439FE0).

/* Do Not edit the following code */
module.exports = config;