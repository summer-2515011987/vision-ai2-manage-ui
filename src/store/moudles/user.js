import { login } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/tokenActions";
const user = {
    actions: {
        // 登录及设置token
        Login({ commit }, userInfo) {
            login(userInfo)
                .then(response => {
                    const data = response.data;
                    setToken(data.token);
                    resolve();
                })
                .catch(error => {
                    reject(error);
                });
        }
    }
};
export default user;