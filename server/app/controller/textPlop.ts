require('module-alias/register');
import BaseController from '@base/baseController';
import { AController } from '@lib/aRouter';
const __CURCONTROLLER = __filename.substr(__filename.indexOf('/app/controller')).replace('/app/controller', '').split('.')[0].split('/').filter(item => item !== 'index').join('/').toLowerCase();


@AController(__CURCONTROLLER)
export default class textPlopController extends BaseController {
}
