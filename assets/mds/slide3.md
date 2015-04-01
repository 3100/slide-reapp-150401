# reappとは

<img src="http://i.gyazo.com/842b96bcf3a646c81f8a95b883bff694.png" width="250px" />

[Reapp - Hybrid apps, fast](http://reapp.io/)

`React`を用いたネイティブアプリ開発用キット。

- ネイティブ風UI(テーマは自作可能)
- `Cordova`と連携しネイティブ用プロジェクトを出力できる
- アニメーション、ルーティングなどを拡張

## 利点

- 既にあるコンポーネント(GUI部品)を用いて、簡単なアプリが作れる
- iOS風テーマが最初から用意されているので、それっぽいのが作れる
- 最初からルーティングなど各種ライブラリを同梱しているので迷わない

## 欠点

- 所詮Webなのでアニメーションがもたつくことがある
- `Cordova`もといネイティブ環境の制限を受ける。Web開発時と同じようにはいかないことも。
- ドキュメント、サンプル(公式で2つアプリ例がある)がまだ少ない。
- 2Dゲームとかには向かない

---

## 使い方

### Web

~~~
$ npm install -g reapp
$ reapp new my-first-app
$ cd my-first-app
$ reapp run
~~~

で`localhost:3010`(とバックエンドサーバーとして`:3011`)が立ち上がります。

### iOS

事前に`cordova`が必要です。(`npm install -g cordova`)

~~~
$ reapp build ios
~~~

で、`./build/ios`下に必要なファイルを出力します。

別ディレクトリにて

~~~
$ cordova create my-awesome-app com.your-id.project-name awesome-project-name
$ cd my-awesome-app
$ rm -r www && ln -s reapp-project-dir/build/ios www
$ cordova platform add ios
$ cordova prepare
~~~

とすると`Xcode`用のプロジェクトファイルが出力されます。

さすがに面倒くさいので暫定的に

~~~
$ npm run build:ios
~~~

でやってくれる`reapp`用プロジェクトテンプレートを作りました。(とりあえず動くだけ)

`reapp`プロジェクトを新規作成する際に、

~~~
$ reapp new my-second-app 3100/ios
~~~

とすると以下をプロジェクトテンプレートとして利用します。

cf. [3100/starter-ios](https://github.com/3100/starter-ios)
