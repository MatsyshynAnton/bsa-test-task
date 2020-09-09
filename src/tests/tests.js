import chai from 'chai';
import mocha from 'mocha';
import { CassandraClientFactory } from '../app/services/cassandra.client-factory.js'
import { cassandraConfigs } from '../config.js';

const expect = chai.expect;
const assert = chai.assert;
const describe =  mocha.describe;
const it = mocha.it;


describe('Cassandra client factory testing', function() {
    
    describe('When configs is not specified error is thrown', function() {
        it('Host is not specified', function() {
          let configs = {};
          Object.assign(configs, cassandraConfigs);

          configs.host = undefined;

          const factory = new CassandraClientFactory(configs);
          
          assert.throws(() => factory.getCassandraClient());
        });
        it('Port is not specified', function() {
            let configs = {};
            Object.assign(configs, cassandraConfigs);

            configs.port = undefined;
  
            const factory = new CassandraClientFactory(configs);
            
            assert.throws(() => factory.getCassandraClient());
          });
      });

    describe('When configs is not valid error is thrown', function() {
        it('Port is not valid', function() {
            let configs = {};
            Object.assign(configs, cassandraConfigs);  

            configs.port = 'ababagalamaga';
  
            const factory = new CassandraClientFactory(configs);
            
            assert.throws(() => factory.getCassandraClient());
          });
    });
});