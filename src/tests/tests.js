import chai from 'chai';
import mocha from 'mocha';
import { CassandraClientFactory } from '../app/services/cassandra.client-factory.js'
import { EntityPerformerResolver } from '../app/services/entity-performer-resolver.js';
import { UserEntityPerformer } from '../app/services/user-entity-performer.js';
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

        it('User is not specified', function() {
          let configs = {};
          Object.assign(configs, cassandraConfigs);

          configs.user = undefined;

          const factory = new CassandraClientFactory(configs);
          
          assert.throws(() => factory.getCassandraClient());
        });

        it('Password is not specified', function() {
          let configs = {};
          Object.assign(configs, cassandraConfigs);

          configs.password = undefined;

          const factory = new CassandraClientFactory(configs);
          
          assert.throws(() => factory.getCassandraClient());
        });

        it('Datacenter is not specified', function() {
          let configs = {};
          Object.assign(configs, cassandraConfigs);

          configs.datacenter = undefined;

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

describe('User performer resolver testing', function() {

  it('When table which does not has performer specified, than exception throws', function() {
    const resolver = new EntityPerformerResolver();
    assert.throws(() => resolver.performEntity('unspecified name'));
  });

});

describe('User performer testing', function() {

  it('When trying to perform undefined user, than error throws', function() {
    const performer = new UserEntityPerformer();

    assert.throws(() => performer.getPerformedObject(undefined));
  });

  it('When address field contains JSON data, JSON must be deserialized', function() {
    const user = {
      id: 'some id',
      address: '{ "city": "Kyiv", "street": "Lomonosova", "house": 35 }'
    }

    assert.equal(user.address.city);
    assert.equal(user.address.street);
    assert.equal(user.address.house);
  });
});