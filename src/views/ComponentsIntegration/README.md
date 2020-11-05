# Components integration - Integration testing

## Application

The application allows user to create unique todo, display created todos list and remove todo from list. The Add button is active when some unique name is provided.

## Architecture highlights

Application uses `Formik` with it's hooks to provide the library is inside the integration area.

The granulation of components is pretty big so each component has very low responsibility. `NewTodo` and `TodoList` components have few subcomponents that are not used elsewhere.

## Testing highlights

The aim of this example is to show what area of integration should be tested and what components should it touch.

### Title

As the component is very simple we can only assure that it prints given string.

With given testing suite I point out few techniques of how to select same object and what is the difference between each other.

### NewTodo

This component and it's subcomponents holds some isolated functionality. As I've mentioned on `Architecture highlights` we don't test subcomponents as they're _private_ functionalities of a root component.

Test checks all possible states of a component depending on actions taken.

Note that the component consumes `Formik` library. The library becomes a part of integration and is transparent for tests.

Note that most of tests end with `findBy` check. This is because previous actions trigger some calculations and rerenders, so checked element may need some time to get in expected state. Using `getBy` instead of `findBy` group of selectors may end up with checks failures.

### TodoForm

This component holds `todos` state shared together with it's descendant components. This is very good place to test integration around mentioned state:

-   If new Todo has been added (by `NewTodo`'s subcomponent) it should be displayed (by `TodoList`'s subcomponent)
-   If Todo has been removed (by `TodoList`'s subcomponent) it should not display anymore.

Note that we don't test if `TodoList` prints Todos provided with it's props. This is because `TodoForm`'s tests check it already.

Note that we don't test the state of `Add` button, error states of inputs etc. Those cases are to low for `TodoForm` component and are tested on a lower level - test suite of a `NewTodo` component.
