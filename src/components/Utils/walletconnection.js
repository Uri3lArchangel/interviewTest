
import WalletConnectProvider from '@walletconnect/web3-provider';
import Fortmatic from 'fortmatic';
// import { providers } from 'ethers';
import Web3Modal from 'web3modal';
import { Web3Provider } from '@ethersproject/providers';

export let web3Provider

export async function connectWallet(FORMATICKEY,INFURAID) {
  const BurnerConnectProvider =(await import('@burner-wallet/burner-connect-provider')).default



    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: INFURAID, // required
        },
      },
      burnerconnect: {
        package: BurnerConnectProvider, // required
        options: {
          defaultNetwork: '1',
        },
      },
      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: FORMATICKEY, // required
        },
      },
      
    };

    const web3Modal = new Web3Modal({
      providerOptions,
      theme: 'dark',
    });

    const provider = await web3Modal.connect();
     web3Provider = new Web3Provider(provider);
    
  }