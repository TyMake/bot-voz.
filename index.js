const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel } = require('@discordjs/voice');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates]
});

const CHANNEL_ID = '1554685866172088330';
const GUILD_ID = '1496317551855009842';

client.once('ready', async () => {
    console.log(`¡Bot conectado como ${client.user.tag}!`);
    const guild = client.guilds.cache.get(GUILD_ID);
    if (!guild) return console.log('No encontré el servidor.');
    const channel = guild.channels.cache.get(CHANNEL_ID);
    if (!channel) return console.log('No encontré el canal de voz.');

    try {
        const connection = joinVoiceChannel({
            channelId: channel.id,
            guildId: guild.id,
            adapterCreator: guild.voiceAdapterCreator,
            selfDeaf: false,
            selfMute: false
        });
        console.log('¡Bot metido en el canal de voz con éxito!');
    } catch (error) {
        console.error('Error:', error);
    }
});

client.login('MTU1NTQzMzM2YjYyNTcxNDI2OA.GN3Kjg.9IVpm613h1lJ4G3kMLj4klj-Api1oyKw6dUDH0');
