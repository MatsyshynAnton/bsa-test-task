import { JsonShemaGenerator } from './json-schema-generator.js';

export class UserEntityPerformer {

    getMappedObject(user) {
        user.id = user.id.toString();
        return user;
    }
}