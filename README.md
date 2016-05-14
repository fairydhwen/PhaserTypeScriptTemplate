#PhaserTypeScriptTemplate <img align="right" src="https://8be1feb9e98c28e3c8462f7d6d12eda472365af5.googledrive.com/host/0BxgnrT_mGWcmYnJ0TV9UUFRKZlU/TemplateIcon.png"/>

##Description

This is an advanced template to start a Phaser project with TypeScript (HTML5 Game Framework). 

This template includes 4 classical states : **Boot**, **Preload**, **Menu** and a **Level** with a simple built-in example (image, sprite, atlas, sound, mouse-click and keyboard inputs).


| Preload (sound/img/sprites) | Menu (click logo to start) | Simple scene (input L/R to move) |
| --------------------------- | --------------------- | ---------------------------- |
| ![Preload](https://8be1feb9e98c28e3c8462f7d6d12eda472365af5.googledrive.com/host/0BxgnrT_mGWcmYnJ0TV9UUFRKZlU/PreloadScreen.png)|![Menu](https://8be1feb9e98c28e3c8462f7d6d12eda472365af5.googledrive.com/host/0BxgnrT_mGWcmYnJ0TV9UUFRKZlU/MenuScreen.png) | ![Level](https://8be1feb9e98c28e3c8462f7d6d12eda472365af5.googledrive.com/host/0BxgnrT_mGWcmYnJ0TV9UUFRKZlU/LevelScreen.png) |

##How to install ? (Visual Studio 2015 and Community)
You got many option possible:

- you can auto-install this template directly from the extension available at [Visual Studio Gallery](https://visualstudiogallery.msdn.microsoft.com/) :star:
    - from visual studio menu, search for *Phaser TypeScript Template* in the files > new project > online's search box
    - or install from direct link :  [PhaserTypeScriptTemplateExtension.vsix](https://64934033c9a755801fc92a7328c0b4d365191018.googledrive.com/host/0BxgnrT_mGWcmUGxUdXlfREM1VWc/template/PhaserTypeScriptTemplateExtension.vsix) 
- Manualy, you have to download this git folder as a zip file, and then _unzip_ it to *Username\My Documents\Visual Studio 14\Templates\ProjectTemplates\TypeScript\*.
    - or you can just download and copy directories/files you only need and insert them into your project. 

:point_right: *You will need to restart VS to refresh the cache.*

##How to use it ?
You just need to start a new project and select *Installed > Templates > TypeScript > Phaser Application with TypeScript* :

![Phaser Project](https://64934033c9a755801fc92a7328c0b4d365191018.googledrive.com/host/0BxgnrT_mGWcmUGxUdXlfREM1VWc/template/img/NewPhaserProject.png)

Enter your project's name and chose the folder options. Your project's namespace will be automatically updated. 

To test the project, select the *build\index.html* and press F5. (Of course TypeScript is required : *npm install -g typescript*)

##Project struture

I tried to merge best pratices and sources in order to build this template. So you can develop small to large projects.
You just have to follow the guideline of this struture (but you can adapt it accordingly to your needs as well):

![Level](https://8be1feb9e98c28e3c8462f7d6d12eda472365af5.googledrive.com/host/0BxgnrT_mGWcmYnJ0TV9UUFRKZlU/Structure.png)

## :exclamation: Phaser version 
Be carefull, this template is packaged with phaser 2.4.7 (may 2016). You have to check and update the phaser library and definitions when you start a new project:

- build\libs\phaser-min.js
- tsDefinitions\ * .d.ts

links: 
[Phaser.io](http://phaser.io/) | [Github Phaser](https://github.com/photonstorm/phaser)

##Contact
Feel free to contact me if you have any questions or comments. You can also check my youtube chanel for video tutorial (FR but im starting EN-SUBS too)

@Fairydhwen [Twitter](http://www.twitter.com/fairydhwen) | [Youtube](https://www.youtube.com/channel/UCdqtjjnnc20rGUfry0IfCjw)

##Ressources and specials thanks

[Richard DAVEY AKA PhotonStorm](https://twitter.com/photonstorm) : the creator of phaser - He wrote lot of articles that inspired this template.

[Mike from GameFromScratch](http://www.gamefromscratch.com/) : He provides incredible tutorials and he also wrote a well detailed serie for Phaser with TypeScript.

# Credits

##About Phaser
Phaser is a fun, free and fast 2D game framework for making HTML5 games for desktop and mobile web browsers, supporting Canvas and WebGL rendering. You can dowlaod it and get all the documentation you need at [Phaser.io](http://phaser.io/) 

The Phaser logo and characters are © 2016 Photon Storm Limited.
Photon Storm Ltd owns the trademark Phaser.
[This trademark policy](http://phaser.io/download/trademark) is based on the Ubuntu trademark policy and published under the CC-BY-SA license.

##About TypeScript
TypeScript is a free and open source programming language developed and maintained by Microsoft.
Get more information about TypeScript and all the documentation you need on the official WebSite : [TypeScriptLang](https://www.typescriptlang.org/)

##Assets from KENNEY

[http://kenney.nl](http://kenney.nl/)

[License Creative Commons Zero, CC0](http://creativecommons.org/publicdomain/zero/1.0/)

##Tools

[Texture Packer](https://www.codeandweb.com/)

[Tiled](http://www.mapeditor.org/)
