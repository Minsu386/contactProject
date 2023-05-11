#!/usr/bin/env node
const {db, Contact, GroceryList} = require('../server/db')

const seed = async () => {
  await db.sync({force: true})

  const cody = await Contact.create({name: 'Cody', phoneNumber: 8881112233, email: 'asburn@gmail.com'})
  const fira = await Contact.create({name: 'Fira', phoneNumber: 8001112244, email: 'bsburn@gmail.com'})
  const earl = await Contact.create({name: 'Earl', phoneNumber: 2031112255, email: 'csburn@gmail.com'})
  const ed = await Contact.create({name: 'Ed', phoneNumber: 3031112256, email: 'abbcsburn@gmail.com'})
  const tom = await Contact.create({name: 'Tom', phoneNumber: 4031112257, email: 'cddcsburn@gmail.com', skillId: 1})
  const fer = await Contact.create({name: 'Fer', phoneNumber: 5031112258, email: 'refcsburn@gmail.com'})

  const apple = await GroceryList.create({
    name: 'Apples',
    price: 0.69,
    quantity: 3,
  })

  const banana = await GroceryList.create({
    name: 'Bananas',
    price: 0.49,
    quantity: 3,
  })

  const eggs = await GroceryList.create({
    name: 'Eggs',
    price: 0.99,
    quantity: 3,
  })

  db.close()
  console.log(`

    Seeding successful!

  `)
}

seed().catch(err => {
  db.close()
  console.log(`

    Error seeding:

    ${err.message}

    ${err.stack}

  `)
})
