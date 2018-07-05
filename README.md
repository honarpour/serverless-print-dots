# Serverless Print Dots

> A plugin to print dots in Serverless log during deployment to indicate progress and prevent timeouts in CI/CD platforms.

## Setup

Add dependency in `package.json` and point to the repo:

```json
"devDependencies": {
  "serverless-print-dots": "^1.0.0",
}
```

Add the plugin to `serverless.yml` file:

```yaml
plugins:
  - serverless-print-dots
```
