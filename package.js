Package.describe({
  name: "juto:underscore-deep",
  summary: "underscore-deep package",
  version: "0.0.5",
  git: "https://github.com/jutoapp/meteor-underscore-deep",
  documentation: null
});


Package.onUse(function (api) {
  api.use(['coffee:script@1.0.3', 'underscore@1.0.10']);
  api.imply('underscore');
  api.addFiles('underscore-deep.coffee');
  api.export('_d');
});
