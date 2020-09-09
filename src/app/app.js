import cassandra from 'cassandra-driver';
import { CassandraClientFactory } from './services/cassandra.client-factory.js'
import { CassandraMapperFactory } from './services/cassandra.mapper-factory.js';
import { CassandraSchemaGenerator } from './services/cassandra.schema-generator.js';
import { JsonWriter } from './services/json-writer.js';

export default class App {

    constructor() {
        const clientFactory = new CassandraClientFactory(cassandra);
        const client = clientFactory.getCassandraClient();

        const mapperFactory = new CassandraMapperFactory(client);

        const schemaReader = new CassandraSchemaGenerator(mapperFactory);

        schemaReader.getTableShema('society','user', 'id', '533fe7f5-6ba3-46f2-89e6-686e4f3c6063')
            .then(res => {
                console.log(res);
                JsonWriter.writeToJson(res);
            })
            .catch(error => console.error(error));

        // const user = { id: ' ggg', age: 5}

        // const schema = JsonShemaGenerator.getJsonSchema(user, 'user');
        // console.log(schema);
        
        // schemaReader.getTableShema('society', 'user')
        //     .then(res => {
        //         const a =new Array(...res);
        //         console.log(a[0]);
        //         console.log(JsonShemaGenerator.getJsonSchema(a[0], 'user'));
        //     })
        //     .catch(error => console.log(error));


    }
}