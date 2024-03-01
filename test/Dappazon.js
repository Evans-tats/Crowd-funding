const { expect } = require("chai")
const { title } = require("process")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

const _title = "project mbappe"
const _description = "football"
const _imageURL = "image"
const cost = 5
const _expireat = 100

describe("Dappazon", () => {
  let owner
  
  beforeEach(async () => {
    owner = await ethers.getSigners()

    const crowdFunding = await ethers.getContractFactory('crowdfunding')
    crowdfunding = await crowdFunding.deploy(5)
    console.log(crowdfunding.address)
  })

    it('describe create project', async () => {
       transaction = await crowdfunding.createProject(
        _title,_description,_imageURL,cost,_expireat

       )

       await transaction.wait()
       console.log("hey")
       expect(await crowdfunding.projectExist(1)).to.be.equal(true)
    })
})
