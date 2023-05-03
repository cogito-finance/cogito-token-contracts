# Smart contract requirements:
* Smart contract of the ERC-20 standard token;
* The maximum number of tokens is 1.000.000.000;
* Long name of the token: Cogito Governance Token;
* Short name of the token: CGV;
* Decimal - 6;
* Mint token function;
* Functions of pause is to pause/unpause the transfers on the contract;

The functions of the mint token are necessary for the correct operation of the bridge between the Ethereum network and Cardano. As a result, the total number of tokens in both networks will not exceed 1,000,000,000 units. When installing a smart contract, a gradual release of tokens is assumed, and not a one-time one, which also determines the need for the token mint function.

# cogito-token-contracts
Includes token contracts, migrations, tests

### Cogito Governance Token
* ERC-20 implementation for Cogito Governance Token  CGV

## Deployed Contracts
* TBD


## Requirements
* [Node.js](https://github.com/nodejs/node) (16+)
* [Npm](https://www.npmjs.com/package/npm)

## Install

### Dependencies
```bash
npm install
```

### Test 
```bash
npm run test
```

## Package
```bash
npm run package-npm
```

## Release
Cogito Governance Token artifacts are published to NPM: TBD
=======
ERC-20 implementation for Cogito Governance Token CGV

