import cassandra from 'cassandra-driver';
import CassandraClientFactory from './services/cassandra.client-factory.js'

const clientFactory = new CassandraClientFactory(cassandra);
const client = clientFactory.getCassandraClient();

const query = 'SELECT * FROM system_schema.columns WHERE keyspace_name = ? AND table_name = ?;';
client.execute(query, ['grocery', 'fruit_stock'])
    .then(res => console.log(res));