/*!
 *  @Author:DIEW
 *  @Date:2018-7-22
 *  webpack 如何输出结果的相关选项
 */

const path = require("path");
const OutPutConfig = {
    // 所有输出文件的目标路径
    // 必须是绝对路径（使用 Node.js 的 path 模块）
    path: path.resolve(__dirname, "../dist/javascripts"), // string
    filename: "[name].js", // 用于多个入口点(entry point)（出口点？）
    // filename: "myfirst-webpack.bundle.js" //单文件入口
    publicPath: "/javascripts/",
};
module.exports  = OutPutConfig;