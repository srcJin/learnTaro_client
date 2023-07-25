import tools from "../common/tools";

const API_PRE = "http://localhost:3000";

// images api
export const imageReq = (data) =>
  tools.request({
    url: `${API_PRE}/images/images`,
    params: data,
  });

export const loginReq = (data) => tools.request({
  url: `${API_PRE}/login`,
  params: data,
  method: 'POST'
})