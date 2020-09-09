import cassandra from 'cassandra-driver';
import { CassandraClientFactory } from './services/cassandra.client-factory.js'
import { CassandraMapperFactory } from './services/cassandra.mapper-factory.js';
import { CassandraSchemaReader } from './services/cassandra.schema-reader.js';
import { JsonShemaGenerator } from './services/json-schema-generator.js';

export default class App {

    constructor() {
        const clientFactory = new CassandraClientFactory(cassandra);
        const client = clientFactory.getCassandraClient();

        const mapperFactory = new CassandraMapperFactory(client);

        const schemaReader = new CassandraSchemaReader(mapperFactory);

        const user = { id: ' ggg', age: 5}

        const schema = JsonShemaGenerator.getJsonSchema(user, 'user');
        console.log(schema);
        // schemaReader.getTableShema('society', 'user')
        //     .then(res => console.log(res))
        //     .catch(error => console.log(error));
    }
}