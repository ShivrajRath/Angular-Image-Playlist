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

      },
      deletePlaylist: function () {

      },
      updatePlaylist: function (playlistObj) {

      }
    };
  };
})();
