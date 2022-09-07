export declare enum ButtonRoleRequiredRolesMode {
    AT_LEAST_ONE = 0,
    ALL = 1
}
export declare enum PatreonPremiumTiers {
    "None" = 0,
    "Support" = 1,
    "Premium Support" = 2,
    "Superior Support" = 3,
    "Crazy Support" = 4,
    "Godlike Support" = 5
}
export declare const ButtonRoleTypes: Readonly<{
    TOGGLE: 0;
    SWITCH: 1;
    ADD: 2;
    REMOVE: 4;
}>;
export declare const ButtonRoleLimits: Readonly<{
    ROLES: 100;
}>;
export declare const ButtonRolePremiumAmount: Readonly<{
    "0": 10;
    "1": 100;
    "2": 100;
    "3": 100;
    "4": 100;
    "5": 1000;
}>;
export interface ButtonRoleData {
    id?: string;
    roles_toggle: string[];
    roles_add: string[];
    roles_remove: string[];
    roles_required: string[];
    guild_id: string;
    require_mode: ButtonRoleRequiredRolesMode;
    notification: boolean;
    users_limit: number;
    users_left: number;
    users_clicked: string[];
    paused?: boolean;
}
export interface PremiumUser {
    index: number;
    expires_at: string;
    user_id: string;
    tier: number;
}
export interface PremiumGuild {
    index: number;
    expires_at: string;
    user_id?: string;
    guild_id: string;
}
