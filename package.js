Package.describe({
  name: 'aramk:topsort',
  summary: 'Topological sort',
  git: 'https://github.com/aramk/topsort.git',
  version: '0.0.2'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles([
    'lib/topsort.js'
  ], ['client', 'server']);
  // The library defines `topsort` on the global object, so no exports are needed.
});
