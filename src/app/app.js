import cassandra from 'cassandra-driver';
import CassandraClientFactory from './services/cassandra.client-factory.js'
import CassandraMapperFactory from './services/cassandra.mapper-factory.js';

export default class App {

    constructor() {
        const clientFactory = new CassandraClientFactory(cassandra);
        const client = clientFactory.getCassandraClient();

        const mapperFactory = new CassandraMapperFactory(client);
        const userMapper = mapperFactory.getMapperForTable('social', 'user');

        userMapper.get({id: '74f1b09a-8610-4822-94dd-4ef810591a69'})
            .then(res => console.log(res));   
    }
}