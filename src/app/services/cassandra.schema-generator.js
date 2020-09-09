import { EntityPerformerResolver } from './entity-performer-resolver.js';
import { JsonShemaGenerator } from './json-schema-generator.js';

export class CassandraSchemaGenerator {

    constructor(mapperFactory) {
        this.mapperFactory = mapperFactory;
        this.performerResolver = new EntityPerformerResolver()
    }

    async getTableShema(keyspace, table, ...nestedObj) {
        const mapper = this.mapperFactory.getMapperForTable(keyspace, table);
        
        const result = await mapper.findAll();
        const arrayResult = new Array(...(result));

        if (arrayResult.length == 0) {
            throw new Error('Cannot make schema from empty table');
        }

        const performedEntity = this.performerResolver.performEntity(table, arrayResult[0]);

        return JsonShemaGenerator.getJsonSchema(performedEntity, table);
    }
}