import * as name from '__js__/module/base';
import utils from 'utils';
import axios from 'axios'
import('../../scss/haha.css');
import('../../scss/test.scss');
require('raw-loader!../../../viewsSrc/detail.ejs')
import timeout from '../module/test';
console.log('---asdfasdfasdf-');
const dom = document.querySelector('.btn');
if (dom) {
    dom.onclick = function () {
        let a = import('../module/test');
        a.then((res)=>{
            res.default()
        })
    };
}
// src/js/index.js 文件
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => {
        const href = window.location.href
        axios.get(href).then(res => {
            const template = res.data
            document.body.innerHTML = template
        }).catch(e => {
            console.error(e)
        })
    })
}
