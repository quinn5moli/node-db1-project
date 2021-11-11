const getAll = () => {
  // DO YOUR MAGIC
  return db('posts')
}

const getById = async (id) => {
  // DO YOUR MAGIC
  return db('posts').where({ id }).first()
}

const create = async (account) => {
  // DO YOUR MAGIC
  const [id] = await db('posts').insert(account)

  return getById(id)
}

const updateById = async (id, account) => {
  // DO YOUR MAGIC
  await db('posts').where({ id }).update(account)

  return getById(id)
}

const deleteById = async (id) => {
  // DO YOUR MAGIC
  const toBeDeleted = await getById(id)
  await db('posts').where('id', id).delete()

  return toBeDeleted;
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
