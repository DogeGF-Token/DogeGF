const express = require('express');
const Web3 = require('web3');
const dogegfABI = require('./DOGEGF.json').abi;

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const dogegfContractAddress = '0xfb130d93e49dca13264344966a611dc79a456bc5';
const burnTokenAddress = '0xdead000000000000000042069420694206942069';
const lockTokenAddress = '0xc77aab3c6d7dab46248f3cc3033c856171878bd5';
const marketingAvailableAddress = '0x6eCD8a67Ee7e4418374438EF092a3112ed2280d7';

const web3Provider = new Web3.providers.HttpProvider(process.env.PROVIDER_URL);
const web3 = new Web3(web3Provider);
const dogegf = new web3.eth.Contract(dogegfABI, dogegfContractAddress);

const app = express();

app.get('/api/circulating-supply', async (req, res) => {
	const maxSupply = web3.utils.toBN(await dogegf.methods.totalSupply().call());
	const burnAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(burnTokenAddress).call()
	);
	const lockAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(lockTokenAddress).call()
	);
	const marketingAvailableAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(marketingAvailableAddress).call()
	);

	const circulatingSupply = maxSupply
		.sub(burnAmount)
		.sub(lockAmount)
		.sub(marketingAvailableAmount);
	const circulatingSupplyInteger = Math.floor(
		web3.utils.fromWei(circulatingSupply, 'ether')
	);

	res.status(200).send(circulatingSupplyInteger.toString());
});

app.get('/api/total-supply', async (req, res) => {
	const maxSupply = web3.utils.toBN(await dogegf.methods.totalSupply().call());
	const burnAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(burnTokenAddress).call()
	);

	const totalSupply = maxSupply.sub(burnAmount);
	const totalSupplyInteger = Math.floor(
		web3.utils.fromWei(totalSupply, 'ether')
	);

	res.status(200).send(totalSupplyInteger.toString());
});

app.listen(PORT, () => {
	console.log(`The DogeGF API Server is running on PORT ${PORT}.`);
});
