require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food edge reward stereo pulse hard light army general'; 
let testAccounts = [
"0x3c29988ad2979187a220259286cb5c119f9f71ff518de0174f5d22de72c88f38",
"0x730cefeeba171358ad5c03ba93fdc256400ed557f74a749431c23809cb0fde75",
"0x4fb5e53d3f943b4a5cab578423a1aed1eb8aa1a846488ac6f822093ebd31dff6",
"0xdf5f782752f79c25c826ebbcacd00a512d66d0a517dbcc6892221291052d39bf",
"0x84e2acf38b93d1588250fbb9001d4171b2edab8326decee64ba98412ffc85cd0",
"0xd96bf693626ef5cae9e1105bbb5432c96f17ae12d7452ccc4779ee72334b793a",
"0x9592250b5a2319f785a945f611477c6a9e0476abe2a1f1c52112da9b04220ea2",
"0xdbe3c3b34da3e2222a7656800d73e5006d627f6beb1f2389bfa54703416f8f86",
"0x8d9de6f7f8ae1001538fc66886676fccf2b5b547f00272a831037f1f28a3e9a2",
"0x3f2b256f20542e2ff6c453384cca28cf743ff99995e7c07ab89848c8b197d5ab"
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
