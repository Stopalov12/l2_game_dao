import { AddressZero } from "@ethersproject/constants";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const buildMetaData = async () => {
  try {
    const editionDropAddress = await sdk.deployer.deployEditionDrop({
      name: "L2Game",
      description:
        "The membership allows you to become a member of the L2Game community.",
      image: readFileSync("scripts/assets/gaming.png"),
      primary_sale_recipient: process.env.WALLET_ADDRESS,
    });
    const editionDrop = sdk.getEditionDrop(editionDropAddress);

    const metadata = await editionDrop.metadata.get();
    console.log(
      "Successfully deployed edition drop address",
      editionDropAddress
    );
    console.log("Successfully deployed edition drop metadata", metadata);
  } catch (error) {
    console.log("Failed to deploy edition drop", error);
  }
};
buildMetaData();
