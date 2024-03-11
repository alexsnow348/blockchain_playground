const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
} = require('@solana/web3.js');
require('dotenv').config();

// const wallet = new Keypair();
// const publicKey = new PublicKey(wallet._keypair.publicKey);
// const privateKey = wallet._keypair.secretKey;
const publicKey = new PublicKey(process.env.PUBLIC_KEY);
const privateKey = process.env.PRIVATE_KEY;

// console.log('Wallet:', process.env.PUBLIC_KEY);
// console.log('Public Key:', publicKey);
// console.log('Private Key:', privateKey);

const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const walletBalance = await connection.getBalance(publicKey);
        console.log('Wallet Balance:', walletBalance / LAMPORTS_PER_SOL);
    } catch (error) {
        console.error('Error:', error);
    }
};

const  airDropSol = async () => {
    try {
        const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
        const fromAirdropSignature = await connection.requestAirdrop(publicKey, 5 * LAMPORTS_PER_SOL);
        await connection.confirmTransaction(fromAirdropSignature);
        
    } catch (error) {
        console.error('Error:', error);
    }
}

const main = async () => {
    await getWalletBalance();
    // await airDropSol();
}

main();