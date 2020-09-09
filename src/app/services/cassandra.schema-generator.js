import { EntityPerformerResolver } from './entity-performer-resolver.js';
import { JsonShemaGenerator } from './json-schema-generator.js';

export class CassandraSchemaGenerator {

    constructor(mapperFactory) {
        this.mapperFactory = mapperFactory;
        this.performerResolver = new EntityPerformerResolver()
    }

    async getTableShema(keyspace, table, idField, idValue) {
        const mapper = this.mapperFactory.getMapperForTable(keyspace, table);
        
        let result = await mapper.find({ [idField]: idValue });
        result = new Array(...result);

        const performedEntity = this.performerResolver.performEntity(table, result[0]);

        return JsonShemaGenerator.getJsonSchema(performedEntity, table);
    }
}