var nconf = require('nconf')
  , util = require('util')
  , winston = require('winston')
  , env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development'
  , vcap = process.env.VCAP_SERVICES;

nconf.argv().env()
  .file({ file: util.format('%s/configurations/%s.json', process.cwd(), nconf.get('env') || env) });

if (!nconf.get('env')) {
  nconf.set('env', env);
}

if (nconf.get('chugl:log:on')){
  winston.add(winston.transports.File, {
      filename: nconf.get('chugl:log:filename')
    , maxsize: 268435456
    , maxFiles: 8
  });
}
