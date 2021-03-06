'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const { camelCase, kebabCase, upperFirst, snakeCase, toUpper } = require('lodash');

const INVALID_NAME_LIST = [
  'module',
  'component',
  'page',
];

module.exports = class extends Generator {
  async prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the super ${chalk.red('generator-tms')} generator!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'author',
        message: '你的名字',
        store: true,
      },
      {
        type: 'list',
        name: 'type',
        message: '请选择模版类型',
        choices: [
          { name: '页面', value: 'module' },
          { name: '组件', value: 'component' },
        ],
      },
      {
        type: 'input',
        name: 'name',
        message: '输入模块名称',
        default: 'foo.bar',
        validate(value) {
          if (value.startsWith('module')) return '请勿以module开头';
          if (INVALID_NAME_LIST.some(invalidKey => value.includes(invalidKey)))
            return `请不要包含以下 ${INVALID_NAME_LIST.join('、')} 关键字`;
          return true;
        },
      }
    ];

    this.answers = await this.prompt(prompts);
  }

  writing() {
    const { author, type, name } = this.answers;
    const componentName = upperFirst(camelCase(name));
    const dotName = snakeCase(componentName)
      .split('_')
      .join('.');
    const snakeCaseName = toUpper(snakeCase(componentName));
    const context = {
      author,
      directory: type === 'module' ? 'src/modules/' : 'src/components/',
      dirName: type === 'module' ? `module.${dotName}` : componentName,
      componentName,
      dotName,
      snakeCaseName,
      kebabCaseName: kebabCase(componentName),
      date: new Date().toLocaleString(),
    };
    this.fs.copyTpl(
      this.templatePath(type),
      this.destinationPath('<%= directory %>/<%= dirName %>'),
      context,
    );
  }

  install() {
    // this.installDependencies();
  }

  end() {
    if (this.answers.type === 'module') {
      this.log('记得更新 `src/routerConfig.tsx` 添加新增的模块入口!');
    }
  }
};
