module.exports = ({ env }) => ({
  meilisearch: {
    enabled: true,
    config: {
      'restaurant': {
        filterEntry({ entry }) {
          return entry.id !== 2
        },
        transformEntry({ entry }) {
          return {
            ...entry,
            categories: entry.categories.map(category => category.name),
          }
        },
        indexName: ['my_restaurant'],
        settings: {
          searchableAttributes: ['*'],
        },
      },
      'about-us': {
        indexName: ['content'],
      },
      'homepage': {
        indexName: ['content'],
      },
      // host: "http://localhost:7700",
      // apiKey: "masterKey"
    },
  },
})
