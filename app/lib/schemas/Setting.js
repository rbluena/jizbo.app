import { Realm } from '@realm/react';

export default class SettingsSchema extends Realm.Object {
  constructor(realm) {
    super(realm);
  }

  static schema = {
    name: 'Setting',
    primaryKey: '_id',
    properties: {
      _id: { type: 'ObjectId', default: () => new Realm.BSON.ObjectId() },
    },
  };
}
