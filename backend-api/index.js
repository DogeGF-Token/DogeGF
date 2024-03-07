const express = require('express');
const Web3 = require('web3');
const dogegfABI = require('./DOGEGF.json').abi;

require('dotenv').config();

const PORT = process.env.PORT || 3000;

const dogegfContractAddress = '0xfb130d93e49dca13264344966a611dc79a456bc5';
const burnTokenAddress = '0xdead000000000000000042069420694206942069';
const lockTokenAddress = '0xdba68f07d1b7ca219f78ae8582c213d975c25caf';
const marketing1AvailableAddress = '0x6eCD8a67Ee7e4418374438EF092a3112ed2280d7';
const marketing2AvailableAddress = '0xB9Cebf54cF4Ba7bAE70d7b30B120D1Fe4bf1875c';
const marketing3AvailableAddress = '0xd0AD8EC297487280B7b5dFbF14e6aB31289687E8';
const marketing4AvailableAddress = '0x73C6DA31Fd1Fa9d5028bd33C766a206f258182D4';
const marketing5AvailableAddress = '0x8D4da1D47164b5F0a4066b770524CBE98a6cD66F';

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
	const marketing1AvailableAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(marketing1AvailableAddress).call()
	);
	const marketing2AvailableAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(marketing2AvailableAddress).call()
	);
	const marketing3AvailableAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(marketing3AvailableAddress).call()
	);
	const marketing4AvailableAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(marketing4AvailableAddress).call()
	);
	const marketing5AvailableAmount = web3.utils.toBN(
		await dogegf.methods.balanceOf(marketing5AvailableAddress).call()
	);

	const circulatingSupply = maxSupply
		.sub(burnAmount)
		.sub(lockAmount)
		.sub(marketing1AvailableAmount)
		.sub(marketing2AvailableAmount)
		.sub(marketing3AvailableAmount)
		.sub(marketing4AvailableAmount)
		.sub(marketing5AvailableAmount);
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
