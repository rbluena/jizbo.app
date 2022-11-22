import { createRealmContext } from '@realm/react';
import UserSchema from '~/app/lib/schemas/User';

export const { useQuery, useObject, useRealm } = createRealmContext({
  schema: [UserSchema],
});

// getCurrentUsers
export function useGetAuthUser(phoneNumber) {
  return useObject({ phone: phoneNumber });
}

// getAllUsers with pagination and filters
export function useGetContacts(options = { sorted: 'createdAt' }) {
  const contacts = useQuery('User').sorted(options.sorted);

  return contacts;
}
