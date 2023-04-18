migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdn899vu",
    "name": "client",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "w4dmd3oq3kh7gh7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": [
        "id"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gdn899vu",
    "name": "client",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "w4dmd3oq3kh7gh7",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
