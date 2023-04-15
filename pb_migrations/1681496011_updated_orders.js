migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // remove
  collection.schema.removeField("jcz0ziak")

  // add
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
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jcz0ziak",
    "name": "client",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // remove
  collection.schema.removeField("gdn899vu")

  return dao.saveCollection(collection)
})
