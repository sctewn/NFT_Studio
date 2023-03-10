/* DISCLAIMER: THIS IS JUST A "DRAFT" OF SMART CONTRACT NOT AN READY FOR PRODUCTION SCRIPT.

SALE PROFIT DISTRIBUTION DRAFT IDEA:
1. 60% ARTIST.
2. 15% EXPENSE ACCOUNT.
3. 6%  SPONSOR ACCOUNT.
4. 6%  TAXES ACCOUNT.
5. 6%  ADMIN AND CONSULTING ACCOUNT.
6. 7%  NEW ARTIST ACCOUNT.

ROYALTIES DISTRIBUTIONS DRAFT IDEA:
1. 70% ARTIST.
2. 12% EXPENSE ACCOUNT.
3. 9%  ADMIN AND CONSULTING ACCOUNT.
4. 9%  NEW ARTIST ACCOUNT.*/


// Smart Contract for Profit and Royalties Distributions of NFT
pragma solidity ^0.6.7;

contract PrizePool {
address payable artistAccount;
address payable expenseAccount;
address payable sponsorAccount;
address payable taxAccount;
address payable adminAccount;
address payable newArtistAccount;

// PROFIT DISTRIBUTION

constructor() public {
    artistAccount = 0x0;  // ARTIST ADRESS
    expenseAccount = 0x0; // EXPENSES ADRESS
    sponsorAccount = 0x0; // STUDIO ADRESS
    taxAccount = 0x0; // TAX ADRESS
    adminAccount = 0x0; // ADMIN AND CONSULTING ADRESS
    newArtistAccount = 0x0; // NEW ARTIST ADRESS
}

// ROYALTIES DISTRIBUTION

function distributeNFTs(uint256 _price) public payable {
    uint256 artistShare = _price.mul(60).div(100);
    require (artistShare != 0);
    artistAccount.transfer(artistShare);

    uint256 expenseShare = _price.mul(9).div(100);
    require (expenseShare != 0);
    expenseAccount.transfer(expenseShare);

    uint256 sponsorShare = _price.mul(12).div(100);
    require (sponsorShare != 0);
    sponsorAccount.transfer(sponsorShare);

    uint256 taxShare = _price.mul(6).div(100);
    require (taxShare != 0);
    taxAccount.transfer(taxShare);

    uint256 adminShare = _price.mul(6).div(100);
    require (adminShare != 0);
    adminAccount.transfer(adminShare);

    uint256 newArtistShare = _price.mul(7).div(100);
    require (newArtistShare != 0);
    newArtistAccount.transfer(newArtistShare);
}

function distributeRoyalties(uint256 _price) public payable {
    uint256 artistShare = _price.mul(70).div(100);
    require (artistShare != 0);
    artistAccount.transfer(artistShare);

    uint256 expenseShare = _price.mul(12).div(100);
    require (expenseShare != 0);
    expenseAccount.transfer(expenseShare);

    uint256 adminShare = _price.mul(8).div(100);
    require (adminShare != 0);
    adminAccount.transfer(adminShare);

    uint256 newArtistShare = _price.mul(10).div(100);
    require (newArtistShare != 0);
    newArtistAccount.transfer(newArtistShare);
}

}
