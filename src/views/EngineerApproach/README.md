# Engineer approach - Integration testing

## Application

The application is identical to `Components integration` application.

## Architecture highlights

Same as on `Components integration` application.

## Testing highlights

The aim of this example is to show cases of overtesting.

In perspective of developing whole application, the integration tests should be as close to what end users see/do as possible. It means the integration should spread as widely as possible. Especially external libraries such as `Formik`, `React router`, validators etc. should be transparent for tests so there is no need of mocking them (possible errors).

This application gather some overtesting examples. It means some of tests are unnecessary repeating same test cases. They also are vulnerable for changes of components structure - providing bigger granulation, moving logics to some other place or rename props. In ideal world we would like the change of view layer or structure of components don't trigger test failures at all.

Note: So called Engineer approach is recommended for developing a small part of an application only - for example a library that will be consumed in unknown circumstances.
