/**
 * Created by JohnBae on 2/10/17.
 */

import { Mongo } from 'meteor/mongo';

export const Messages = new Mongo.Collection('messages');

Meteor.methods({
    'messages.insert'(name, email, message) {

        //console.log("Inserting:", name, email, message)



        Messages.insert({
            name: name,
            email: email,
            message: message
        });
    },
});