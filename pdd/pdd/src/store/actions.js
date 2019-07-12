import {
  getHomeCasual
} from '../api';

import { Home_CASUAL } from './muatuin-types';
export default{
  async reqHomeCasual({commit}){
    const result = await getHomeCasual();
    commit(Home_CASUAL,{homecasual:result.message.data})
  }
}
