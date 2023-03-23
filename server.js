const Moralis = require('moralis').default
const express = require('express')
const cors = require('cors')
const { EvmChain } = require('@moralisweb3/common-evm-utils')
require('dotenv').config()

const app = express()
const port = 4000
const moralisKey = process.env.REACT_APP_Moralis_Key

app.use(cors({ origin: 'http://localhost:3000', credentials: true, }))

console.log(`moralis key : ${moralisKey}`);
const MORALIS_API_KEY = moralisKey
const address = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d'

app.get('/balances', async (req, res) => {
    try {
        const [nativeBalance, tokenBalances] = await Promise.all([
            Moralis.EvmApi.balance.getNativeBalance({
                chain: EvmChain.ETHEREUM,
                address,
            }),
            Moralis.EvmApi.token.getWalletTokenBalances({
                chain: EvmChain.ETHEREUM,
                address,
            }),
        ])
        res.status(200).json({
            address,
            nativeBalance: nativeBalance.result.balance.ether,
            tokenBalances: tokenBalances.result.map((token) => token.display()),
        });
    } catch (error) {
        console.error(error);
        res.status(500);
        res.json({ error: error.message });
    }
});

const startServer = async () => {
    await Moralis.start({
        apiKey: MORALIS_API_KEY,
    })

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })
};

startServer()