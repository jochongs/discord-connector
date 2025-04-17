import { configDotenv } from "dotenv";
import { GuildService } from "./level-1/guild/guild.service";
import axios from "axios";

configDotenv();

async function main() {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const GUILD_ID = process.env.GUILD_ID;

  const guildService = new GuildService(
    axios,
    BOT_TOKEN as string,
    GUILD_ID as string,
  );

  console.log(await guildService.getGuildById({}));
}

main();
