/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vl6yi1gkadqohgg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ve20rblr",
    "name": "poleid",
    "type": "text",
    "required": false,
    "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("vl6yi1gkadqohgg")

  // remove
  collection.schema.removeField("ve20rblr")

  return dao.saveCollection(collection)
})
