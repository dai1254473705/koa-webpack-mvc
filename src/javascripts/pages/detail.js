import * as name from '__js__/module/base';
import utils from 'utils';
// import('../../scss/haha.css');
// import('../../scss/test.scss');
// import timeout from '../module/test';
console.log(utils);
document.querySelector('.btn').onclick = function () {
    let a = import('../module/test');
    a.then((res)=>{
        res.default()
    })
};
console.log(name);
