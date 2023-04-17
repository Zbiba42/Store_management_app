migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // remove
  collection.schema.removeField("qjbvinjz")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qjbvinjz",
    "name": "produits",
    "type": "json",
    "required": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yt4bqitq")

  return dao.saveCollection(collection)
})
