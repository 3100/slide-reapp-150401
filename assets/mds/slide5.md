# Fluxはどうするのか

多種多様な`Flux`ライブラリが開発されています。
好きなものを使いましょう。

## DeLolean

<img src="http://i.gyazo.com/b83a8ce1c2f523b4d2e04528a57f0084.png" width="200px"/>

[deloreanjs/delorean](https://github.com/deloreanjs/delorean)

- 名前がバック・トゥー・ザ・○ューチャーのアレ。
    - 次元転移装置の名前が`Flux`キャパシタというネタ
- どこか(失念)で使いやすいと書かれていたので使用中。
- Fluxの図を見ながらやるとわかりやすい。

<img src="http://facebook.github.io/flux/img/flux-simple-f8-diagram-explained-1300w.png" width="250px" />

以下、`DeLolean`におけるFlux。

- View
    - いわゆるView。ReactのView
    - ユーザイベントをActionと結びつけるなど
- Action
    - ただのJSオブジェクト
    - ActionはDispatcherを知っている
    - 具体的な処理は知らない
- Dispatcher
    - deloleanのヘルパメソッドで生成する
    - 具体的に何かを処理し、結果を全Storeへ通知する。(`dispatch`)
    - getStores()という仕組みのために関連するStoreを知っている(が、要調査)
- Store
    - deloleanのヘルパメソッドry
    - 処理をView側に通知する(`emit`)

以下のチュートリアルを見れば、雰囲気はわかります。

cf .[delorean/tutorial.md at master · deloreanjs/delorean](https://github.com/deloreanjs/delorean/blob/master/docs/tutorial.md)
