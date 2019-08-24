import {name} from '__js__/module/base';
import('../../scss/haha.css');
import('../../scss/test.scss');
// import timeout from '../module/test';
// import jquery from 'jquery';
document.querySelector('.btn').onclick = function () {
    let a = import('../module/test');
    a.then((res)=>{
        res.default()
    })
};
// console.log(jquery);
