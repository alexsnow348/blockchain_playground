const { Network, Alchemy } = require('alchemy-sdk');
require('dotenv').config();

const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const publicKey = process.env.ETH_PUBLIC_KEY;

const settings = {
    apiKey: alchemyApiKey, // Replace with your Alchemy API Key.
    network: Network.ETH_MAINNET, // Replace with your network.
};

console.log(publicKey);
const alchemy = new Alchemy(settings);

// Access Alchemy Enhanced API requests
alchemy.core.getTokenBalances(publicKey).then(console.log);
