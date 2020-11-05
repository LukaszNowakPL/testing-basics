# One-by-one - Unit testing

## Application

The application is a Search criteria form to filter returned movies list. Age fields are aligned together so it is not possible to provide `age from` older than `age to` and vice versa. When at least one search criteria is provided the `Search` button activates. Clicking on a button will initialise Search result label with info depending on criteria chosen.

## Architecture highlights

All logics are removed to separated `helpers.ts` files. Then it's easier to find candidates for unit testings.

## Testing highlights

Each helper file has it's own test file - `SearchCriteria.helpers.test.ts` for `SearchCriteria.helpers.ts` file. Test files are organised like

```sh
describe('SomeComponent.helpers', () => {
    describe('firstHelper', () => {
        it('returns first value with given arguments set', () => {
            ...
        });
        it('returns second value with given arguments set', () => {
            ...
        )};
    )};
    describe('anotherHelper', () => {
        it('returns first value with given arguments set', () => {
            ...
        });
        ...
    )};
    ...
});
```

The `it` section covers only one test scenario. All test cases should be covered on `describe` section of given helper. Test cases should also cover edge/border cases.

The `getActorsLabel` function of `SearchResults.helper` is an extended logic. It's good to split such logics into separated smaller parts. With this case I use private helpers `getGenderPart` and `getActorPart`.

From testing perspective we need to check only main helper `getActorsLabel` providing test cases that covers all possible paths of private helpers. Thanks to this we don't need to test them separately.
