const path = require("path");

module.exports = {
  // webpack打包的入口
  entry: "./app/entry",
  // 定义webpack如何输出的选项
  output: {
    // 所有输出文件的目标路径
    path: path.resolve(__dirname, "dist"),
    filename: "[chunkhash].js",
    // 文件命名模版
    publicPath: ""
    // 构建文件的输出目录
  },
  // 模块相关配置
  module: {
    // 配置模块loaders，解析规则
    rules: []
  },
  // 解析模块的可选项
  resolve: {},
  // 为浏览器开发者工具添加员数据增强调试
  devtool: "source-map",
  // 附加插件列表
  plugins: []
};
