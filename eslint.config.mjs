import pluginJs from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
    {
        languageOptions: { globals: { ...globals.browser, ...globals.node } },
    },
    { ignores: ['dist', 'node_modules'] },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
];
