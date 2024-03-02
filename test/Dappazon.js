const { expect } = require("chai")


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
  
})
