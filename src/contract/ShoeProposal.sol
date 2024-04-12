// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract ShoeProposal {
    
    struct Proposal {
        uint256 id;
        address creator;
        string title;
        string description;
        string imageLink;
        uint256 totalFunds;
        address[] contributors;
        bool isActive;
    }
    
    Proposal[] public proposals;
    mapping(uint256 => mapping(address => uint256)) public fundsPerContributor;
    
    uint256 public proposalCount;
    
    event ProposalCreated(uint256 id, address creator, string title, string description, string imageLink);
    event ProposalFunded(uint256 id, address contributor, uint256 amount);
    
    function createShoeProposal(string memory _title, string memory _description, string memory _imageLink) external {
        uint256 id = proposalCount++;
        address[] memory newContributors;
        proposals.push(Proposal({
            id: id,
            creator: msg.sender,
            title: _title,
            description: _description,
            imageLink: _imageLink,
            totalFunds: 0,
            isActive: true,
            contributors: newContributors
        }));
        
        emit ProposalCreated(id, msg.sender, _title, _description, _imageLink);
    }
    
    function fundProposal(uint256 _id) external payable {
        require(_id < proposals.length, "fundProposal::Proposal does not exist");
        require(proposals[_id].isActive, "fundProposal::Proposal is not active");
        require(msg.value >= 1 ether, "fundProposal::Amount must be 1 coin");
        
        Proposal storage proposal = proposals[_id];
        
        proposal.totalFunds += 1 ether;
        fundsPerContributor[_id][msg.sender] += msg.value;
        
        if (!isContributor(_id, msg.sender)) {
            proposal.contributors.push(msg.sender);
        }
        
        emit ProposalFunded(_id, msg.sender, msg.value);
    }
    
    function getProposal(uint256 _id) external view returns (Proposal memory) {
        require(_id < proposals.length, "getProposal::Proposal does not exist");
        return proposals[_id];
    }
    
    function getAllProposalIds() external view returns (uint256[] memory) {
        uint256[] memory ids = new uint256[](proposals.length);
        for (uint256 i = 0; i < proposals.length; i++) {
            ids[i] = proposals[i].id;
        }
        return ids;
    }
    
    function isContributor(uint256 _id, address _contributor) internal view returns (bool) {
        Proposal storage proposal = proposals[_id];
        for (uint256 i = 0; i < proposal.contributors.length; i++) {
            if (proposal.contributors[i] == _contributor) {
                return true;
            }
        }
        return false;
    }
}
