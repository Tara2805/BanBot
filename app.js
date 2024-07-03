import config from './config.json' assert { type: 'json' };
import { Client, Intents } from 'discord.js';

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_BANS
  ]
});

// Variable to store the number of days for banning new accounts
const banDaysThreshold = 7; // Default to 7 days, you can change this as needed with the command in discord

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
  const thresholdDate = new Date();
  thresholdDate.setDate(thresholdDate.getDate() - banDaysThreshold);

  if (member.user.createdAt > thresholdDate) {
    try {
      await member.ban({ reason: 'Account is too new' });
      console.log(`Banned ${member.user.tag} - Account created: ${member.user.createdAt}`);
    } catch (error) {
      console.error(`Failed to ban ${member.user.tag}:`, error);
    }
  }
});

client.login(config.token);
