## スケジュール

#### 【レベル1】管理画面の習熟（これが全ての土台）

まずは、Strapiが標準で提供する強力な機能を管理画面上で使いこなせることが重要です。

- [x] コンテンツタイプ・ビルダーの完全理解（最重要）
  - [x] 基本フィールド: Text, Rich Text, Number, Date などは既に触りましたね。
  - [x] リレーション (Relation): 「ブログ記事」と「著者」のように、2つのコンテンツタイプを繋ぐ機能です。`has one`, `has many` などの関係性を実際に作ってみましょう。
  - [x] コンポーネント (Component): 再利用可能なフィールドのグループです。例えば、「SEO設定」というコンポーネント（中身は`meta_title`, `meta_description`）を作って、色々なコンテンツタイプに使いまわしてみましょう。
  - [x] ダイナミックゾーン (Dynamic Zone): Strapiの最強機能の一つです。1つのフィールドの中に、複数のコンポーネントを好きな順番で追加できる柔軟なエリアです。モダンなWebサイトの自由なページ構成は、これを使って作ることが多いです。
- [x] ロールと権限設定の理解
  - 「管理パネルのロール」と「APIのロール（Public, Authenticated）」の違いを改めて意識することが重要です。
- [x] メディアライブラリの操作
  - 画像やファイルのアップロード、管理方法に慣れておきましょう。

#### 【レベル2】コードによる基本カスタマイズ（ここからが本番）

管理画面でできないこと、または自動化したいことをコードで実現します。Strapiプロジェクトの `src` フォルダの中を編集していくことになります。

- [ ] APIの拡張（Controllers & Services）
  - 目的: デフォルトのAPIのレスポンスを、フロントエンドが使いやすいように加工したり、独自のロジックを追加したりします。
  - 例: `/api/blogs` を叩いた時に、記事データに加えて「この記事の著者名」や「関連記事一覧」も一緒に返す、など。
  - 触るファイル: `src/api/{コレクション名}/controllers/` や `src/api/{コレクション名}/services/`
- [x] ライフサイクルフック (Lifecycle Hooks)
  - 目的: データの作成・更新・削除などのイベントの前後に、特定の処理を自動で実行させます。
  - 例:
    - ブログ記事が作成される前 (`beforeCreate`) に、タイトルが不適切でないかチェックする。
    - ブログ記事が更新された後 (`afterUpdate`) に、外部の検索エンジンに更新を通知する。
  - 触るファイル: `src/api/{コレクション名}/content-types/{スキーマ名}/lifecycles.ts`
- [ ] 管理画面のカスタマイズ（Admin Panel API）
  - 目的: 管理画面のロゴを変更したり、独自の著作権表示を追加するなど、見た目をカスタマイズします。
  - 触るファイル: `src/admin/app.tsx` （以前、言語設定で触ろうとしたファイルです）

#### 【レベル3】高度なカスタマイズと拡張（まずは知っておく）

これらは最初の1週間でマスターする必要はありませんが、「こんなこともできるのか」と知っておくだけで、将来の技術選定の際に役立ちます。

- [ ] カスタムAPIエンドポイントの作成 (Custom Routes): `/api/blogs` のようなCRUD以外の、全く新しいAPIルート（例: `/api/ranking/update`）を作成する。
- [ ] カスタムプラグインの開発: Strapiの機能を拡張する、再利用可能な独自のプラグインを作成する。
- [ ] GraphQL API: 標準のREST APIの代わりに、GraphQL APIを有効化して利用する。

---

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/dev-docs/cli) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project including [Strapi Cloud](https://cloud.strapi.io). Browse the [deployment section of the documentation](https://docs.strapi.io/dev-docs/deployment) to find the best solution for your use case.

```
yarn strapi deploy
```

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://strapi.io/blog) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
