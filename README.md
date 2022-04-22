# NPCAの旧サイトアーカイブ

# Memo

Done↓

1,wget -r -l inf -p -E -k -np --restrict-file-names=nocontrol https://www.npca.jpして旧サイトのデータ取得
2,なんかゲーム展示の2021NBGA.pngがうまく表示されてなかったので修正
(works/index.htmlとworks/programs/index.htmlのパス書き換え&img/contents/program/に2021NBGA.png追加)
3,Cloudflare Pagesは25MB以上のファイルを公開出来ないしgithub自体もクソでかファイルをcommit出来ないので、PDF版の部誌とゲームの圧縮ファイルを全て削除
(works/magazine内の部誌類ほぼ全て(なぜかPDFがhtmlにされてるんやが...) & program内のゲームの圧縮ファイル全て(なぜか部誌みたいなやつと謎の画像が紛れ込んでた　これ何)
4,works/magazine内とprogram内にdummy.html設置
5,works/index.html, works/magazine/index.html, works/programs/index.html に書いてあるダウンロードリンクのパスを4,で置いたダミーhtml宛に変更

補足
旧サイト内のコンテンツは配信されていない旨を新ホームページに記載しましょう
