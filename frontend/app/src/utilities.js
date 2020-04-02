export const convertObjectToURLParameters = obj => {
  var str = Object.keys(obj)
    .map(function(key) {
      return key + '=' + obj[key];
    })
    .join('&');
  return str;
};

export function shortenAddress(address, num, showEnd = true) {
  if (!address) return null;
  return `${address.slice(0).slice(0, num)}...${
    showEnd ? address.slice(0).slice(-num) : ''
  }`;
}

export function shortenHash(txHash, num, showEnd = true) {
  if (!txHash) return null;
  return `${txHash.slice(0).slice(0, num)}...${
    showEnd ? txHash.slice(0).slice(-num) : ''
  }`;
}
