// a place to put common utilities functions

import Taro from "@tarojs/taro";

const tools = {
  /**
   * request
   * @{param} opts
   */

  request: (opts) => {
    const {
      url = "",
      params = {}, // request parameter
      method = "GET",
      ...rest // remaining parameters, if we want to get remaining parameters
    } = opts;

    return new Promise((resolve, reject) => {
      // Taro.request returns a promise type
      Taro.request({
        url,
        data: params,
        method,
        ...rest,
      })
        .then((res) => {
          const { data } = res;
          if (data?.code === 1) {
            // success
            resolve(data);
          } else {
            // not expected result, code = -1
            reject(res);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  // loading
  showLoading: (param = "") => {
    let dptOpts = {
      title: "Loading...",
      mast: true, // prevent touch when loading 防止触摸穿透
    };

    // 判断传入参数的类型 test the type of the input variables
    if (Object.prototype.toString.call(param) === "[object String]") {
      dptOpts.title = param;
    } else if (Object.prototype.toString.call(param) === "[object Object]") {
      dptOpts = {
        ...dptOpts,
        ...param,
      };
    }
    return Taro.showLoading(dptOpts);
  },

  // 消息提示框 notififcation
  showToast: (param) => {
    let dptOpts = {
      title: "Notification",
      icon: "none",
      mask: true,
      duration: 2000, // 提示时间
    };
    if (Object.prototype.toString.call(param) === "[object String") {
      dptOpts.title = param;
    } else if (Object.prototype.toString.call(param) === "[object Object]") {
      dptOpts = {
        ...dptOpts,
        ...param,
      };
    } else {
      throw new Error("parameter type error, should be string or object");
    }
    return Taro.showToast(dptOpts);
  },
};

export default tools;
