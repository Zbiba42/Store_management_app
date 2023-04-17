migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // remove
  collection.schema.removeField("xh2dpzd7")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m4iyvkqw",
    "name": "date",
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
    "id": "xh2dpzd7",
    "name": "date",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("m4iyvkqw")

  return dao.saveCollection(collection)
})
