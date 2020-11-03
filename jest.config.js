const IS_CI = Boolean(process.env.CI);

module.exports = {
    reporters: [
        'default',
        ...(IS_CI
            ? [
                [
                    'jest-junit',
                    {
                        outputDirectory: './reports',
                        outputName: 'junit.xml',
                        classNameTemplate: '{classname}',
                        titleTemplate: '{title}',
                        ancestorSeparator: ' ',
                        suiteNameTemplate: '{filename}',
                    },
                ],
            ]
            : []),
    ],

    collectCoverage: IS_CI,
    collectCoverageFrom: ['./src/**/*.{js,jsx,ts,tsx}'],

    projects: [
        {
            displayName: 'unit',
            testEnvironment: 'node',
            testMatch: [
                "<rootDir>test/views/**/unit/**/*.test.{ts,tsx}",
                "<rootDir>test/unit/**/*.test.{ts,tsx}",
            ],
            setupFilesAfterEnv: ['./test/setupJestDom.ts'],
            moduleNameMapper: {
                '\\.css$': 'identity-obj-proxy',
            }
        },
        {
            displayName: 'integration',
            testEnvironment: 'jest-environment-jsdom-sixteen',
            testMatch: [
                "<rootDir>test/views/**/integration/**/*.test.{ts,tsx}",
                "<rootDir>test/integration/**/*.test.{ts,tsx}",
            ],
            restoreMocks: true,
            clearMocks: true,
            setupFilesAfterEnv: ['./test/setupJestDom.ts'],
            moduleNameMapper: {
                '\\css$': 'identity-obj-proxy',
            },
        },
    ],
};