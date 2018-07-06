# Serverless Print Dots

> A plugin to print dots in Serverless log during deployment to indicate progress and prevent timeouts in CI/CD platforms.

## Setup

1. Add dependency to `package.json`:

    ```sh
    yarn add -D serverless-print-dots
    ```
    or
    ```sh
    npm install -D serverless-print-dots
    ```

2. Add the plugin to `serverless.yml` file:

    ```yaml
    plugins:
      - serverless-print-dots
    ```
