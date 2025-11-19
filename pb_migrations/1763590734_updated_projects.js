/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1874629670",
    "maxSelect": 8,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Design",
      "Webdesign",
      "Branding",
      "UI/UX",
      "Editorial",
      "Dataviz",
      "App",
      "Identity"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
  collection.fields.addAt(6, new Field({
    "hidden": false,
    "id": "select1874629670",
    "maxSelect": 1,
    "name": "tags",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Design",
      "Webdesign",
      "Branding",
      "UI/UX",
      "Editorial",
      "Dataviz",
      "App",
      "Identity"
    ]
  }))

  return app.save(collection)
})
