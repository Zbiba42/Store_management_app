migrate((db) => {
  const collection = new Collection({
    "id": "w4dmd3oq3kh7gh7",
    "created": "2023-04-09 16:43:33.089Z",
    "updated": "2023-04-09 16:43:33.089Z",
    "name": "clients",
    "type": "base",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_TrwqRF3` ON `clients` (`cin`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("w4dmd3oq3kh7gh7");

  return dao.deleteCollection(collection);
})
