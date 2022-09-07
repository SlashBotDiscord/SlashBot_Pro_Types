"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonRolePremiumAmount = exports.ButtonRoleLimits = exports.ButtonRoleTypes = exports.PatreonPremiumTiers = exports.ButtonRoleRequiredRolesMode = void 0;
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
exports.ButtonRoleLimits = Object.freeze({
    ROLES: 100
});
exports.ButtonRolePremiumAmount = Object.freeze({
    "0": 10,
    "1": 100,
    "2": 100,
    "3": 100,
    "4": 100,
    "5": 1000
});
