migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4dmd3oq3kh7gh7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nobuk002",
    "name": "sexe",
    "type": "select",
    "required": true,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Masculin.Féminin"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4dmd3oq3kh7gh7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nobuk002",
    "name": "sexe",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Masculin.Féminin"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
