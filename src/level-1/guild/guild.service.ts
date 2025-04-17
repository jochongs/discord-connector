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

    const response = await this.axios.get(
      `https://discord.com/api/v10/guilds/${this.GUILD_ID}`,
      {
        headers: {
          Authorization: `Bot ${this.BOT_TOKEN}`,
        },
        params: {
          with_counts,
        },
      },
    );

    return response.data;
  }

  /**
   * Modify a guild's settings.
   * Requires the MANAGE_GUILD permission.
   * Returns the updated guild object on success.
   * Fires a Guild Update Gateway event.
   *
   * @link https://discord.com/developers/docs/resources/guild#modify-guild
   */
  public async updateGuildById(
    input: IGuildService.IUpdateGuildInput,
  ): Promise<IGuildService.IGuild> {
    const response = await this.axios.patch(
      `https://discord.com/api/v10/guilds/${this.GUILD_ID}`,
      input,
      {
        headers: {
          Authorization: `Bot ${this.BOT_TOKEN}`,
          "X-Audit-Log-Reason": input.auditLogReason
            ? input.auditLogReason
            : undefined,
        },
      },
    );

    return response.data;
  }
}
