import cassandra from 'cassandra-driver';

export class CassandraClientFactory {

    constructor(configs) {
        this.configs = configs;
    }

    getCassandraClient() {
        this.validateConfigs();

        const client = new cassandra.Client({
            contactPoints: [`${this.configs.host}:${this.configs.port}`],
            localDataCenter: this.configs.datacenter,
            credentials: { username: this.configs.user, password: this.configs.password }
         });

         client.connect()
            .then(() => console.log('Successful connect to cassandra'))
            .catch((error) => console.error('Unable to connect to Cassandra. Check config.js and specify correct configurations.'));

        return client;
    }

    validateConfigs() {
        if (!this.configs ||
            !this.configs.host ||
            !this.configs.port ||
            !this.configs.user ||
            !this.configs.password ||
            !this.configs.datacenter) {
                throw Error('Invalid configurations specified');
            }

        if (isNaN(this.configs.port)) {
            throw Error('Invalid port specified');
        }
    }
}