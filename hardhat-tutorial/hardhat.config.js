require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const QUICKNODE_HTTP_URL = process.env.QUICKNODE_HTTP_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

// console.log(QUICKNODE_HTTP_URL);
// console.log(PRIVATE_KEY);

module.exports = {
	solidity: "0.8.4",
	networks: {
		mumbai: {
			url: QUICKNODE_HTTP_URL,
			accounts: [PRIVATE_KEY],
		},
	},
};
