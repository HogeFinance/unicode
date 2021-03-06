import {HardhatRuntimeEnvironment} from 'hardhat/types';
import {DeployFunction} from 'hardhat-deploy/types';

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
    const {deployments, getNamedAccounts} = hre;
    const {deploy} = deployments;

    const {deployer, owner} = await getNamedAccounts();

    await deploy('NFT', {
        from: deployer,
        args: ['HogeNFT', 'HFT', 'https://test.skynet/tid/'],
        log: true
    });
}

export default func;
func.tags = ['NFT'];
