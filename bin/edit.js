var openInEditor = require('open-in-editor');
var editor = openInEditor.configure({
  // editor: 'atom'
}, function (err) {
  console.error('Something went wrong: ' + err);
});

editor.open('/private/etc/hosts')
  .then(function () {
    console.log('Success!');
  }, function (err) {
    console.error('Something went wrong: ' + err);
  });
