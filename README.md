# Smart contract requirements:
* Smart contract of the EPC-20 standard token;
* The maximum number of tokens is 1.000.000.000;
* Long name of the token: Rejuve token;
* Short name of the token: RJV;
* Decimal - 6;
* Mint token function;
* Functions of pause is to pause/unpause the transfers on the contract;
The functions of the mint token are necessary for the correct operation of the bridge between the Ethereum network and Cardano. As a result, the total number of tokens in both networks will not exceed 1,000,000,000 units. When installing a smart contract, a gradual release of tokens is assumed, and not a one-time one, which also determines the need for the token mint function.

# rejuve-token-contracts
Includes token contracts, migrations, tests

### RejuveToken
* ERC-20 implementation for Rejuve TBD Token

## Deployed Contracts
* RejuveToken (Mainnet): 
* RejuveToken (Kovan): 
* RejuveToken (Ropsten) : 

## Requirements
* [Node.js](https://github.com/nodejs/node) (12+)
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
RejuveToken artifacts are published to NPM: https://www.npmjs.com/package/rejuve-token-contracts
=======
ERC-20 implementation for Rejuve TBD Token

