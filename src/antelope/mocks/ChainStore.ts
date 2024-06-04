/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Mocking ChainStore -----------------------------------
declare const fathom: { trackEvent: (eventName: string) => void };

import { RpcEndpoint, UAL } from 'universal-authenticator-library';
import { TokenClass } from 'src/antelope/types';
import TelosEVM from 'src/antelope/chains/evm/telos-evm';
import TelosEVMTestnet from 'src/antelope/chains/evm/telos-evm-testnet';
import { ethers } from 'ethers';
import { TelosEvmApi } from '@telosnetwork/telosevm-js';
import { AxiosInstance } from 'axios';
import ContractManager from 'src/lib/contract/ContractManager';

export interface TeloscanEVMChainSettings {
    getStakedSystemToken(): TokenClass;
    getWrappedSystemToken: () => TokenClass;
    getChainId: () => string;
    getDisplay: () => string;
    trackAnalyticsEvent: (name: string) => void;
    getRPCEndpoint: () => RpcEndpoint;
    getEscrowContractAddress: () => string;
    getNetwork: () => string;
    getSystemToken: () => TokenClass;
    getExplorerUrl: () => string;
    getSmallLogoPath: () => string;
    getLargeLogoPath: () => string;
    getIndexerApiEndpoint: () => string;
    getTrustedContractsBucket(): string;
    isTestnet: () => boolean;
    // Telos Specific
    getEthAccountByNativeAccount: (account: string) => Promise<string>;
    getNativeSupport(): TelosEvmApi | null;
    getIndexerApi(): AxiosInstance;
    getTelosApi(): AxiosInstance;
    getHyperionApi(): AxiosInstance;
    getContractManager(): ContractManager;
    getUAL(): UAL | null;
    getMonitorUrl(): string;
}

export const evmSettings: { [network: string]: TeloscanEVMChainSettings } = {
    'telos-evm': new TelosEVM('telos-evm'),
    'telos-evm-testnet': new TelosEVMTestnet('telos-evm-testnet'),
};

export const chains: { [network: string]: ChainModel } = {};

export interface ChainModel {
    settings: TeloscanEVMChainSettings;
}

export interface EvmChainModel {
    settings: TeloscanEVMChainSettings;
    gasPrice: ethers.BigNumber;
}

const newChainModel = (network: string, isNative: boolean): ChainModel => {
    const model = {
        lastUpdate: 0,
        apy: '',
        stakeRatio: ethers.constants.Zero,
        unstakeRatio: ethers.constants.Zero,
        settings: evmSettings[network],
        tokens: [],
    } as unknown as ChainModel;
    if (!isNative) {
        (model as unknown as EvmChainModel).gasPrice = ethers.constants.Zero;
    }
    return model;
};

let current = {
    settings: evmSettings['telos-evm'],
} as unknown as ChainModel;

const ChainStore = {
    currentChain: current as unknown as ChainModel,
    loggedChain: current as unknown as ChainModel,
    loggedEvmChain: current as unknown as ChainModel,
    getNetworkSettings: (network: string) => current.settings,
    getChain: (label: string) => ChainStore.currentChain,
    setChain: (label: string, network: string) => {
        if (network in evmSettings) {

            // create the chain model if it doesn't exist
            if (!chains[network]) {
                chains[network] = newChainModel(network, false);
            }

            // make the change only if they are different
            if (network !== current.settings.getNetwork()) {
                current = chains[network];
                ChainStore.currentChain = current;
                ChainStore.loggedChain = current;
                ChainStore.loggedEvmChain = current;
            }
        } else {
            throw new Error(`Network '${network}' not supported`);
        }
    },
};

export const useChainStore = () => ChainStore;

// Set
ChainStore.setChain('current', process.env.NETWORK_EVM_NAME as string);
