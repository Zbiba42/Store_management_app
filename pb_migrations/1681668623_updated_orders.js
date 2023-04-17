migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yt4bqitq",
    "name": "produits",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "iwkp5worhbpetih",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yt4bqitq",
    "name": "produits",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "iwkp5worhbpetih",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": [
        "nom",
        "prix"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
