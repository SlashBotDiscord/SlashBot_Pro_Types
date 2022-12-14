export enum ButtonRoleRequiredRolesMode {
    AT_LEAST_ONE = 0,
    ALL = 1
}

export enum PatreonPremiumTiers {
    "None" = 0,
    "Support" = 1,
    "Premium Support" = 2,
    "Superior Support" = 3,
    "Crazy Support" = 4,
    "Godlike Support" = 5
}

export const ButtonRoleTypes = Object.freeze({
    TOGGLE: 0,
    SWITCH: 1,
    ADD: 2,
    REMOVE: 4
});

export const SystemLimits = Object.freeze({
    BUTTONROLE_ROLES: 100,
    BUTTONROLE_REQUIRED: 100,
    SELECTMENUROLE_OPTION_ROLES: 100,
    SELECTMENUROLE_OPTION_REQUIRED: 100
});

export const ButtonRolePremiumAmount = Object.freeze({
    "0": 10,
    "1": 100,
    "2": 100,
    "3": 100,
    "4": 100,
    "5": 1000
});

export const SelectMenuRolePremiumAmount = Object.freeze({
    "0": 5,
    "1": 50,
    "2": 50,
    "3": 50,
    "4": 50,
    "5": 500
});

export const FormPremiumAmount = Object.freeze({
    "0": 1,
    "1": 10,
    "2": 25,
    "3": 35,
    "4": 50,
    "5": 100
});

export const PremiumGuildsPerTier = Object.freeze({
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 6,
})

export interface ButtonRoleData {
    id?: string,
    roles_toggle: string[],
    roles_add: string[],
    roles_remove: string[],
    roles_required: string[],
    guild_id: string,
    logchannel: string;
    require_mode: ButtonRoleRequiredRolesMode,
    notification: boolean,
    users_limit: number,
    users_left: number,
    users_clicked: string[],
    paused?: boolean
}

export interface Form {
    id: string,
    title: string,
    guild_id: string,
    logchannel?: string,
    question_1: string,
    question_2?: string,
    question_3?: string,
    question_4?: string,
    question_5?: string,
    editable: boolean,
    paused?: boolean
}

export interface FormResponse {
    id: string,
    form_id: string,
    user_id: string,
    guild_id: string,
    answer_1: string,
    answer_2?: string,
    answer_3?: string,
    answer_4?: string,
    answer_5?: string,
    edited: boolean,
    submitted_at: string,
}

export interface PremiumUser {
    index: number,
    expires_at: string,
    user_id: string,
    tier: number
}

export interface PremiumGuild {
    index: number,
    expires_at: string,
    user_id?: string,
    guild_id: string
}
