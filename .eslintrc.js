module.exports = {
  // 表示当前目录即为根目录，ESLint 规格将被限制到该目录下
  root: true,
  // env 表示启动ESlint检测的环境
  env: {
    // 在node环境下启动ESLint检测的环境
    node: true
  },
  // ESLint 中基础配置需要继承的配置
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要修改的启⽤规则及其各⾃的错误级别
  /**
   * 错误级别分为三种：
   * "off" 或 0 - 关闭规则
   * "warn" 或 1 - 开启规则，使⽤警告级别的错误：warn (不会导致程序退出)
   * "error" 或 2 - 开启规则，使⽤错误级别的错误：error (当被触发的时候，程序会退出)
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // "quotes": "off" // 修改不校验
    quotes: 'warn', // 修改警告
    // 该规则表示关闭《方法名后增加空格》的规则
    'space-before-function-paren': 'off',
    // 关闭命名规则校验
    'vue/multi-word-component-names': 'off'
  }
}
