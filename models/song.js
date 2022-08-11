'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsTo(models.Playlist, {foreignKey:'playlistId',onDelete:'CASCADE',})
    }
  }
  Song.init({
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    duration: DataTypes.STRING,
    image: DataTypes.STRING,
    playlistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model:'playlists',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Song',
    tableName: 'songs'
  });
  return Song;
};