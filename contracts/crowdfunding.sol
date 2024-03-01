// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract crowdfunding {
    address public owner;
    uint public projectTax;
    uint public projectCount;
    uint public balance;
    statsStruct public stats;
    projectStruct[] public projects;
    

    struct statsStruct {
        uint totalProjects;
        uint totalBanking;
        uint totalDonation;
    }

    struct projectStruct {
        uint id;
        address owner;
        string title;
        string description;
        string imageURL;
        uint cost;
        uint raised;
        uint timestamp;
        uint expiresAt;
        uint backers;
        statusEnum status;
    }

    enum statusEnum {
        OPEN,
        APPROVED,
        REVERTED,
        DELETED,
        PAIDOUT
    }

    event Action (
        uint256 id,
        string actionType,
        address indexed executor,
        uint256 timestamp
    );
    
    mapping(uint256 => bool) public projectExist;
    mapping(address => projectStruct[]) public projectsof;
    

    constructor(uint _projectTax) {
        owner = msg.sender;
        projectTax = _projectTax;
    }

   

    function createProject(
        string memory title,
        string memory description,
        string memory imageURL,
        uint cost,
        uint expiresAt
    )public returns(bool) {
        require(bytes(title).length > 0, "title can't be empty");
        require(bytes(description).length > 0, "description can't be empty");
        require(bytes(imageURL).length > 0, "imageURL cannot be empty");
        require(cost > 0 ether, "cost cannot be zero");

        projectStruct memory project;
        project.id = projectCount;
        project.owner = msg.sender;
        project.title = title;
        project.description = description;
        project.imageURL = imageURL;
        project.cost = cost;
        project.timestamp = block.timestamp;
        project.expiresAt = expiresAt;
        projectCount++;

        projects.push(project);
        projectExist[projectCount] = true;
        projectsof[msg.sender].push(project);
        stats.totalProjects += 1;

        return true;
    }

    function updateProject(
        uint id,
        string memory title,
        string memory description,
        string memory imageURL,
        uint expireAt
    ) public returns (bool) {

    }


}

