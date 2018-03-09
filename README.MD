# Overview

A command line tool to comapre colums in a spreadsheet. This takes in a filename and compares the colums for duplicates

# Usage

Run with the below command
`Yarn start`

## Options

Command line options

* -h Displays help menu (help).
* -d Use defaults (defaults). This means
  * Ignore header
  * Compare column 1 and 2 in the first sheet
  * Display results in terminal
* -i Input specific file (input)
* -o Output results to file (output)
* -l Enter directory where file resides (location)

# Feature Extension

A todo list of features to add

* Publish to npm
* Add test
* Handle different file types
* Select sheets
* Select columns
* Handle multiple files / compare different files
* Automatically detect extensions
* Export results to spreadsheet
* yarn start to go through menu items
* yarn start with arguments to allow selecting files and locations

# Notes

This script uses [SheetsJS](https://github.com/sheetjs/js-xlsx)
