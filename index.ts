import { GatewayIntentBits, Client } from 'discord.js';
import * as dotenv from 'dotenv';
import { readdirSync } from 'fs';
import { join } from 'path';
dotenv.config();

const bot = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.DirectMessageTyping
    ]
});

const HandlerDirs = join(__dirname, './handlers');

readdirSync(HandlerDirs).forEach(async (file) => {
    require(`${HandlerDirs}/${file}`)(bot);
})

bot.login(process.env.TOKEN);