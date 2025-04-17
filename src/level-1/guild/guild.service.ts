import { Axios } from "axios";
import { IGuildService } from "./structure/IGuildService";

/**
 * Guilds in Discord represent an isolated collection of users and channels,
 * and are often referred to as "servers" in the UI.
 *
 * @link https://discord.com/developers/docs/resources/guild#guild-resource
 */
export class GuildService {
  constructor(
    private readonly axios: Axios,
    private readonly BOT_TOKEN: string,
    private readonly GUILD_ID: string,
  ) {}

  /**
   * Returns the guild object for the given id.
   * If with_counts is set to true,
   * this endpoint will also return approximate_member_count and approximate_presence_count for the guild.
   *
   * @link https://discord.com/developers/docs/resources/guild#get-guild
   */
  public async getGuildById(
    input: IGuildService.IGetGuildInput,
  ): Promise<IGuildService.IGuild> {
    const { with_counts = false } = input;
    const url = `https://discord.com/api/v10/guilds/${this.GUILD_ID}`;
    const response = await this.axios.get(url, {
      headers: {
        Authorization: `Bot ${this.BOT_TOKEN}`,
      },
      params: {
        with_counts,
      },
    });

    return response.data;
  }
}
