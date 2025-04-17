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
    splash?: ICommon.ISplash["hash"] | null;

    /**
     * The discovery splash image hash used on discovery pages.
     * See: https://cdn.discordapp.com/discovery-splashes/{guild_id}/{discovery_splash}.{format}?size={size}
     */
    discovery_splash?: ICommon.ISplash["hash"] | null;

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
    banner?: ICommon.IBanner["hash"] | null;

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
     *
     * - 0(NONE): unrestricted
     * - 1(LOW): must have verified email on account
     * - 2(MEDIUM): must be registered on Discord for longer than 5 minutes
     * - 3(HIGH): must be a member of the server for longer than 10 minutes
     * - 4(VERY_HIGH): must have a verified phone number
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-verification-level
     */
    verification_level: 0 | 1 | 2 | 3 | 4;

    /**
     * List of roles in the guild.
     */
    roles: ICommon.IRole[];

    /**
     * Default notification level for the guild.
     *
     * - 0(ALL_MESSAGES): members will receive notifications for all messages by default
     * - 1(ONLY_MENTIONS): members will receive notifications only for messages that `@mention` them by default
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
     */
    default_message_notifications: 0 | 1;

    /**
     * Multi-factor authentication level for the guild.
     *
     * - 0(NONE): guild has no MFA/2FA requirement for moderation actions
     * - 1(ELEVATED): guild has a 2FA requirement for moderation actions
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
     */
    mfa_level: 0 | 1;

    /**
     * Explicit content filter level.
     *
     * - 0(DISABLED): media content will not be scanned
     * - 1(MEMBERS_WITHOUT_ROLES): media content sent by members without roles will be scanned
     * - 2(ALL_MEMBERS): media content sent by all members will be scanned
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-explicit-content-filter-level
     */
    explicit_content_filter: 0 | 1 | 2;

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
     *
     * - 0(NONE): guild has not unlocked any Server Boost perks
     * - 1(TIER_1): guild has unlocked Server Boost level 1 perks
     * - 2(TIER_2): guild has unlocked Server Boost level 2 perks
     * - 3(TIER_3): guild has unlocked Server Boost level 3 perks
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-premium-tier
     */
    premium_tier: 0 | 1 | 2 | 3;

    /**
     * Number of users who boosted the guild.
     */
    premium_subscription_count?: number;

    /**
     * System channel settings configured with bitwise flags.
     *
     * These flags control which system messages are suppressed in the server's system channel.
     * Multiple flags may be combined using bitwise OR.
     *
     * - 1 << 0 (1): SUPPRESS_JOIN_NOTIFICATIONS — suppress member join messages
     * - 1 << 1 (2): SUPPRESS_PREMIUM_SUBSCRIPTIONS — suppress Nitro boost messages
     * - 1 << 2 (4): SUPPRESS_GUILD_REMINDER_NOTIFICATIONS — suppress server setup tips
     * - 1 << 3 (8): SUPPRESS_JOIN_NOTIFICATION_REPLIES — hide join sticker reply buttons
     * - 1 << 4 (16): SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATIONS — suppress role subscription messages
     * - 1 << 5 (32): SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES — hide role subscription sticker replies
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-system-channel-flags
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
     * when true, will return approximate member and presence counts for the guild
     *
     * @default false
     */
    with_counts?: boolean;
  }

  export interface IUpdateGuildInput
    extends Partial<
      Pick<
        IGuild,
        | "name"
        | "region"
        | "verification_level"
        | "default_message_notifications"
        | "explicit_content_filter"
        | "afk_channel_id"
        | "afk_timeout"
        | "icon"
        | "owner_id"
        | "splash"
        | "discovery_splash"
        | "banner"
        | "system_channel_id"
        | "system_channel_flags"
        | "rules_channel_id"
        | "public_updates_channel_id"
        | "preferred_locale"
        | "features"
        | "description"
        | "safety_alerts_channel_id"
      >
    > {
    /**
     * Optional reason to include in the Discord audit log.
     *
     * This value will be sent as the `X-Audit-Log-Reason` header.
     * It allows moderators and administrators to see why a particular
     * action was performed, such as renaming a guild or banning a user.
     *
     * Note:
     * - Must be URL-encoded (handled automatically by most HTTP clients).
     * - Only visible in the server's audit log if the bot has sufficient permissions.
     */
    auditLogReason?: string;

    /**
     * whether the guild's boost progress bar should be enabled
     */
    premium_progress_bar_enabled?: boolean;
  }
}
