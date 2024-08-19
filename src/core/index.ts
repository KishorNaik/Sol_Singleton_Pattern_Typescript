import 'reflect-metadata';
import { NODE_ENV } from './config/env';
import { Singleton } from './modules/singletonDemo';
console.log(`Node Env : ${NODE_ENV}`);
console.log(`Directory : ${__dirname}`);

const singleTon=Singleton.getInstance();
singleTon.demo();