/**
 * @namespace PlaylistService
 * @memberof Services
 * @description Playlist Service. All operation on playlist controller here.
 * @author ShivrajRath
 */

var  _ = require('lodash');

(function () {
  'use strict';

  module.exports = function (PlaylistModel, UtilityFactory) {
    var playlistService = {

      // Private member variables and functions
      _playlist: {},

      /**
       * Adds a playlist object to playlist queue
       * @param {Object} playlist
       */
      _addToPlaylistQueue: function (playlist) {
        if (playlist && playlist.playlistId) {
          this._playlist[playlist.playlistId] = playlist;
        } else {
          throw new Error('playlistObj is not correct. Does not contain a playlistId');
        }
      },

      /**
       * Retrieves a playlist object, if not present creates it
       * @param {Object} playlistObj
       */
      _retrievePlaylistInstance: function (playlistObj) {
        var playlist;

        if (playlistObj.playlistId) {
          playlist = new PlaylistModel(playlistObj);
          this._addToPlaylistQueue(playlist);
        } else if (playlistObj && playlistObj.name) {
          this._generatePlaylistId(playlistObj);
          playlist = new PlaylistModel(playlistObj);
          this._addToPlaylistQueue(playlist);
        } else {
          throw new Error('playlistObj is not correct');
        }

        return playlist;

      },


      /**
       * Generates playlistId for a playlist object
       */
      _generatePlaylistId: function (playlistObj) {
        playlistObj.playlistId = UtilityFactory.randomString(4) + '_Playlist_' + new Date().getTime();
      },

      /************************** Public Methods **************************/

      /**
       * Creates a new playlist
       * @param   {[[Object]]} playlistObj [[Description]]
       * @returns {[[Object]]} [[Description]]
       */
      createPlaylist: function (playlistObj) {
        return this._retrievePlaylistInstance(_.cloneDeep(playlistObj));
      },

      /**
       * Returns a playlist
       * @param   {[[string]]} playlistId
       * @returns {[[Object]]} [[Playlist Object]]
       */
      readPlaylist: function (playlistId) {
        if (playlistId) {
          return this._playlist(playlistId);
        } else {
          throw new Error('playlistid not found');
        }
      },

      /**
       * Returns the playlist queue
       * @returns {[[Object]]} [[All Playlists]]
       */
      readAllPlaylists: function () {
        return this._playlist;
      }

    };
    return playlistService;
  };

})();
