"use strict";

GameStates.makePreloader = function( game )
{

	var background = null;
	var preloadBar = null;

	var ready = false;

    return {
    
        preload: function ()
        {
            //	These are the assets we loaded in Boot.js
            //	A nice sparkly background and a loading progress bar
            background = game.add.sprite(0, 0, 'preloaderBackground');
            preloadBar = game.add.sprite(500, 300, 'preloaderBar');
            preloadBar.anchor.setTo(0.5);
    
            //	This sets the preloadBar sprite as a loader sprite.
            //	What that does is automatically crop the sprite from 0 to full-width
            //	as the files below are loaded in.
            game.load.setPreloadSprite(preloadBar);
    
            //	Here we load the rest of the assets our game needs.
            //	As this is just a Project Template I've not provided these assets, swap them for your own.
            game.load.atlas('playButton', 'assets/Play.png', 'assets/play_button.json');
            //	+ lots of other required assets here

            // My Assets
            game.load.image('background','assets/background.png');
            //game.load.image('spot','assets/spot.png');
            game.load.image('grid','assets/grid.png');
            game.load.image('gridA','assets/grid_A.png');
            game.load.image('gridB','assets/grid_B.png');
            game.load.image('buy','assets/buy.png');
            game.load.image('end','assets/endTurn.png');

            game.load.spritesheet('move', 'assets/Move.png', 80, 80);
            game.load.spritesheet('attack', 'assets/Attack.png', 80, 80);

            game.load.spritesheet('char','assets/character.png', 32, 32);
            game.load.spritesheet('tank','assets/tank.png', 92, 70);
            game.load.image('turret','assets/Turret.png');

            //game.load.spritesheet('tile','assets/sheet.png', 70, 70);
        },
    
        create: function ()
        {    
            //	Once the load has finished we disable the crop because we're going to sit in the update loop for a short while as the music decodes
            preloadBar.cropEnabled = false;
    
        },
    
        update: function ()
        {    
            //	You don't actually need to do this, but I find it gives a much smoother game experience.
            //	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
            //	You can jump right into the menu if you want and still play the music, but you'll have a few
            //	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
            //	it's best to wait for it to decode here first, then carry on.
            
            //	If you don't have any music in your game then put the game.state.start line into the create function and delete
            //	the update function completely.
            
            
            if (ready == false)
            {
                ready = true;
                game.state.start('MainMenu');
            }
        }
    
    };
};
