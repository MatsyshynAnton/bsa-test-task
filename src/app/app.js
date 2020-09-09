import { CassandraClientFactory } from './services/cassandra.client-factory.js'
import { CassandraMapperFactory } from './services/cassandra.mapper-factory.js';
import { CassandraSchemaGenerator } from './services/cassandra.schema-generator.js';
import { JsonWriter } from './services/json-writer.js';
import { cassandraConfigs } from '../config.js';
export default class App {

    constructor() {
        const clientFactory = new CassandraClientFactory(cassandraConfigs);
        const client = clientFactory.getCassandraClient();

        const mapperFactory = new CassandraMapperFactory(client);

        const schemaReader = new CassandraSchemaGenerator(mapperFactory);

        schemaReader.getTableShema('society','user')
            .then(res => {
                JsonWriter.writeToJson(res);
                console.log(res);
            })
            .catch(error => console.error(error));
    }
}