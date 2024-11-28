function getPaymentTokenFromAPI(success) {
  return new Promise((resolve) => {
    if (success) {
      resolve({ data: 'Successful response from the API' });
    } else {
      resolve(undefined);
    }
  });
}

module.exports = getPaymentTokenFromAPI;
