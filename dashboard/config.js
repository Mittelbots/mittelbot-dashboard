const config = require('config.json');
const token = require('token.json').BOT_TOKEN;
const route = require('./assets/config/route.json');

module.exports = {
    port: 8090, // Port to listen on
    prefix: '/', // Prefix for commands
    id: config.DISCORD_APPLICATION_ID, // Discord Bot ID
    usingCustomDomain: false, // Use a custom domain for the bot
    domain: '', // Custom domain
    discordInvite: 'https://discord.gg/', // Discord Invite URL
    mongodbUrl: 'MONGO_URI', // MongoDB connection URL
    clientSecret: config.DISCORD_SECRET, // Client Secret from Discord Application
    token: token, // Bot Token from Discord Application,
    sessionSecret: '', // Session Secret
    discordAuthLink:
        'https://discord.com/api/oauth2/authorize?client_id=921779661795639336&redirect_uri=http%3A%2F%2F192.168.1.210%3A8090%2Fcallback&response_type=code&scope=email%20identify%20guilds',
    route,
    mode: 'dev',
};
