const ButtonRoleTypes = Object.freeze({
    TOGGLE: 0,
    SWITCH: 1,
    ADD: 2,
    REMOVE: 4
} as const)

enum ButtonRoleRequiredRolesMode{
    AT_LEAST_ONE = 0,
    ALL = 1
}

const ButtonRoleLimits = Object.freeze({
    ROLES: 100
}as const)

interface ButtonRoleData {
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

interface PremiumUser {
	index: number,
	expires_at: string,
	user_id: string,
	tier: number
}

interface PremiumGuild {
	index: number,
	expires_at: string,
	user_id?: string,
	guild_id: string
}

export {
    ButtonRoleTypes,
    ButtonRoleRequiredRolesMode,
    ButtonRoleLimits,
    ButtonRoleData,
    PremiumUser,
    PremiumGuild
}