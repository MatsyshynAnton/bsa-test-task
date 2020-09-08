import cassandra from 'cassandra-driver';

export default class CassandraMapperFactory {

    constructor(client) {
        this.client = client;
    }

    getMapperForTable (keyspace, tableName, customMappingOptions) {
        const Mapper = cassandra.mapping.Mapper;

        const mappingOptions = {
            models: {
              'Model': {
                tables: [ tableName ],
                keyspace: keyspace
              },
            },
          };
        
        return new Mapper(this.client, customMappingOptions ? customMappingOptions :mappingOptions).forModel('Model');    
    }
}