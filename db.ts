const connectionString:string = 'mongodb://isaac:123@ds145168.mlab.com:45168/live-exam-practice';

import * as mongodb from 'mongodb';

export default class Database {
  public static db:mongodb.Db;

  public static connect() {
    return mongodb.MongoClient.connect(connectionString).then((db) => {
        console.log('successful db connection');
        this.db = db;
    }).catch((err) => {
        console.error(err);
    });
  }
}
