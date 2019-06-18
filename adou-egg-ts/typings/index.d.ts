
import 'egg';
import { mysql } from './dto/mysql/index';
declare module 'egg' {
    interface Application {
        mysql: mysql;
    }
}