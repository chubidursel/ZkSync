// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract ZkEasyNFT is ERC721Enumerable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;


    // IPFS CID of the image folder
    string private _imageFolder = "QmYHAEUwGR6dW7VUc1Njzw7eFiq3zMpG8JjAisfYbt7Vr1/";
    
    mapping(uint256 => uint256) private _tokenLevels;
    
    constructor() ERC721("ZkEasy", "ZKE") {}
    
    function mintNFT(uint256 level) public returns (uint256) {
        require(level > 0 && level <= 5, "Invalid level");
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _tokenLevels[newItemId] = level;
        return newItemId;
    }
    
    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "Token does not exist");
        uint256 level = _tokenLevels[tokenId];
        require(level > 0 && level <= 5, "Invalid level");
        string memory baseURI = "https://gateway.ipfs.io/ipfs/";
        string memory imageCID = string(abi.encodePacked(_imageFolder, level, ".jpg"));
        return string(abi.encodePacked(baseURI, imageCID));
    }


    // PRICE???
    uint public price;
}