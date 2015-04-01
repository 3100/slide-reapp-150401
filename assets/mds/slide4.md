# ネイティブ開発時の注意点

## ローカルリソースでハマる

- `require()` するようなものは `./assets/share/` 下に置く(要検証)
- それ以外のものは素直に外部に置いたほうが良い(パスの解決にハマる)

## サーバー機能(Web時のみ有効)を使うとハマる

- `location="history"`などの機能は動かない

## cordova serveを使う

`reapp run`を使う代わりに`cordova serve`を使う方が同じエラーを再現させやすい
`cordova serve`はデフォルトで`localhost:8000`を使用します。
