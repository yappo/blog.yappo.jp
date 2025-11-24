設定ファイルやクラス構造を諸々変えたよ
meta.tomlの読み込みがおかしいなと思ったらktomlをだいぶ古いの使ってたので0.7.1にアップデート。

そして config.toml がだいぶ雑だったので[構造化](https://github.com/yappo/blog.yappo.jp/blob/165be7182a0b6c8b086d827fbf15e149bea853d3/config.toml)したのであった。。

あとは、コード全体も Main.kt に固まりがちだったので DDD に倣って構成をガラッと変えてみました。
