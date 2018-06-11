module.exports = {
    options: {
        func: {
            list: ['i18next.t', 'i18n.t'],
        },
        defaultValue(lang, ns, key) {
            return key;
        },
        resource: {
            loadPath: 'src/i18n/{{lng}}/{{ns}}.json',
            savePath: 'src/i18n/{{lng}}/{{ns}}.json',
        },
    },
};
