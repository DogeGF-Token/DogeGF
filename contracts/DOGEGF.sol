// SPDX-License-Identifier: Unlicensed

pragma solidity ^0.8.0;

import './ERC20.sol';

contract DOGEGF is ERC20 {
	constructor() ERC20("DogeGF", "DOGEGF") {
		_mint(msg.sender, 69420000000000000 * 10 ** decimals());
	}
}