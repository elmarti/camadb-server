#!/usr/bin/env node
import { Container } from "inversify";
import * as yargs from 'yargs';
import { ICamaServerConfig } from "./interfaces/cama-server-config";
import { CamaDbServerContainer } from "./src/lib/bootstrap";
import { TYPES } from "./types";

const container = new Container();
//@ts-ignore
yargs(process.argv)
  .command('serve', 'start the server', (yargs) => {
  }, (argv) => {
    // http factory    
  })
  .options('p', {
    alias : 'port',
    describe: 'the port that the server should run on',
    type: 'string', 
    nargs: 1,
    default: 9540
    })
    .options('h', {
        alias : 'hostname',
        describe: 'the hostname that the server should run on',
        type: 'string', 
        nargs: 1,
        default: '0.0.0.0'
    })
    .help()
    .argv
  