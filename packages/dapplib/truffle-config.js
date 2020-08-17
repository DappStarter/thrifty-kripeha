require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drum olympic smooth elegant note punch essay idea clip blue genre'; 
let testAccounts = [
"0x5158985a272d08829fe3ffc0b04e8f2d68c0e66d3a041efe7c009543ebc56748",
"0xa2137faea2e9152169c734751bdb74cd10aba006af5a86d092920754124be05c",
"0x92c7b86aaa550cc822d1cc65029bd8fd94ba89e63421e587dfc4ecebe4826441",
"0xd2bee9e23d254a323ce25905ebcdc0bd9bfdc42d1377f5491d770e8fae01a883",
"0x3531b1ac412c7faf0656b8188027fa63286f38190c266c93ea40911cb818e3d9",
"0x14cc3c4777a853d6bba262468425df11463825269db604e7d83886a1108d527f",
"0x166cd286c99f3aaa6bb8612b7c4543cbbfbc77105922df9fa93e806a9a511570",
"0x41c6d0cc5d8b1899566f4289007f3b617da2074aa3ab493ab7aeabc34069d64c",
"0xf0286c272c6fd75ff058a2bec396280210e4ae6670de14c6147937325d8fbff6",
"0xdc8150063dc79b51e9d74d4541128e6838a96b21f56c0ab4337d3e2307169953"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
