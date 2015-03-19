/**
 * @namespace PlaylistService
 * @memberof Services
 * @description Playlist Service. All operation on images controller here.
 * @author ShivrajRath
 */
(function () {
  'use strict';

  module.exports = function ($http, $q, PlaylistModel) {
    var PlaylistService = {

      // Private member variables and functions
      _playlist: {},

      // Adds a playlist object to playlist queue
      _addToPlaylist: function (playlist) {
        if (playlist && playlist.playlistId) {
          this._playlist[playlist.playlistId] = playlist;
        } else {
          throw new Error("_addToPlaylist didn't get correct playlist object");
        }
      },

      // Retrieves a playlist object, if not present creates it
      _retrievePlaylistInstance: function (playlistObj) {
        var playlist;

        if (playlistObj.playlistId) {
          playlist = new PlaylistModel(playlistObj);
          this._addToPlaylist(playlist);
        } else if (playlistObj && playlistObj.name) {
          this._generatePlaylistId(playlistObj);
          playlist = new PlaylistModel(playlistObj);
          this._addToPlaylist(playlist);
        }else{
          throw
        }
      },


      _loadPlaylists: function (playlistId) {

      },


      _generatePlaylistId: function (playlistObj) {
        this.playlistId = "Playlist_" + new Date().getTime();
      },

      // Public Methods
      createPlaylist: function (playlistObj) {
        this._generatePlaylistId(playlistObj);
        var playlist = new PlaylistModel(playlistObj);
        this._addToPlaylist(playlist);
      },

      readPlaylist: function (imgId) {

      },

      readAllPlaylists: function (playListId) {

      }
    };
  };

})();
