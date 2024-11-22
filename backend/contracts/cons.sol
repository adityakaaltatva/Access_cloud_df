// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract AccessControl {
    event AccessGranted(address indexed user, string role);
    event AccessRevoked(address indexed user);

    mapping(address => string) public userRoles;
    
    mapping(address => bool) public hasAccess;

    address public admin;

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }

    constructor() {
        admin = msg.sender; // The deployer becomes the admin
    }

    function grantAccess(address _user, string memory _role) public onlyAdmin {
        require(bytes(_role).length > 0, "Role cannot be empty");
        userRoles[_user] = _role;
        hasAccess[_user] = true; // Grant access
        emit AccessGranted(_user, _role); // Emit event
    }

    function revokeAccess(address _user) public onlyAdmin {
        require(hasAccess[_user], "User does not have access");
        userRoles[_user] = ""; // Remove role
        hasAccess[_user] = false; // Revoke access
        emit AccessRevoked(_user); // Emit event
    }

    function checkAccess(address _user) public view returns (string memory) {
        if (hasAccess[_user]) {
            return userRoles[_user]; // Return the role if access is granted
        }
        return "No access"; // If no access, return this
    }

    // Function to change the admin (in case of contract upgrade or transfer of ownership)
    function changeAdmin(address newAdmin) public onlyAdmin {
        admin = newAdmin;
    }
}
