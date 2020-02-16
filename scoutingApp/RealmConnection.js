const faker = require('faker');
const Realm = require('realm');

//insert the your connection information
const URL = '10.49.80.70:32768';
const username = 'ernesto.casco.velazquez@hotmail.com';
const password = 'Metepec_15';
var tickerRealmPath = "/scoutingApp";

const credentials = Realm.Sync.Credentials.usernamePassword(username, password);
const usern = Realm.Sync.User.login(`http://${URL}`, credentials);

const TeamSchema = {
    name: 'Team',
    properties: {
        'number': { type: 'string', optional: false, default: '' },
        'name': { type: 'string', optional: false, default: '' },
        'score': { type: 'int', optional: false, default: 0 }
    }
};

const errorCallback = function errorCallback(message, isFatal, category, code) {
    console.log(`Message: ${message} - isFatal: ${isFatal} - category: ${category} - code: ${code}`)
};

usern.then((user) => {
   console.log('logged in');
    Realm.open({
      sync: {
          url: `realms://${URL}${tickerRealmPath}`,
          user: user,
          error: errorCallback,
          partial: true
      },
      schema: [TeamSchema],
    })
      .then((realm) => {
        let results = realm.objects('Team');
        //write to the realm
        realm.write(() => {
          realm.create('Team', {
            number: '3158',
            name: 'TECBOT',
            score: 90
          }, true)
        })
        realm.close()
      })
})
  .catch(error => {
  console.log({error}, 'here');
});
