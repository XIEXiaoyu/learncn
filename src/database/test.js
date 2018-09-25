import React from 'react';

import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const database_name = "xiejun.db";

export default class Happydemo {

    loadDB() {
        console.log("Opening database ...");

        SQLite.openDatabase({
            name: database_name,
        }).then(DB => {
            return DB;
        });
    }
}