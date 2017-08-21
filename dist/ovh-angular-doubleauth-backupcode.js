angular.module("ovh-angular-doubleauth-backupcode", ["ovh-angular-proxy-request"]);

angular.module("ovh-angular-doubleauth-backupcode").service("ovh-doubleauth-backupCode.backupCode", ["ovh-proxy-request.proxy", function (api) {
    "use strict";

    var backupCodeBasePath = "me/accessRestriction/backupCode";
    var preparePath = function () {
        var tabToJoin = [];
        if (api.pathPrefix()) {
            tabToJoin.push(api.pathPrefix());
        }
        tabToJoin.push(backupCodeBasePath);

        return tabToJoin.join("/").replace(/\/\//g, "/");
    };

    this.get = function () {
        return api.get(preparePath());
    };

    this.delete = function () {
        return api.delete(preparePath());
    };

    this.post = function () {
        return api.post(preparePath());
    };

    this.enable = function (backupCode) {
        return api.post([preparePath(), "enable"].join("/"), {
            code: backupCode
        });
    };

    this.validate = function (backupCode) {
        return api.post([preparePath(), "validate"].join("/"), {
            code: backupCode
        });
    };

    this.disable = function (backupCode) {
        return api.post([preparePath(), "disable"].join("/"), {
            code: backupCode
        });
    };
}]);
