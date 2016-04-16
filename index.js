#! /usr/bin/env node

var program = require('commander');
var fs = require('fs');
var licenseGenerator = require('./lib/index.js');

// Get version from package.json.
var version = require('./package.json').version;

// Get available licenses.
var licenses = [];
fs.readdirSync(__dirname + '/licenses').map(function (license) {
  licenses.push(license.replace(/\.[0-9a-z]+$/i, ''));
});

// program
//   .version(version)
//   .option("-y, --year <year>", 'The year to use. Example: 2014.')
//   .option("-n, --fullname <fullname>", 'Your fullname.')

/**
 * Install command.
 * license-generator install [license]
 */
program
  .command('install [license]')
  .description('Use this command to generate a license file.')
  .option("-y, --year <year>", 'The year to use. Example: 2014.')
  .option("-n, --fullname <fullname>", 'Your fullname.')
  .option("-p, --project <project name>", "Project name.")
  .option("-e, --extension <extension>", 'The file extension for the license. Example: txt. Defaults to no extension.')
  .action(function (license, options) {
    // Throw error if license is not provided
    if (!license) {
      console.log('Error: license name missing');
      program.help();
    }
    // Lowercase the provided license name
    license = license.toLowerCase();

    // Use provided year or default to current year.
    var year = options.year || new Date().getUTCFullYear();

    //read from package.json and infer variable if not given
    var packageJSON = {};
    try{
        packageJSON = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
    }catch(err){
    }

    // Use provided name or default to blank.
    var fullname = options.fullname || packageJSON.author || '';

    // Use the provided project or default to none
    var projectname = options.project || packageJSON.name || '';

    // Get file extension.
    var extension = options.extension || '';

    // Get file output location
    var generated_license =  './LICENSE' + ((extension) ? '.' + extension : '');

    licenseGenerator.install({
        output: generated_license,
        license: license,
        year: year,
        fullname: fullname,
        projectname: projectname
    }, function(err){
        if (err) {
          return console.log(err);
        }
        // Show a success message.
        console.log('Successfully added ' + license + ' license to ' + generated_license + ' file.');
        //end
        process.exit(0);
    });
  });

/**
 * View command.
 * license-generator view [license]
 */
program
  .command('view [license]')
  .description('Use this command to view the content of a license.')
  .action(function (license) {

    // Throw error if not license is not provided
    if (!license) {
      console.log('Error: license name missing');
      program.help();
    }
    // Lowercase the provided license name
    license = license.toLowerCase();


    // Get license file.
    var license_file = __dirname + '/licenses/' + license + '.txt';

    // Show the license file.
    console.log(fs.readFileSync(license_file, 'utf8'));

    //end
    process.exit(0);
  });

// Options.
program.on('--help', function () {
  console.log('    -y, --year The year to use. Example 2014.');
  console.log('    -n, --fullname The fullname to use in the license.');
  console.log('    -p --project The name of the project to use in the license.');
  console.log('    -e, --extension The file extension for the license. Example: txt. Defaults to no extension.');
  console.log('');
});

// Available licenses.
program.on('--help', function () {
  console.log('  Available licenses:');
  console.log('');
  console.log('    ' + licenses.join("\n    "));
  console.log('');
});

// Examples.
program.on('--help', function () {
  console.log('  Examples:');
  console.log('');
  console.log('    $ license-generator install bsd -y 2014 -n "John Doe" -e txt');
  console.log('    $ license-generator i mit -y 2014 -n "John Doe"');
  console.log('    $ license-generator view bsd');
  console.log('');
});

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}else{
  console.log('Unknown command. Use `license-generator --help` to learn more about commands available.');
}
