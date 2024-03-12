const { Network, Alchemy } = require('alchemy-sdk');
require('dotenv').config();

const alchemyApiKey = process.env.ALCHEMY_API_KEY;
const publicKey = process.env.ETH_PUBLIC_KEY;

const settings = {
    apiKey: alchemyApiKey, // Replace with your Alchemy API Key.
    network: Network.ETH_SEPOLIA, // Replace with your network.
};

console.log(publicKey);
const alchemy = new Alchemy(settings);

// Access Alchemy Enhanced API requests
try {
    alchemy.core.getTokenBalances(publicKey).then((res) => {
        // console.log(res.tokenBalances);
        console.log(res.tokenBalances.length);
        for (let i = 0; i < res.tokenBalances.length; i++) {
            console.log(res.tokenBalances[i].contractAddress);
            console.log(parseInt(res.tokenBalances[i].tokenBalance, 16));
        }
    })

} catch (error) {
    console.error('Error:', error);
}
