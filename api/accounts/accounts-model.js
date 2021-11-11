const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

const getById = (id) => {
  // DO YOUR MAGIC
  return db('accounts').where({ id }).first()
}

const create = async (account) => {
  // DO YOUR MAGIC
  const [id] = await db('accounts').insert({...account, name: account.name.trim()})

  return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('accounts').where({ id }).update(account)

  return getById(id)
}

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const toBeDeleted = await getById(id)
  await db('accounts').where('id', id).delete()

  return toBeDeleted;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
