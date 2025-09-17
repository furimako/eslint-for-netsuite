# eslint-for-netsuite
## 1. SuiteScript用Lintツールの導入手順 (Visual Studio Code)
### 事前準備
1. [Visual Studio Code](https://code.visualstudio.com/) をインストール
1. [Git](https://git-scm.com/downloads) をインストール
1. [Node.js](https://nodejs.org/en/download/) をインストール

### Lintツールをインストール
1. コマンドプロンプトで以下のコマンドを実行
    ```bash
    git clone https://github.com/furimako/eslint-for-netsuite.git
    cd eslint-for-netsuite
    npm install
    ```

### SuiteScript ファイルの配置
1. 自動生成された「eslint-for-netsuite」フォルダの下に「src」フォルダを作成し、その中にLintツールを実行したい SuiteScript ファイルを配置する
    - (例) eslint-for-netsuite/src/sample-code.js

### Visual Studio Codeの設定
1. [Visual Studio Code](https://code.visualstudio.com/) を開いて [「ESLint」という拡張機能](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) をインストールする

## 2. SuiteScript 2.0 (UserEventScript) で使えない JavaScript のシンタックス
- let, const
- for-of
- \`${variable}\`
- Object.entries (Object.keys は OK)
