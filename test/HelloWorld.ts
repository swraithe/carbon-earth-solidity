import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("HelloWorld", function () {
  async function deployHelloWorldFixture() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorld = await HelloWorld.deploy();

    return { helloWorld };
  }

  describe("Deployment", function () {
    it("Should return the correct message", async function () {
      const { helloWorld } = await loadFixture(deployHelloWorldFixture);

      expect(await helloWorld.getMessage()).to.equal("Hello, World!");
    });
  });
});
