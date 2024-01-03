module.exports = (sequelize, DataTypes) => {
    const alias = 'Generos'
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      ranking: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: 1,
      }
    }
  
    const config = {
      tableName: 'genres',
      timeStamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  
    const Genero = sequelize.define(alias, cols, config)
  
    return Genero
  }