# Api with nock testing - Integration testing

## Application

The application is identical to `Api testing` application.

## Architecture highlights

Same as on `Api testing` application.

## Testing highlights

On `Api testing` application I emphasised the pros of `Component / Hook / Api` pattern in terms of testing. Nevertheless this pattern still needs some mocking which brings o risk of further errors.

To escape the mocking of Api calls you may use libraries like `nook` or `MSW`. Those libraries catch network calls and simulate responses if configured. Thanks to this approach even api calls become part of integration. Thanks to this if you decide to switch `Axios` to some other library in the future, the change should be transparent for your integration tests (they won't fail).
