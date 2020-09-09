import { UserEntityPerformer } from './user-entity-performer.js';


export class EntityPerformerResolver {
    
    constructor() {
        this.userPerformer = new UserEntityPerformer();
    }

    performEntity(tableName, entity) {
        if (tableName === 'user') {
            return this.userPerformer.getMappedObject(entity);
        }

        throw new Error('You trying to map values from table, which does not have mapper.');
    }
}