module.exports = (client, member) => {
  member.send(`Welcome on the server! Please be aware that we won't tolerate troll, spam or harassment. Have fun :). - FDt`)
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;
  channel.send(`Welcome to the Sea Pirate, ${member}`);
}
