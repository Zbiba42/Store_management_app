migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4dmd3oq3kh7gh7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "17h3mekr",
    "name": "nom",
    "type": "text",
    "required": true,
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
  const collection = dao.findCollectionByNameOrId("w4dmd3oq3kh7gh7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "17h3mekr",
    "name": "nom",
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
})
