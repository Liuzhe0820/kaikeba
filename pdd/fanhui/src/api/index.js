import ajax from './ajax';
const BASE_URL = '/api';
export const getHomeCasual=()=>ajax(BASE_URL+'/fanhui/hotGoods')
