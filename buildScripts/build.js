import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';

/* eslint-disable no-console */

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    jsonStats.errors.forEach(error => console.log(chalk.red(error)));
    return jsonStats.errors;
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.forEach(warn => console.log(chalk.yellow(warn)));
  }

  console.log(`Webpack stats: ${stats}`);

  console.log(chalk.green('Your app has been built for production and writeten to /dist!'));

  return 0;
});
