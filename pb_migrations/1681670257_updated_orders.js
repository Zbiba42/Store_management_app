migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // remove
  collection.schema.removeField("yt4bqitq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b51iggrk",
    "name": "produits",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

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
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("b51iggrk")

  return dao.saveCollection(collection)
})
