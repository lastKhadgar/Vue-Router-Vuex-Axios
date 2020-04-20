"use strict";
import { createAxios } from '../core';
import { ssoServiceUser } from "../app.config";

const RequestServiceUser = createAxios({ baseURL: ssoServiceUser })

export default {
    login: function (params) {
        return RequestServiceUser.post('sys/login', params)
    },
    logined: function () {
        return RequestServiceUser.get('validateToken');
    },
}