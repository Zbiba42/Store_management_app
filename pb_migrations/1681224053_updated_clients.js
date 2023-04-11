migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("w4dmd3oq3kh7gh7")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oynamwya",
    "name": "prenom",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "64kc8b55",
    "name": "email",
    "type": "email",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kutyrsel",
    "name": "age",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

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
        "male.female"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gcbl23t9",
    "name": "cin",
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
    "id": "oynamwya",
    "name": "prenom",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "64kc8b55",
    "name": "email",
    "type": "email",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": [],
      "onlyDomains": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kutyrsel",
    "name": "age",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

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
        "male.female"
      ]
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gcbl23t9",
    "name": "cin",
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
