import abi from '../abis/crowdfunding.json'
import address from '../abis/contractAddress.json'
import { setGlobalState, getGlobalState } from '../Store'
import { ethers } from 'ethers'

const { ethereum } = window
const contractAddress = address.address
const contractAbi = abi.abi

const connectWallet = async () => {
    try {
        if (!ethereum) return alert("Please install Metamask")
        const accounts = await ethereum.request( { method: 'eth_requestAccounts'})
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
    }catch (e) {
        reportError(e)
    }
}



const isWalletConnected = async () => {
    try {
        if (!ethereum) return alert("Please install Metamask")
        const accounts = await ethereum.request( { method: 'eth_requestAccounts' } )
        setGlobalState('connectedAccount', accounts[0]?.toLowerCase())

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload()
        })
        window.ethereum.on('accountChanged', async () => {
            setGlobalState('connectedAccount',accounts[0].toLowerCase())
            await isWalletConnected()
        })
        if (accounts.length) {
            setGlobalState('connectedAccount', accounts[0]?.toLowerCase())
        }else{
            alert('please connect wallet.')
            console.log('No aacounts found.')
        }
    }catch (error) {
        reportError(error)
    }
}

const getContract = async () => {
    const connectedAccount = getGlobalState('connectedAccount')
    if (connectedAccount) {
        const provider = new ethers.providers.Web3Provider(ethereum)
        const signer  = provider.getSigner()
        const contract = new ethers.Contract(contractAddress, contractAbi, signer)
        return contract
    } else {
        return getGlobalState('contract')
    }

}

const createProject = async (
    title,
    description,
    imageURL,
    cost,
    expireAt,
) => {
    try {
        if(!ethereum) return alert('please connecct to Metamask ')
         
        const contract = await getContract()
        cost = ethers.utils.parseEther(cost)
        tx = await contract.createProject(title, description, imageURL,cost ,expireAt)
        console.log(done)
        await tx.wait()
    } catch (error) {
        reportError(error)
    }
}
   

const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object.')
}

export {
    connectWallet,
    isWalletConnected,
    createProject
}