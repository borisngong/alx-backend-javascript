export default function loadBalancer(chinaDownload, USDownload) {
  // Promise.race() returns the value of the first resolved/rejected promise...
  return Promise.race([chinaDownload, USDownload]).then((res) => res);
}
