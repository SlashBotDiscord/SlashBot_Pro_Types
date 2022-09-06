const ButtonRoleTypes = Object.freeze({
    TOGGLE: 0,
    SWITCH: 1,
    ADD: 2,
    REMOVE: 4
})

const ButtonRoleRequiredRolesMode = Object.freeze({
    AT_LEAST_ONE: 0,
    ALL: 1,
    0: "AT_LEAST_ONE",
    1: "ALL"
})

const ButtonRoleLimits = Object.freeze({
    ROLES: 100
})

const ButtonRolePremiumAmount = Object.freeze({
    0: 10,
    1: 100,
    2: 100,
    3: 100,
    4: 100,
    5: 1000
})

const PatreonPremiumTiers = Object.freeze({
    0: "Support",
    1: "Premium Support",
    2: "Superior Support",
    3: "Crazy Support",
    4: "Godlike Support"
})

module.exports = {
    ButtonRoleTypes,
    ButtonRoleRequiredRolesMode,
    ButtonRoleLimits,
    ButtonRolePremiumAmount
}