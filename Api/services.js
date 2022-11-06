import axios from "axios";
import { body, endpoints, url } from "../Constants/endpoints.js";
import { auth } from "../Constants/app_auth_config.js";

const createProject = async () => {
  await axios.post(`${url}${endpoints.createProject}`, body, { auth });
};
const getProject = async (id) => {
  return axios.get(`${url}${endpoints.getProject}/${id}`, { auth });
};
const deleteProject = async (id) => {
  await axios.post(`${url}${endpoints.deleteProject}/${id}`, body, { auth });
};

export const functions = {
  createProject,
  getProject,
  deleteProject,
};
