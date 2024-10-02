import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)]) // Execute both promises
    .then((res) => (  // Process the results when all promises are settled
      res.map((o) => ({ // Map over each promise result
        status: o.status, // Keep the status of the promise ('fulfilled' or 'rejected')
        value: o.status === 'fulfilled' ? o.value : String(o.reason), // Provide either the value or error reason
      }))
    ));
}
