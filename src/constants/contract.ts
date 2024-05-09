import { ethers } from "ethers";
import AuthAbi from "./ABI/Auth.json";
import ContentAbi from "./ABI/Content.json";
import SubscriptionAbi from "./ABI/Subscription.json";
import ContentDAOAbi from "./ABI/ContentDAO.json";
import VaultAbi from "./ABI/Vault.json";
import ERC20Abi from "./ABI/ERC20.json";

export const getAuthContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_authorization_contract_address,
    AuthAbi,
    providerOrSigner
  );
export const getContentContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_content_contract_address,
    ContentAbi,
    providerOrSigner
  );
export const getSubscriptionContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_subscription_contract_address,
    SubscriptionAbi,
    providerOrSigner
  );

export const getContentDAOContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_dao_contract_address,
    ContentDAOAbi,
    providerOrSigner
  );

export const getVaultContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_vault_contract_address,
    VaultAbi,
    providerOrSigner
  );
export const getTokenContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_token_contract_address,
    ERC20Abi,
    providerOrSigner
  );
