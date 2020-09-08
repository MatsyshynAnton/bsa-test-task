import { cassandraSystemKeyspaces } from '../constants/cassandra.system-keyspaces.js';
import { cassandraSystemTables } from '../constants/cassandra.system-tables.js';

export class CassandraSchemaReader {

    constructor(mapperFactory) {
        this.mapperFactory = mapperFactory;
    }

    getTableShema(table) {
        
    }
}