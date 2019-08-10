# tory-meter

ml guff - the initial idea is to use [BrainJS](https://github.com/BrainJS) to detect whether some news article content is right wing or not.

this is a tricky issue - how does one determine left / right wing sentiment?

## testing

```bash
npm test
```

## running

```bash
npm run
```

### todo

lots:

* identify data source for training model
* define criteria for marking article as right-wing in sentiment - bit subjective that one
* train model
* add service to detect sentiment
* look at moving the training over to node (much faster) - maybe there are better library options
