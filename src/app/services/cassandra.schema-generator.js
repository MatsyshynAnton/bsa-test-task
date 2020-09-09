import { EntityPerformerResolver } from './entity-performer-resolver.js';
import { JsonShemaGenerator } from './json-schema-generator.js';

export class CassandraSchemaGenerator {

    constructor(mapperFactory) {
        this.mapperFactory = mapperFactory;
        this.performerResolver = new EntityPerformerResolver()
    }

    async getTableShema(keyspace, table) {
        const mapper = this.mapperFactory.getMapperForTable(keyspace, table);
        
        let entity = await this.getEntity(mapper);

        if (!entity) {
            throw new Error('Cannot build schema from empty table');
        }

        const performedEntity = this.performerResolver.performEntity(table, entity);

        return JsonShemaGenerator.getJsonSchema(performedEntity, table);
    }

    async getEntity(mapper) {
        let result = await mapper.findAll({ limit: 1 });
        result = new Array(...(result));
        return result[0];
    }
}