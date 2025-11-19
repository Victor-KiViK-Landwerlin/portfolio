/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3942309495",
    "maxSelect": 7,
    "name": "tools",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Figma",
      "Illustrator",
      "Astro",
      "HTML/CSS",
      "Tailwind",
      "Observable",
      "JavaScript"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_484305853")

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "select3942309495",
    "maxSelect": 1,
    "name": "tools",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Figma",
      "Illustrator",
      "Astro",
      "HTML/CSS",
      "Tailwind",
      "Observable",
      "JavaScript"
    ]
  }))

  return app.save(collection)
})
