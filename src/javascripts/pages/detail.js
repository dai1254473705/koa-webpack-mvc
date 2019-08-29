import * as name from '__js__/module/base';
import utils from 'utils';
import('../../scss/haha.css');
import('../../scss/test.scss');
// import timeout from '../module/test';
const dom = document.querySelector('.btn');
if (dom) {
    dom.onclick = function () {
        let a = import('../module/test');
        a.then((res)=>{
            res.default()
        })
    };
}

console.log(name);
