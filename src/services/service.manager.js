export default class Services {
  constructor(dao) {
    this.dao = dao;
  }
  async getAll() {
    try {
      const response = await this.dao.getAll();
      if (!response) throw new Error("Error get all");
      return response;
    } catch (error) {
      throw error;
    }
  }
  async create(obj) {
    try {
      const response = await this.dao.create(obj);
      if (!response) throw new Error("Error create");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(id, obj) {
    try {
      const response = await this.dao.update(id, obj);
      if (!response) throw new Error("Error update");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async delete(id) {
    try {
      const response = await this.dao.delete(id);
      if (!response) throw new Error("Error delete");
      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
  async getById(id) {
    console.log('Buscando usuario con ID:', id);
    try {
        const user = await this.dao.getById(id);
        if (!user) {
            console.error('Usuario no encontrado con ID:', id);
            throw new Error("Usuario no encontrado");
        }
        return user;
    } catch (error) {
        console.error('Error en getById:', error.message);
        throw new Error("Error en getById: " + error.message);
    }
}

}
