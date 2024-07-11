#BanBot

This bot was made due to a friend of mine receiving harrassment from a past partner. Many existing bots only have ban settings for <5 minutes. This is not adequate enough for people who receieve targeted harrassment. I decided to do this to make her feel safer in this online space. Tested and working July 2024.

# Notes
- I got this idea from Reddit tech threads, however these were significantly outdated syntax wise and not useable. 
- Additionally many bots try and do the jobs that other publicly accessible free bots already do, this only has the BAN feature in mind.

# Commands
- /ban-new-accounts [x] - When used correctly with an integer value specified all new accounts that are < x are instantly banned. This is automatically set at 7 when the bot joins a server. 

# Server Setup
- Download and hostable through discord developer platform
- Ensure the bot is dragged above all normal member accounts or given admin role

# Instructions
1. Create a Discord Bot at https://discordapp.com/developers applications
2. Click New Application
3. On the left hand side click Bot and click OK
4. Replace placeholder values in config.json with your values
5. Now copy your Bot Token and Bot Client Id into config.json
6. Scroll down and Enable Server Members Intent (so that we can see when new members join the server)
7. Click OAuth2 in the left sidebar
8. Copy the client id into the config.json
9. Click in the scopes section "bot" & "application.commands" and in the bot permissions section "administrator"
10. Copy the URL in the bottom of the "scopes" section and paste it into your web browser
11. Run the link and allow it to join your server
12. Enable discord developer mode in your server
13. Right click your server on the left pane and select "copy server ID", then paste this into config.json

# Running the bot
- After following the instructions now we can run the bot with the following commands in a terminal:
- npm install
- npm install discord.js @discordjs/rest discord-api-types axios
- node commands.js
- node app.js :Congrats your bot is now running and should appear as 'online' in your discord server 



