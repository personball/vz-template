module.exports = {
    aliases: {
        "@node_modules": "./node_modules",
        "@libs": "./wwwroot/libs"
    },
    clean: [
        "@libs",
        "!@libs/**/foo.txt"
    ],
    mappings: {
        "@node_modules/@abp/core/abp.css":"@libs/abp/core/",
        "@node_modules/moment/min":"@libs/moment/",
        "@node_modules/bootstrap/dist/css/bootstrap.css": "@libs/bootstrap/css/",
        "@node_modules/bootstrap/dist/js/bootstrap.bundle.js": "@libs/bootstrap/js/",
        "@node_modules/bootstrap-datepicker/dist/locales/*.*": "@libs/bootstrap-datepicker/locales/",
        "@node_modules/bootstrap-v4-rtl/dist/**/*": "@libs/bootstrap-v4-rtl/dist/"
    }
};
