// <copyright file="knowledgeBaseSettingsApi.ts" company="Microsoft">
// Copyright (c) Microsoft. All rights reserved.
// </copyright>

import axios from './axiosJWTDecorator';
import { getBaseUrl } from '../configVariables';

let baseAxiosUrl = getBaseUrl() + '/api';

/**
* GET knowledge base id
*/
export const getKnowledgeBaseId = async (): Promise<any> => {
    let url = baseAxiosUrl + "/knowledgebase";
    return await axios.get(url, false);
}

/**
* PATCH update knowledge base id
*/
export const updateKnowledgeBaseId = async (payload: {}): Promise<any> => {
    let url = baseAxiosUrl + "/knowledgebase";
    return await axios.patch(url, payload);
}