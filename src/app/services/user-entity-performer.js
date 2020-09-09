import { JsonShemaGenerator } from './json-schema-generator.js';

export class UserEntityPerformer {

    getPerformedObject(user) {
        if (!user) {
            throw new Error('Cannot work with undefined or null user');
        }

        user.id = user.id.toString();

        try {
            user.address = JSON.parse(user.address);
        } catch { }

        return user;
    }
}