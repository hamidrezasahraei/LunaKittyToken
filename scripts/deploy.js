const hre = require("hardhat");

async function main() {
  const LunaKittyToken = await hre.ethers.getContractFactory("LunaKittyToken");
  const lunaKittyToken = await LunaKittyToken.deploy(100000000, 50);

  await lunaKittyToken.waitForDeployment();
  console.log("LunaKittyToken deployed: ", lunaKittyToken.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
