import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const val1 = uploadPhoto();
  const val2 = createUser();

  return Promise.all([val1, val2])
    .then((results) => {
      console.log(`${results[0].body} ${results[1].firstName} ${results[1].lastName}`);
    })

    .catch(() => {
      console.log('Signup system offline');
    });
}
