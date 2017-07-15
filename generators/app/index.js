'use strict';
const Generator = require('yeoman-generator');

module.exports = Generator.extend({
  prompting: function () {
    return this.prompt({
      type: 'confirm',
      name: 'copy',
      message: 'Copy templates to current directory?',
      default: false
    }).then((answers) => {
      this.answers = answers;
    });
  },

  writing: function () {
    if (!this.answers.copy) return;
    this.fs.copy(
      this.templatePath('./**/*'),
      this.destinationRoot(), {globOptions: {dot: true}});
  },

  install: function () {
  }

});