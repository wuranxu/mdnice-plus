import {request} from "umi";
import CONFIG from "@/consts/config";
import {getHeader} from "@/services/index";


export async function listDirectory() {
  return request(`${CONFIG.ServiceUrl}/v1/directory/list`, {
    method: 'GET',
    headers: getHeader(),
  });
}

export async function createDirectory(data) {
  return request(`${CONFIG.ServiceUrl}/v1/directory/create`, {
    method: 'POST',
    headers: getHeader(),
    data: data,
  });
}

export async function updateDirectory(data) {
  return request(`${CONFIG.ServiceUrl}/v1/directory/update`, {
    method: 'POST',
    headers: getHeader(),
    data: data,
  });
}

export async function createArticle(data) {
  return request(`${CONFIG.ServiceUrl}/v1/article/`, {
    method: 'PUT',
    headers: getHeader(),
    data: data,
  });
}

export async function updateArticle(articleId, data) {
  return request(`${CONFIG.ServiceUrl}/v1/article/${articleId}`, {
    method: 'POST',
    headers: getHeader(),
    data: data,
  });
}

export async function queryArticle(articleId) {
  return request(`${CONFIG.ServiceUrl}/v1/article/${articleId}`, {
    method: 'GET',
    headers: getHeader(),
  });
}
