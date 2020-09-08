import { cassandraSystemKeyspaces } from '../constants/cassandra.system-keyspaces.js';
import { cassandraSystemTables } from '../constants/cassandra.system-tables.js';

export class CassandraSchemaReader {

    constructor(mapperFactory) {
        this.mapperFactory = mapperFactory;
    }

    getTableShema(keyspace, table) {
        const mapper = this.mapperFactory.getMapperForTable(cassandraSystemKeyspaces.systemSchema, cassandraSystemTables.columns);

        return mapper.find(
            { 
                keyspace_name: keyspace,
                table_name: table
            });
    }
}