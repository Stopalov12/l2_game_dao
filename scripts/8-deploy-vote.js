import sdk from "./1-initialize-sdk.js";

(async () => {
  try {
    const voteContractAddress = await sdk.deployer.deployVote({
      name: "L2G Voting system",
      voting_token_address: "0xC35cF5521aD17794f113E64eF131685cfd4376A4",
      // we set the time for voting to be immediately
      voting_delay_in_blocks: 0,
      //how long can members vote
      voting_period_in_blocks: 6570,
      //the minimum % of the totalsupply that must be voted for a proposal to pass
      voting_quorum_fraction: 0,
      //how many tokens are needed to create a proposal
      proposal_token_threshold:0,
      
    }, {gasLimit: 200000});
    console.log("☑️Successfully deployed vote contract:", voteContractAddress);
  } catch (error) {
    console.log("Error deploying vote contract:", error);
  }
})();
