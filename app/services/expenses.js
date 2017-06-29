import { apiEndpoint } from '../../config/app';
import createRestApiClient from '../utils/createRestApiClient';

/*
 * Define frontend API functions. Backend functionality goes in /server
 */
export default () => {
    const client = createRestApiClient().withConfig({ baseURL: apiEndpoint });
    return {
        //getExpenses: () => client.request({
            //method: 'GET',
            //url: '/expense'
        //}),
        createExpense: ({ data }) => client.request({
            method: 'POST',
            url: '/expense/add',
            data
        })
    };
};
