import axios from 'axios';
export function post(method) {
    axios
        .post(host + String(method)
        )
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

//参数类型 
// let works = {
//     workContent: this.$refs.ue.msg,
//     empId: this.user.id,
//     itemId: 1,
//     username: this.user.qname
//   };
//let result=postp('add/',work);
export function postp(method, params) {
    axios
        .post(host + String(method),
            (JSON.parse(JSON.stringify(params)))
        )
        .then(function (response) {
            console.log(response.data.result);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export function deletep(method, params) {
    axios
        .delete(host + String(method),
            (JSON.parse(JSON.stringify(params))
            ), Headers={ contentType: "application/json; charset=utf-8" }
        )
        .then(function (response) {
            console.log(response.data.result);
        })
        .catch(function (error) {
            console.log(error);
        });
}


//参数类型
// let params = new URLSearchParams();
// params.append("username", this.username);
// params.append("password", this.password);
// let result = await getp("login", params);
//请求注意 同步async  await 关键字
export function get(method) {
    return new Promise((resolve, reject) => {
        axios.get(host + String(method)
        ).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data)
        })
    });
}

export function getp(method, params) {
    return new Promise((resolve, reject) => {
        axios.get(host + String(method), {
            params: params
        }).then(res => {
            resolve(res.data.result);
        }).catch(err => {
            reject(err.data)
        })
    });
} 