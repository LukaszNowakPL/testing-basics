# Api testing - Integration testing

## Application

The application prints list of countries and list of airports for selected country. It allows user to add airports. After such action completed successfully the list is refreshed.

## Architecture highlights

Application uses `Formik` and `React-router` to provide the libraries are inside the integration area.

For adding new airport application uses `Mirage` library. It mocks the server responses. New airports are stored for a lifetime of an application - until the page is reloaded by user.

Application uses the `Component / Hook / Api` pattern.

Api layer is responsible only for making an api call (using `Axios`) and returning it's results.

Hook layer is responsible for triggering api layer functions, storing fetched results and all decorations around the call process - i.e. switching `isFetching` flag.

Components calls hook's functions and consumes it's data/flags.

## Testing highlights

### Component / Hook / Api pattern pros

The `Component / Hook / Api` pattern allows us to include into integration everything down to api layer. Thanks to this approach if we switch chosen `Axios` library to something else the integration tests will pass as the api layer is out of integration.

Api layer is tested with unit tests and it mocks `Axios` library.

### Simulating Api

To simulate the api calls we mock Api functions. Those functions resolve with mocked values or reject the promise.

If we notice the Api function has been called it means that the real api call has been intended. We only need to know how many times the Api function has been called and what data with.

The `mockResolvedValue()` allows to simulate the answer of mocked Api function. Consider this as an answer from server.

The `mockRejectedValue()` allows to simulate the rejection of Promise returned by Api function. Consider this as a 4xx or 500 server response.
