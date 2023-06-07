// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.9.0/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts@4.9.0/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts@4.9.0/access/Ownable.sol";

contract BonchStakeToken is ERC20, ERC20Burnable, Ownable {
    constructor() ERC20("BonchStakeToken", "BST") {}

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    // function Stake(uint value) public payable {
    //     // require (msg.value == value*1*10*18);
    //     _mint(msg.sender, value);
    // }

    function Stake() public payable {
        _mint(msg.sender, msg.value);
    }

    function UnStake(uint amount) public {
        address payable _to = payable(msg.sender);
        // address _thisContract = address(this);
        // address payable _sender;
        // _sender = msg.sender;
        _burn(msg.sender, amount);
        uint reward = amount + amount / 10; //amount * 1,1
        // (bool sent, bytes memory data) = _to.call{value: msg.value}("");
        // transfer(msg.sender, reward);
        _to.transfer(reward);
    }
}