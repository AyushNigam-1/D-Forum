import React, { createContext, useContext, useState } from 'react';
import { ethers } from 'ethers';
import abi from '../artifacts/contracts/Lock.sol/Lock.json'

const ContractContext = createContext();

export const useContract = () => useContext(ContractContext);

export const ContractProvider = ({ children }) => {
    const [contractInstance, setContractInstance] = useState(null);
    const [userAddress, setUserAddress] = useState(null);

    const connectToMetaMask = async () => {
        console.log("called eth")
        if (window.ethereum) {
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' });
                console.log('Connected to MetaMask');
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const signer = provider.getSigner();
                const address = await signer.getAddress();
                setUserAddress(address);
                // const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
                // const contract = new ethers.Contract(contractAddress, abi, signer);
                // setContractInstance(contract);
                return address
            } catch (error) {
                console.log(error)
                console.error('User denied account access');
            }
        } else {
            console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
        }
    };

    return (
        <ContractContext.Provider value={{ contractInstance, userAddress, connectToMetaMask }}>
            {children}
        </ContractContext.Provider>
    );
};
