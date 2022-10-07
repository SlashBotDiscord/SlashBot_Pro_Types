"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PremiumGuildsPerTier = exports.FormPremiumAmount = exports.SelectMenuRolePremiumAmount = exports.ButtonRolePremiumAmount = exports.SystemLimits = exports.ButtonRoleTypes = exports.PatreonPremiumTiers = exports.ButtonRoleRequiredRolesMode = void 0;
var ButtonRoleRequiredRolesMode;
(function (ButtonRoleRequiredRolesMode) {
    ButtonRoleRequiredRolesMode[ButtonRoleRequiredRolesMode["AT_LEAST_ONE"] = 0] = "AT_LEAST_ONE";
    ButtonRoleRequiredRolesMode[ButtonRoleRequiredRolesMode["ALL"] = 1] = "ALL";
})(ButtonRoleRequiredRolesMode = exports.ButtonRoleRequiredRolesMode || (exports.ButtonRoleRequiredRolesMode = {}));
var PatreonPremiumTiers;
(function (PatreonPremiumTiers) {
    PatreonPremiumTiers[PatreonPremiumTiers["None"] = 0] = "None";
    PatreonPremiumTiers[PatreonPremiumTiers["Support"] = 1] = "Support";
    PatreonPremiumTiers[PatreonPremiumTiers["Premium Support"] = 2] = "Premium Support";
    PatreonPremiumTiers[PatreonPremiumTiers["Superior Support"] = 3] = "Superior Support";
    PatreonPremiumTiers[PatreonPremiumTiers["Crazy Support"] = 4] = "Crazy Support";
    PatreonPremiumTiers[PatreonPremiumTiers["Godlike Support"] = 5] = "Godlike Support";
})(PatreonPremiumTiers = exports.PatreonPremiumTiers || (exports.PatreonPremiumTiers = {}));
exports.ButtonRoleTypes = Object.freeze({
    TOGGLE: 0,
    SWITCH: 1,
    ADD: 2,
    REMOVE: 4
});
exports.SystemLimits = Object.freeze({
    BUTTONROLE_ROLES: 100,
    BUTTONROLE_REQUIRED: 100,
    SELECTMENUROLE_OPTION_ROLES: 100,
    SELECTMENUROLE_OPTION_REQUIRED: 100
});
exports.ButtonRolePremiumAmount = Object.freeze({
    "0": 10,
    "1": 100,
    "2": 100,
    "3": 100,
    "4": 100,
    "5": 1000
});
exports.SelectMenuRolePremiumAmount = Object.freeze({
    "0": 5,
    "1": 50,
    "2": 50,
    "3": 50,
    "4": 50,
    "5": 500
});
exports.FormPremiumAmount = Object.freeze({
    "0": 1,
    "1": 10,
    "2": 25,
    "3": 35,
    "4": 50,
    "5": 100
});
exports.PremiumGuildsPerTier = Object.freeze({
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 6,
});
