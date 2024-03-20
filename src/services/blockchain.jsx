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

const loadProjects = async () => {
    try {
        if (!ethereum) return alert('please install Metamask')
        
        const contract = await getContract()
        const Projects = await contract.getprojects()
        const Stats = await contract.stats()

        setGlobalState('stats', structuredStats(Stats))
        setGlobalState('projects',structuredProjects(Projects))

        //console.log(structuredProjects(Projects))
        console.log('done f')
        //console.log(structuredStats(Stats))
    }catch (error) {
        reportError(error)
    }
}

const loadProject = async(id) => {
    try {
        if (!ethereum) return alert('Please install Metamask')

        const contract = await getContract()
        const project = await contract.getProject(id)
        console.log('oooops')
        //setGlobalState('project',structuredProjects(project))
        setGlobalState('project',structuredProjects([project])[0])
       // console.log('done2')
        //console.log(project)
        console.log("project loaded")
    }catch(error) {
        reportError(error)
    }
}

const loadBackers = async(id) => {
    try {
        if(!ethereum)return alert("Please install Metamask")
        
        const contract = await getContract()
        const projectBackers =contract.getBackers(id)
        console.log(projectBackers)
        //setGlobalState('projectBackers')


    }catch(error) {
        reportError(error)
    }
}

const structuredProjects = (projects) => 
  projects
    .map((project) => ({
        id: toNumber(project.id),
        owner: project.owner,
        title: project.title,
        description: project.description,
        timestamp: new Date(toNumber(project.timestamp)).getTime(),
        expireAt: new Date(toNumber(project.expiresAt)).getTime(),
        Date: toDate(toNumber(project.expiresAt) * 1000),
        imageURL: project.imageURL,
        raised: parseInt(project.raised._hex) / 10 ** 18,
        cost: parseInt(project.cost._hex) / 10 ** 18,
        backers: toNumber(project.backers),
        status: project.status,
    }))
    .reverse()

const toDate = (timestamp) => {
    const date = new Date(timestamp);
    
    const dd = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
    const mm = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
    const yyyy = date.getFullYear();
    
    return `${yyyy}-${mm}-${dd}`;
}

const backProject = async(id, amaount) => {
    try {
        if (!ethereum) return alert("Please install Metamask")

        const connectedAccount = getGlobalState('connectedAccount')
        const contract = await getContract()
        amaount = ethers.utils.parseEther(amaount)
        const tx = await contract.backProject(id , {
            from: connectedAccount,
            value: amaount._hex,
        })
        await tx.wait()
        console.log("backing sucessfull")
        console.log(tx)
    }catch(error) {
        reportError(error)
    }
   
}

const structuredStats = (stats) => ({
    totalProjects: toNumber(stats.totalProjects),
    totalBackings: toNumber(stats.totalBacking),
    totalDonations: parseInt(stats.totalDonation._hex) / 10**18,

})
  
const toNumber = (value) => {
    return Number(value);
}  


const reportError = (error) => {
    console.log(error.message)
    throw new Error('No ethereum object.')
}

export {
    connectWallet,
    isWalletConnected,
    createProject,
    loadProjects,
    loadProject,
    backProject,
    loadBackers
}