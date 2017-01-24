# Stylelint shareable config for Gigasavvy

### Installation

```
yarn add stylelint-config-gigasavvy --dev
```

### Usage

Set your Stylelint config to:

```javascript
{
    "extends": "stylelint-config-gigasavvy"
}
```

To extend the config, simply add a `rules` key to the config file and add/modify rules as necessary:

```javascript
{
    "extends": "stylelint-config-gigasavvy",
    "rules": {
        "some-other-rule": true
    }
}
```
