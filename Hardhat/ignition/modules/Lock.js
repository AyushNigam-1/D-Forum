const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("LockModule", (m) => {

  const lock = m.contract("Lock");

  console.log(lock.address)

  return { lock };
});
