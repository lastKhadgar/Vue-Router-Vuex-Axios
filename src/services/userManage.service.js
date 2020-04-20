"use strict";
import { createAxios } from '../core';
import { baseURL } from "../app.config";

const RequestServiceUser = createAxios({ baseURL: baseURL })

export default {
    userList: function (params) {
        return RequestServiceUser.post('owner/page', params)
    },
}