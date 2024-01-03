module.exports = (sequelize, DataTypes) => {
    const alias = 'Actores'
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      last_name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      rating: {
        type: DataTypes.DECIMAL(3,1),
        allowNull: true,
        default: null
      },
      favorite_movie_id:{
        type: DataTypes.INTEGER(10),
        allowNull: true,
        default: null
      }
    }
  
    const config = {
      tableName: 'actors',
      timeStamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  
    const Actor = sequelize.define(alias, cols, config)
  
    return Actor
  }