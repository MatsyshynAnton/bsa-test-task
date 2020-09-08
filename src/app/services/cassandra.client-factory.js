import { cassandraConfigs } from '../config.js';

export default class CassandraClientFactory {

    constructor(cassandra) {
        this.cassandra = cassandra;
    }

    getCassandraClient() {
        const client = new this.cassandra.Client({
            contactPoints: [`${cassandraConfigs.host}:${cassandraConfigs.port}`],
            localDataCenter: 'datacenter1',
            // credentials: { username: cassandraConfig.username, password: cassandraConfig.password }
         });

        return client;
    }
}