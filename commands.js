import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import config from './config.json' assert { type: 'json' };

const commands = [
  {
    name: "ban-new-accounts",
    description: "Ban accounts that are newer than a specified number of days.",
    options: [
      {
        name: "days",
        description: "Number of days old the account must be to avoid being banned.",
        type: 4, // Integer type
        required: true
      }
    ]
  }
];

const rest = new REST({ version: "9" }).setToken(config.token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(config.clientId), {
      body: commands
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
