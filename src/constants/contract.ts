import { ethers } from "ethers";
import AuthAbi from "./ABI/Auth.json";

export const getAuthContract = (
  providerOrSigner: ethers.ContractRunner | null | undefined
) =>
  new ethers.Contract(
    import.meta.env.VITE_authorization_contract_address,
    AuthAbi,
    providerOrSigner
  );
