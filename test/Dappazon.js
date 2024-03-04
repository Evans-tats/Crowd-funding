const { expect } = require("chai")


const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const _title = "project mbappe"
const _description = "football"
const _imageURL = "image"
const cost = 10
const _expireat = 9900000000

describe("Dappazon", () => {
  let contract, owner, backer
  
  beforeEach(async () => {
    [contract,owner, backer] = await ethers.getSigners()

    const crowdFunding = await ethers.getContractFactory('crowdfunding')
    crowdfunding = await crowdFunding.deploy(5)
    console.log(crowdfunding.address)
  })

  it('describe deployment',async () => {
    expect(await crowdfunding.owner()).to.equal(contract.address)
  })

  it('describe create project', async () => {
    const transaction = await crowdfunding.createProject(_title,_description,_imageURL,cost,_expireat)

    await transaction.wait()
    console.log("hey")
    expect(await crowdfunding.projectExist(0)).to.be.equal(true)
  })
  it("emits event", async () => {
    const transaction = await crowdfunding.createProject(_title,_description,_imageURL,cost,_expireat)

    await transaction.wait()
    expect(transaction).to.emit(crowdfunding, "Action")
  })

  describe("update project", async () => {

    beforeEach(async () => {
      let transaction = await crowdfunding.createProject(_title,_description,_imageURL,cost,_expireat)
      await transaction.wait()
    })

    it('describe update project', async () =>{
      //updating project name
      let transaction = await crowdfunding.updateProject(0,_title,_description,_imageURL,_expireat)
      await transaction.wait()

      expect(transaction).to.emit(crowdfunding, "Action")
    })
  })

  describe("backing project", async () =>{
    beforeEach(async () => {
      let transaction = await crowdfunding.createProject(_title,_description,_imageURL,cost,_expireat)
      await transaction.wait()
      transaction = await crowdfunding.connect(backer).backProject(0, { value : 5}) 
      await transaction.wait()
    })
    it('describe backing project', async () =>{
      //expect().to.be.equal(5)
      console.log("hey" + crowdfunding.backersOf(0).contribution)
      //expect(transaction).to.emit(transaction, "Action")
    })
  })
  
})
