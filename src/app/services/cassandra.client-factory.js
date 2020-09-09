import cassandra from 'cassandra-driver';
import { cassandraConfigs } from '../../config.js';

export class CassandraClientFactory {

    getCassandraClient() {
        this.validateConfigs();

        const client = new cassandra.Client({
            contactPoints: [`${cassandraConfigs.host}:${cassandraConfigs.port}`],
            localDataCenter: cassandraConfigs.datacenter,
            credentials: { username: cassandraConfigs.user, password: cassandraConfigs.password }
         });

         client.connect()
            .then(() => console.log('Successful connect to cassandra'))
            .catch((error) => console.error('Unable to connect to Cassandra. Check config.js and specify correct configurations.'));

        return client;
    }

    validateConfigs() {
        if (!cassandraConfigs.host ||
            !cassandraConfigs.port ||
            !cassandraConfigs.user ||
            !cassandraConfigs.password ||
            !cassandraConfigs.datacenter) {
                throw Error('Invalid configurations specified');
            }
    }
}