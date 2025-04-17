import { tags } from "typia";
import { ICommon } from "../../common/structure/ICommon";

export namespace IGuildService {
  type GuildFeature =
    | "ANIMATED_BANNER"
    | "ANIMATED_ICON"
    | "APPLICATION_COMMAND_PERMISSIONS_V2"
    | "AUTO_MODERATION"
    | "BANNER"
    | "COMMUNITY"
    | "CREATOR_MONETIZABLE_PROVISIONAL"
    | "CREATOR_STORE_PAGE"
    | "DEVELOPER_SUPPORT_SERVER"
    | "DISCOVERABLE"
    | "FEATURABLE"
    | "INVITES_DISABLED"
    | "INVITE_SPLASH"
    | "MEMBER_VERIFICATION_GATE_ENABLED"
    | "MORE_SOUNDBOARD"
    | "MORE_STICKERS"
    | "NEWS"
    | "PARTNERED"
    | "PREVIEW_ENABLED"
    | "RAID_ALERTS_DISABLED"
    | "ROLE_ICONS"
    | "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE"
    | "ROLE_SUBSCRIPTIONS_ENABLED"
    | "SOUNDBOARD"
    | "TICKETED_EVENTS_ENABLED"
    | "VANITY_URL"
    | "VERIFIED"
    | "VIP_REGIONS"
    | "WELCOME_SCREEN_ENABLED";

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

    /**
     * icon hash
     */
    icon: ICommon.IIcon["hash"] | null;

    /**
     * icon hash, returned when in the template object
     */
    icon_hash?: ICommon.IIcon["hash"] | null;

    /**
     * The guild's splash image hash.
     * https://cdn.discordapp.com/splashes/{guild_id}/{splash}.{format}?size={size}
     */
    splash: ICommon.ISplash["hash"] | null;

    /**
     * The discovery splash image hash used on discovery pages.
     * https://cdn.discordapp.com/discovery-splashes/{guild_id}/{discovery_splash}.{format}?size={size}
     */
    discovery_splash?: ICommon.ISplash["hash"] | null;

    /**
     * true if the user is the owner of the guild
     *
     * ! (*)This field is only available when using OAuth2 with specific scopes.
     */
    owner: never;

    /**
     * The user ID of the guild owner.
     */
    owner_id: string;

    /**
     * total permissions for the user in the guild (excludes overwrites and implicit permissions)
     *
     * ! (*)This field is only available when using OAuth2 with specific scopes.
     */
    permissions: never;

    /**
     * @deprecated Region is deprecated and no longer used.
     *
     * ! (**) requires elevated permissions or privileged intents to be returned.
     */
    region: never;

    /**
     * The ID of the AFK voice channel.
     */
    afk_channel_id: string | null;

    /**
     * AFK timeout in seconds.
     */
    afk_timeout: number;

    /**
     * true if the server widget is enabled
     */
    widget_enabled?: boolean;

    /**
     * the channel id that the widget will generate an invite to, or null if set to no invite
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
     * Default notification level for the guild.
     *
     * - 0(ALL_MESSAGES): members will receive notifications for all messages by default
     * - 1(ONLY_MENTIONS): members will receive notifications only for messages that `@mention` them by default
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-default-message-notification-level
     */
    default_message_notifications: 0 | 1;

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
     * roles in the guild
     */
    roles: ICommon.IRole[];

    /**
     * custom guild emojis
     */
    emojis: IGuildEmoji[];

    /**
     * Enabled guild features.
     *
     * This is an array of feature flags that indicate which special capabilities are enabled for the guild.
     *
     * - "ANIMATED_BANNER": guild has access to set an animated guild banner image
     * - "ANIMATED_ICON": guild has access to set an animated guild icon
     * - "APPLICATION_COMMAND_PERMISSIONS_V2": guild is using the old permissions configuration behavior
     * - "AUTO_MODERATION": guild has set up auto moderation rules
     * - "BANNER": guild has access to set a guild banner image
     * - "COMMUNITY": guild can enable welcome screen, Membership Screening, stage channels and discovery, and receives community updates
     * - "CREATOR_MONETIZABLE_PROVISIONAL": guild has enabled monetization
     * - "CREATOR_STORE_PAGE": guild has enabled the role subscription promo page
     * - "DEVELOPER_SUPPORT_SERVER": guild has been set as a support server on the App Directory
     * - "DISCOVERABLE": guild is able to be discovered in the directory
     * - "FEATURABLE": guild is able to be featured in the directory
     * - "INVITES_DISABLED": guild has paused invites, preventing new users from joining
     * - "INVITE_SPLASH": guild has access to set an invite splash background
     * - "MEMBER_VERIFICATION_GATE_ENABLED": guild has enabled Membership Screening
     * - "MORE_SOUNDBOARD": guild has increased custom soundboard sound slots
     * - "MORE_STICKERS": guild has increased custom sticker slots
     * - "NEWS": guild has access to create announcement channels
     * - "PARTNERED": guild is partnered
     * - "PREVIEW_ENABLED": guild can be previewed before joining via Membership Screening or the directory
     * - "RAID_ALERTS_DISABLED": guild has disabled alerts for join raids in the configured safety alerts channel
     * - "ROLE_ICONS": guild is able to set role icons
     * - "ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE": guild has role subscriptions that can be purchased
     * - "ROLE_SUBSCRIPTIONS_ENABLED": guild has enabled role subscriptions
     * - "SOUNDBOARD": guild has created soundboard sounds
     * - "TICKETED_EVENTS_ENABLED": guild has enabled ticketed events
     * - "VANITY_URL": guild has access to set a vanity URL
     * - "VERIFIED": guild is verified
     * - "VIP_REGIONS": guild has access to set 384kbps bitrate in voice (previously VIP voice servers)
     * - "WELCOME_SCREEN_ENABLED": guild has enabled the welcome screen
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-mfa-level
     */
    features: GuildFeature[];

    /**
     * Multi-factor authentication level for the guild.
     *
     * - 0(NONE): guild has no MFA/2FA requirement for moderation actions
     * - 1(ELEVATED): guild has a 2FA requirement for moderation actions
     *
     */
    mfa_level: 0 | 1;

    /**
     * The application ID of the guild creator, if bot-created.
     */
    application_id: string | null;

    /**
     * 	the id of the channel where guild notices such as welcome messages and boost events are posted
     */
    system_channel_id: string | null;

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
     * the id of the channel where Community guilds can display rules and/or guidelines
     */
    rules_channel_id: string | null;

    /**
     * the maximum number of presences for the guild (null is always returned, apart from the largest of guilds)
     */
    max_presences?: number | null;

    /**
     * the maximum number of members for the guild
     */
    max_members?: number;

    /**
     * the vanity url code for the guild
     */
    vanity_url_code: string | null;

    /**
     * the description of a guild
     */
    description: string | null;

    /**
     * The guild's banner image hash.
     * See: https://cdn.discordapp.com/banners/{guild_id}/{banner}.{format}?size={size}
     */
    banner: ICommon.IBanner["hash"] | null;

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
     * Preferred locale of the guild.
     */
    preferred_locale: string;

    /**
     * Channel ID of the public updates channel.
     */
    public_updates_channel_id?: string | null;

    /**
     * Maximum number of users allowed in a video channel.
     */
    max_video_channel_users?: number;

    /**
     * the maximum amount of users in a stage video channel
     */
    max_stage_video_channel_users?: number;

    /**
     * approximate number of members in this guild, returned from the `GET /guilds/<id>` and `/users/@me/guilds` endpoints when `with_counts` is true
     */
    approximate_member_count?: number;

    /**
     * 	approximate number of non-offline members in this guild, returned from the `GET /guilds/<id>` and `/users/@me/guilds` endpoints when with_counts is true
     */
    approximate_presence_count?: number;

    welcome_screen?: null; // TODO

    /**
     * guild NSFW level
     *
     * 0: DEFAULT
     * 1: EXPLICIT
     * 2: SAFE
     * 3:  AGE_RESTRICTED
     *
     * @link https://discord.com/developers/docs/resources/guild#guild-object-guild-nsfw-level
     */
    nsfw_level: 0 | 1 | 2 | 3;

    stickers?: ""[]; // TODO

    /**
     * whether the guild has the boost progress bar enabled
     */
    premium_progress_bar_enabled: boolean;

    /**
     * the id of the channel where admins and moderators of Community guilds receive safety alerts from Discord
     */
    safety_alerts_channel_id: string | null;

    /**
     * the incidents data for this guild
     */
    incidents_data: null; // TODO
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
  }
}
