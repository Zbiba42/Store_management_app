migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // remove
  collection.schema.removeField("2miia65p")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("6b41bbpmfpwutbw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2miia65p",
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
  collection.schema.removeField("qjbvinjz")

  return dao.saveCollection(collection)
})
