export enum ROUTES {
    HOME = '/',
    UNIT_TESTS = '/unit-tests',
    UNIT_TEST_EXAMPLE = '/unit-tests/:id(1-by-1|it-each)',
    INTEGRATION_TESTS = '/integration-tests',
    INTEGRATION_TEST_EXAMPLE = '/integration-tests/:id(components-integration|engineer-approach|api-testing|api-with-nock-testing)',
    API_TESTING_COUNTRIES = '/integration-tests/api-testing/countries',
    API_TESTING_COUNTRIES_AIRPORTS = '/integration-tests/api-testing/countries/:id/airports',
    API_WITH_NOCK_TESTING_COUNTRIES = '/integration-tests/api-with-nock-testing/countries',
    API_WITH_NOCK_TESTING_COUNTRIES_AIRPORTS = '/integration-tests/api-with-nock-testing/countries/:id/airports',
}
