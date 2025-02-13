KWebScraper - なんとなく Kotlin で Web::Scraper 実装してみた
ふと Kotlin で DSL を実装してみたくなって、なんか題材ないかなと思ったら [Web::Scraper](https://metacpan.org/pod/Web::Scraper) が丁度良さそうな粒度だったので作ってみた。

Perl だと同じ関数名でスコープごとに役割を変えていくって奴は `local` を使ってレキシカルスコープに絞ってコードリファレンスを場面場面で変えていくって感じでやっていくんだけど。
Kotlin の場合は、レシーバ付き関数リテラルを使ったら良いのかなと思って作ってみたら普通に作れた。

`scraper` の中にある `process` と、 `process` の中にある `process` は別のクラスにメソッド生やしてるんだけど、なんかもっとちゃんとした書き方ありそう。
Perl の Web::Scraper のほうは取得したデータのハッシュへの置き換えを key/value の形で指定しやすい感じで作ってるんだけど、 Builder 的に組み立てずに it に取得できた Element Object を渡しとくので、普通にコード書いて　Object を作ってくださいな。という感じで

実装は下記の様な感じです。

<script src="https://gist.github.com/yappo/3e2d77b3ddb9146eee7e49557151fa41.js"></script>

他の DSL 実装見ずに適当に作っただけなので、あとで他の実装も見ておこう。。
1時間で作れるかと思ってたけど眠くて3時間かかってしまった。。

てか何も考えずに gist 貼ってみたけど普通に表示できるのねw
