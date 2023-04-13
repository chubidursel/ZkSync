//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.8;

contract Demo {
    string private greeting;
    uint256 public num;

    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }

    function incNum()public {
        num ++;
    }
}