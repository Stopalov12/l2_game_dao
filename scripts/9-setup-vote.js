import sdk from "./1-initialize-sdk.js";

const vote = sdk.getVote("0xB016107755b4924a455caeB2cE08201386a60cA4");

const token = sdk.getToken("0xC35cF5521aD17794f113E64eF131685cfd4376A4");

const treasuryTransfer = async () => {
  try {
    //give the treasury the power to mint additional tokens if needed
    await token.roles.grant("minter", vote.getAddress(), { gasLimit:300000 });
    console.log("🌈 Granting minter role to vote contract...");
  } catch (error) {
    console.log("Error granting minter role to vote contract:", error);
    process.exit(1);
  }
  try {
    // grab our wallet token balance
    const ownedTokenBalance = await token.balanceOf(process.env.WALLET_ADDRESS);

    //90% of our tokens go to the treasury
    const ownedAmount = ownedTokenBalance.displayValue;
    const percent90 = (Number(ownedAmount) / 100) * 90;
    await token.transfer( vote.getAddress(), percent90, { gasLimit:300000 });
    console.log("🌈 Transferring 90% of tokens to vote contract...");
  } catch (error) {
    console.log("Error transferring 90% of tokens to vote contract:", error);
  }
};
treasuryTransfer();
