/**
 * @namespace PlaylistModel
 * @memberof Models
 * @description Playlist Model. Controls the CURD on a Playlist object.
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function () {

    var PlaylistModel = function (playlistObj) {
      if (playlistObj) {
        this.setData(playlistObj);
      }
    };

    PlaylistModel.prototype = {

      setData: function (playlistObj) {
        this.name = playlistObj.name;
        this.description = playlistObj.description;
        this.tags = playlistObj.tags;
        this.playlistId = playlistObj.playlistId;
      },

      deletePlaylist: function () {

      },

      updatePlaylist: function (playlistObj) {
        this.setData(playlistObj);
      }
    };

    return PlaylistModel;
  };
})();
