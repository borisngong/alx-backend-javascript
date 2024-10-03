import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return {
      photo,
      user,
    };
  } catch (error) {
    // If any promise fails, return an object with null values
    return {
      photo: null,
      user: null,
    };
  }
}
