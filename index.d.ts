declare interface ButtonRoleTypes {
    TOGGLE: 0,
    SWITCH: 1,
    ADD: 2,
    REMOVE: 4
}

declare enum ButtonRoleRequiredRolesMode{
    AT_LEAST_ONE = 0,
    ALL = 1
}

declare interface ButtonRoleLimits {
    ROLES: 100
}

declare interface ButtonRolePremiumAmount {
    0: 10,
    1: 100,
    2: 100,
    3: 100,
    4: 100,
    5: 1000
}

declare interface ButtonRoleData {
    id?: string,
    roles_toggle: string[],
    roles_add: string[],
    roles_remove: string[],
    roles_required: string[],
    guild_id: string,
    require_mode: ButtonRoleRequiredRolesMode,
    notification: boolean,
    users_limit: number,
    users_left: number,
    users_clicked: string[],
    paused?: boolean
}

declare interface PremiumUser {
	index: number,
	expires_at: string,
	user_id: string,
	tier: number
}

declare interface PremiumGuild {
	index: number,
	expires_at: string,
	user_id?: string,
	guild_id: string
}

declare enum PatreonPremiumTiers {
    "Support" = 0,
    "Premium Support" = 1,
    "Superior Support" = 2,
    "Crazy Support" = 3,
    "Godlike Support" = 4
}

export {
    ButtonRoleTypes,
    ButtonRoleRequiredRolesMode,
    ButtonRoleLimits,
    ButtonRoleData,
    PremiumUser,
    PremiumGuild,
    ButtonRolePremiumAmount,
    PatreonPremiumTiers
}