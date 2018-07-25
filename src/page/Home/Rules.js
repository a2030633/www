import React from 'react';

export default class Rules extends React.Component {
  render() {
    return (
      <div>
        <p>
          1. 领取一个 “第七个领取的人红包最大” 拼手气红包，最多需要 7 次可消耗次数。以此类推：第 N 个最大，最多需要消耗
          N 次。如果该红包之前已被他人领取了 M 次，则消耗 N - M 次。
        </p>
        <p>2. 每天可消耗的次数为：你贡献的 cookie 数量乘以每个 cookie 每天可以领红包的次数，第二天会自动回满次数，美团和饿了么不通用。</p>
        <p>3. 贡献之后的小号 cookie，不允许自己再拿去点红包，被我们检测之后将被限制领取，要解除限制请联系管理员。</p>
        <p>4. 次数不足以领取大红包，胡乱提交链接者，不仅领不到大红包还可能会产生不必要的次数消耗。</p>
        <p>5. 提交 “最大红包已被领取” 的链接，也可能产生不必要的次数消耗，所以领取前，请确认最大红包还未被人领。</p>
        <p>6. 要领最大红包的手机号，切记不要提前打开红包链接，会领到小红包，无法再领最大，而且会浪费你的次数。</p>
        <p>7. 美团、饿了么限制每个手机号每天可以领红包的个数，请确保你填写的手机号还可以领，否则会浪费你的次数。</p>
        <p>
          8.
          特别注意，无法领取差一个就是大红包的情况。例如：第七个是最大红包，已经有六个人领了，此时不要使用我们的领取功能。
        </p>
        <p>
          9. 网站不能保证 100% 领取成功，会有意外情况，不喜勿用。欢迎提 issue 或者加群反馈给我们，我们也在不断修复问题。
        </p>
      </div>
    );
  }
}
