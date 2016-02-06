# Hawking
A timing harness for command line tools.

## Install
`npm install -g hawking`

## A What?!
`hawking` is a simple app that wraps the execution of other apps/tools and lets you know how long they took to run. For instance you could do `hawking ls -al /etc` to see how long it takes to output all the file names in `/etc`. Or you could run `hawking npm start` to see how long it takes to run that cool new node tool you just wrote.

It spits out:
```
Command ran in: 
 620185325 nanoseconds
 620.185325 milliseconds
 0.620185325 seconds
Final Return: 1223
Exit Code Return: 0
``` 
When it's done (with some color formatting) so you can see how long it took to run the command, what the last thing the command returned was, and what the exit code for the command was.

Simple.

## But Why?!
Well... this was really written for hosting things like prime number drag races at [Hack Night SLC](http://hacknightslc.com) and I figured it might be useful to other people too.