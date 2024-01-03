module.exports = (sequelize, DataTypes) => {
    const alias = 'Peliculas'
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      awards: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      length: {
        type: DataTypes.INTEGER,
      },
      genre_id: {
        type: DataTypes.INTEGER,
      },
    }
  
    const config = {
      tableName: 'movies',
      timeStamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  
    const Pelicula = sequelize.define(alias, cols, config)
  
    return Pelicula
  }