# eslint-for-netsuite
## SuiteScript用 Lintツール (Visual Studio Code)
### 事前準備
- [Visual Studio Code](https://code.visualstudio.com/) をインストール
- [Git](https://git-scm.com/downloads) をインストール
- [Node.js](https://nodejs.org/en/download/) をインストール

### Lintツールをインストール
- コマンドプロンプトで以下のコマンドを実行
    ```bash
    git clone https://github.com/furimako/eslint-for-netsuite.git
    cd eslint-for-netsuite
    npm install
    ```

### SuiteScript ファイルの配置
- 自動生成された「eslint-for-netsuite」フォルダの下に「src」フォルダを作成し、その中にLintツールを実行したい SuiteScript ファイルを配置する
    - (例) eslint-for-netsuite/src/sample-code.js

### Visual Studio Codeの設定
- [Visual Studio Code](https://code.visualstudio.com/) を開いて [「ESLint」という拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) をインストールする

## SuiteCloud のコマンド集
### 検証 (最頻出)
編集のたびに回す。`deploy.xml` に含まれる範囲を検証する。
```bash
suitecloud project:validate
```

アカウント固有値があっても止めずに警告扱いにする。
```bash
suitecloud project:validate --accountspecificvalues WARNING
```

### デプロイ
まず dry run で、実際には書き込まずに結果を確認する。
```bash
suitecloud project:deploy --dryrun
```

問題なければ配布する。ログをファイルに残す場合は `--log` を付ける。
```bash
suitecloud project:deploy
suitecloud project:deploy --log logs/
```

### アカウントからローカルへ取り込み
カスタムオブジェクトを `src/Objects/` に取り込む。まず対話形式 (`-i`) で探すのが楽。
```bash
suitecloud object:import -i
suitecloud object:import --type customrecordtype --scriptid ALL --destinationfolder /Objects
```

取り込み済みオブジェクトをアカウントの最新版で上書きする。
```bash
suitecloud object:update --scriptid customrecord_example
```

ファイルキャビネットのファイルを `src/FileCabinet/` に取り込む。
```bash
suitecloud file:import --paths "/SuiteScripts/example.js"
```

### 調査 (アカウント側に何があるか見る)
```bash
suitecloud object:list --type customrecordtype
suitecloud file:list --folder "/SuiteScripts"
```

### 作成・依存関係
SuiteScript ファイルの雛形を作る。
```bash
suitecloud file:create --path "/SuiteScripts/example.js" --type ClientScript --module N/record N/log
```

`manifest.xml` に不足している依存を追記する。
```bash
suitecloud project:adddependencies
```

スクリプトだけを手早くアカウントへ上げる (オブジェクトは対象外)。
```bash
suitecloud file:upload --paths "/SuiteScripts/example.js"
```

### 認証 (最初に一度だけ)
ブラウザログインでアカウントを認証し、既定の auth ID を設定する。
```bash
suitecloud account:setup
```

登録済み auth ID の確認と、既定の切り替え。
```bash
suitecloud account:manageauth --list
suitecloud account:manageauth --info <AUTHID>
suitecloud account:setup:ci --select <AUTHID>
```

### ユニットテスト
`@oracle/suitecloud-unit-testing` + jest。
```bash
npm test
```
