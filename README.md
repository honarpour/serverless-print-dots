# Serverless Print Dots

> A Serverless plugin for printing dots in Serverless log during deployment to indicate progress and prevent timeouts in CI/CD platforms.

## Use Case

Deploying or updating CloudFront distributions on AWS can take about 20-30 minutes to complete, exceeding some CI/CD platforms' timeout limit, causing a false failed build while deployment is still in progress on AWS. This plugin prints a dot in the Serverless console at intervals to create a diff in logs and therefore prevent timeouts.

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
