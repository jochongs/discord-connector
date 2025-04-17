import { tags } from "typia";

export namespace ICommon {
  export interface IIcon {
    /**
     * The guild's icon image **hash**.
     *
     * This is not a direct URL. To render the image, you must construct the CDN URL manually:
     *   `https://cdn.discordapp.com/icons/{guild_id}/{icon}.{format}?size={size}`
     *
     * - `format` can be `png`, `jpg`, `webp`, or `gif`
     * - `size` must be a power of 2 between 16 and 4096 (optional)
     * - If the hash starts with `a_`, it represents an animated GIF
     *
     * If `null`, the guild has no custom icon.
     *
     * @example
     * hash = "a_1269e74af4df7417b13759eae50c83dc"
     * // => https://cdn.discordapp.com/icons/1234567890/a_1269e74af4df7417b13759eae50c83dc.gif
     */
    hash: string;
  }

  export interface ISplash {
    /**
     * The guild's splash image **hash**.
     *
     * This is not a direct URL. Construct the CDN URL manually:
     *   `https://cdn.discordapp.com/splashes/{guild_id}/{splash}.{format}?size={size}`
     *
     * - `format` can be `png`, `jpg`, or `webp` (no gif)
     * - `size` must be a power of 2 between 16 and 4096 (optional)
     *
     * If `null`, the guild has no splash image.
     */
    hash: string;
  }

  export interface IBanner {
    /**
     * The guild's banner image **hash**.
     *
     * This is not a direct URL. Construct the CDN URL manually:
     *   `https://cdn.discordapp.com/banners/{guild_id}/{banner}.{format}?size={size}`
     *
     * - `format` can be `png`, `jpg`, `webp`, or `gif`
     * - `size` must be a power of 2 between 16 and 4096 (optional)
     * - If the hash starts with `a_`, it represents an animated GIF
     *
     * If `null`, the guild has no banner image.
     */
    hash: string;
  }

  /**
   * @link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
   *
   * Roles represent a set of permissions attached to a group of users. Roles have names, colors,
   * and can be "pinned" to the side bar, causing their members to be listed separately.
   * Roles can have separate permission profiles for the global context (guild) and channel context.
   * The `@everyone` role has the same ID as the guild it belongs to.
   */
  export interface IRole {
    /**
     * The role ID (snowflake).
     */
    id: string;

    /**
     * The name of the role.
     */
    name: string;

    /**
     * Integer representation of the role's color (0 = no color).
     */
    color: number & tags.Type<"int32">;

    /**
     * Whether this role is pinned in the user listing.
     */
    hoist: boolean;

    /**
     * The icon hash for the role, if it has one.
     * Construct CDN URL: `https://cdn.discordapp.com/role-icons/{role_id}/{icon}.{format}?size={size}`
     */
    icon?: string | null;

    /**
     * A unicode emoji used as the role icon, if set.
     */
    unicode_emoji?: string | null;

    /**
     * Position of this role in the role list.
     * (roles with the same position are sorted by id)
     */
    position: number;

    /**
     * Bitwise permission flags granted to members of this role.
     */
    permissions: string;

    /**
     * Whether this role is managed by an integration.
     */
    managed: boolean;

    /**
     * Whether this role can be mentioned by users.
     */
    mentionable: boolean;

    /**
     * Optional object containing metadata about the role.
     */
    tags?: Record<string, unknown>;

    /**
     * Bitfield representing role configuration flags.
     */
    flags: number;
  }

  /**
   * @link https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure
   *
   * Tags with type null represent booleans.
   * They will be present and set to null if they are "true",
   * and will be not present if they are "false".
   */
  export interface IRoleTags {
    /**
     * The ID of the bot this role belongs to (if any).
     */
    bot_id?: string;

    /**
     * The ID of the integration this role belongs to (if any).
     */
    integration_id?: string;

    /**
     * Whether this role is the guild's Nitro Booster role (true if present and null).
     */
    premium_subscriber?: null;

    /**
     * The ID of this role's subscription SKU and listing.
     */
    subscription_listing_id?: string;

    /**
     * Whether this role is available for purchase (true if present and null).
     */
    available_for_purchase?: null;

    /**
     * Whether this role is a guild's linked role (true if present and null).
     */
    guild_connections?: null;
  }
}
