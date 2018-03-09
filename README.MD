# Overview

A command line tool to comapre colums in a spreadsheet. This takes in a filename and compares the colums for duplicates

# Usage

Run with the below command
`Yarn start`

## Options

Command line options

* -h (help) displays help menu
* -d (defaults) use defaults. This means
  * Ignore header
  * Compare column 1 and 2 in the first sheet
  * Display results in terminal
* -i (input) input specific file
* -o (output) output results
* -l (location) enter location / directory of file

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
