# Main Notice

Assure to read carefully **VEONE style guide** before working on this project _<https://curedas-c.github.io/veone-frontend-libs/docs/category/code-style-guide>_.

## Conventional commit

This project use [Commitizen cz-cli](https://github.com/commitizen/cz-cli) to check your commit message.
Don't make your commit with default Git command use instead:

```
yarn commit
```

Make sure to follow conventional commit rules for your commit to work: (<https://www.conventionalcommits.org/en/v1.0.0/>).

## Mocking

You can generate mock using [Intermock](https://github.com/google/intermock).

```
yarn mock --files INTERFACE_FILE --interfaces "INTERFACE_TO_MOCK"
```

## Development server

Run `yarn serve` for a dev server.

## Running unit tests

Run `yarn test` to execute the unit tests via [Jest](https://jestjs.io/fr/).

## Running end-to-end tests

Run `yarn e2e` to execute the end-to-end tests via [Cypress](https://www.cypress.io).
