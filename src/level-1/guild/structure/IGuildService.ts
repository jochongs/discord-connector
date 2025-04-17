import { tags } from "typia";
import { ICommon } from "../../common/structure/ICommon";

export namespace IGuildService {
  /**
   * @link https://discord.com/developers/docs/resources/guild#guild-resource
   *
   * Guilds in Discord represent an isolated collection of users and channels,
   * and are often referred to as "servers" in the UI.
   */
  export interface IGuild {
    /**
     * The unique identifier of the guild.
     */
    id: string;

    /**
     * The name of the guild.
     * Must be 2-100 characters, excluding leading/trailing whitespace.
     */
    name: string & tags.MinLength<2> & tags.MaxLength<100>;

    icon?: ICommon.IIcon["hash"] | null;

    /**
     * The description of the guild (null if not set).
     */
    description?: string | null;

    /**
     * The guild's splash image hash.
     * See: https://cdn.discordapp.com/splashes/{guild_id}/{splash}.{format}?size={size}
     */
    splash?: ICommon.ISplash["hash"];

    /**
     * The discovery splash image hash used on discovery pages.
     * See: https://cdn.discordapp.com/discovery-splashes/{guild_id}/{discovery_splash}.{format}?size={size}
     */
    discovery_splash?: ICommon.ISplash["hash"];

    /**
     * Approximate number of members in the guild (when with_counts is true).
     */
    approximate_member_count?: number;

    /**
     * Approximate number of online members in the guild (when with_counts is true).
     */
    approximate_presence_count?: number;

    /**
     * Enabled guild features (e.g., "COMMUNITY", "NEWS").
     */
    features: string[];

    /**
     * Array of emojis defined in the guild.
     */
    emojis: IGuildEmoji[];

    /**
     * The guild's banner image hash.
     * See: https://cdn.discordapp.com/banners/{guild_id}/{banner}.{format}?size={size}
     */
    banner?: ICommon.IBanner["hash"];

    /**
     * The user ID of the guild owner.
     */
    owner_id: string;

    /**
     * The application ID of the guild creator, if bot-created.
     */
    application_id?: string | null;

    /**
     * @deprecated Region is deprecated and no longer used.
     */
    region?: string | null;

    /**
     * The ID of the AFK voice channel.
     */
    afk_channel_id: string | null;

    /**
     * AFK timeout in seconds.
     */
    afk_timeout: number;

    /**
     * The ID of the system channel (used for join/boost messages).
     */
    system_channel_id: string | null;

    /**
     * Whether the guild widget is enabled.
     */
    widget_enabled?: boolean;

    /**
     * The ID of the channel associated with the widget.
     */
    widget_channel_id?: string | null;

    /**
     * Verification level required for the guild.
     */
    verification_level: number;

    /**
     * List of roles in the guild.
     */
    roles: ICommon.IRole[];

    /**
     * Default notification level for the guild.
     */
    default_message_notifications: number;

    /**
     * Multi-factor authentication level for the guild.
     */
    mfa_level: number;

    /**
     * Explicit content filter level.
     */
    explicit_content_filter: number;

    /**
     * Maximum number of presences (if set).
     */
    max_presences?: number | null;

    /**
     * Maximum number of members.
     */
    max_members?: number;

    /**
     * Maximum number of users allowed in a video channel.
     */
    max_video_channel_users?: number;

    /**
     * The server's vanity invite code (if enabled).
     */
    vanity_url_code?: string | null;

    /**
     * The server's Nitro boost level.
     */
    premium_tier: number;

    /**
     * Number of users who boosted the guild.
     */
    premium_subscription_count?: number;

    /**
     * System channel flags (bitwise).
     */
    system_channel_flags: number;

    /**
     * Preferred locale of the guild.
     */
    preferred_locale: string;

    /**
     * Channel ID of the rules channel.
     */
    rules_channel_id?: string | null;

    /**
     * Channel ID of the public updates channel.
     */
    public_updates_channel_id?: string | null;

    /**
     * Channel ID of the safety alerts channel.
     */
    safety_alerts_channel_id?: string | null;
  }

  export interface IGuildEmoji {
    /**
     * The ID of the emoji (snowflake).
     */
    id: string;

    /**
     * The emoji name.
     * Can be null only in reaction emoji objects.
     */
    name?: string | null;

    /**
     * Role IDs allowed to use this emoji.
     */
    roles: string[];

    /**
     * Whether this emoji must be wrapped in colons.
     */
    require_colons: boolean;

    /**
     * Whether this emoji is managed by an integration.
     */
    managed: boolean;

    /**
     * Whether this emoji is animated.
     */
    animated: boolean;

    /**
     * Whether this emoji is available for use.
     */
    available: boolean;
  }

  export interface IGetGuildInput {
    /**
     * guild id
     */
    guild_id: IGuild["id"];

    /**
     * when true, will return approximate member and presence counts for the guild
     *
     * @default false
     */
    with_counts?: boolean;
  }
}
