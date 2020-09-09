import { JsonShemaGenerator } from './json-schema-generator.js';

export class UserEntityPerformer {

    getMappedObject(user) {
        user.id = user.id.toString();

        try {
            user.address = JSON.parse(user.address);
        } catch { }

        return user;
    }
}