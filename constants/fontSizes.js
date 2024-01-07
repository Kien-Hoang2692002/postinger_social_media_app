import { isIOS } from "../utils/Device";
export default {
  h1: isIOS() ? 24 : 25,
  h2: isIOS() ? 22 : 23,
  h3: isIOS() ? 20 : 20,
  h4: isIOS() ? 18 : 18,
  h5: isIOS() ? 14 : 14,
  h6: isIOS() ? 12 : 12,
};
