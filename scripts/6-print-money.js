import sdk from "./1-initialize-sdk.js";

const token = sdk.getToken("0xC02C3158c429C5a20e1cD0768901577B7aA9f98e");

(async () => {
  try {
    const amount = 1000000;
    await token.mint(amount);
    const totalSupply = await token.totalSupply();

    console.log("✅ There now is", totalSupply.displayValue, "$L2G in circulation");
  } catch (error) {
    console.error("Failed to print money", error);
  }
})();