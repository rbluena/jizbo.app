import { Realm } from '@realm/react';

export default class UserSchema extends Realm.Object {
  constructor(realm, name, description) {
    super(realm, { name, description });
  }

  static schema = {
    name: 'User',
    primaryKey: '_id',
    properties: {
      _id: { type: 'ObjectId', default: () => new Realm.BSON.ObjectId() },
      name: 'string',
      phone: 'string',
      bio: 'string',
      isOnline: { type: 'bool', default: () => true },
      isProminent: { type: 'bool', default: () => false },
      settings: 'Settings[]',
      balances: {
        topUpBalance: { type: 'number', default: () => 0 },
        revenue: { type: 'number', deafult: () => 0 },
      },

      createdAt: { type: 'date', default: () => new Date() },
    },
  };
}
