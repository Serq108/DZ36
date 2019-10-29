import React from 'react';
import {shallow, mount} from 'enzyme';
import {shallowToJson} from 'enzyme-to-json';
import '../../jest.config'
import {Login} from '../containers/login/Login'
import {MemoryRouter} from "react-router-dom";
import Service from '../service/service';


describe('Login', () => {
    let output;

    beforeEach(() => {
        output = mount(
            <MemoryRouter>
                <Login/>
            </MemoryRouter>
        ).find('Login');
        fetch.resetMocks();
    });

    it('should render login container', () => {
        expect(shallowToJson(output)).toMatchSnapshot();
    });

    it('should change state on fields change', async () => {
        const mockChangeUsername = {
            target: {
                name: 'username',
                value: 'Ilon'
            }
        };

        const mockChangePassword = {
            target: {
                name: 'password',
                value: '123'
            }
        };

        const expected = {
            username: 'Ilon',
            password: '123',
        };
        
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        output.instance().handleChangeLog(mockChangeUsername);
        output.instance().handleChangePass(mockChangePassword);
        //await output.instance().submitForm();

        expect(output.state()).toEqual(expected);
    });

    it('fetches data from server when server returns a successful response', async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        //assert on the response
        //const data = 'username=mihan&password=123';

        const resp = await Service.getReq('acc/');
        expect(resp.data).toEqual('12345')
        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls.length).toEqual(1);
    });

    it('login', async () => {
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        const mockChangeUsername = {
            target: {
                name: 'username',
                value: 'Ilon'
            }
        };

        const mockChangePassword = {
            target: {
                name: 'password',
                value: '123'
            }
        };
        //assert on the response
        const data = 'username=mihan&password=123';

        output.instance().handleChangeLog(mockChangeUsername);
        output.instance().handleChangePass(mockChangePassword);
        //await output.instance().submitForm();
        await Service.authPost(data);
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        const resp = await Service.getReq('acc/');
        expect(resp.data).toEqual('12345')
        fetch.mockResponseOnce(JSON.stringify({ data: '12345' }));
        await output.instance().handleAcc();    
    });


});
