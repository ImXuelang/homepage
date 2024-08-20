English | [Chinese](./README_CN.md)
### xuelang's Homepage

A simple homepage, based on a modification of the [無名の homepage](https://github.com/imsyy/home), with main components translated to TypeScript.

![xuelang's Homepage](/screenshots/main.jpg)

>The logo font on the home page has been compressed, so if you use a font other than this logo, it will change back to the default font, Here is the [full font](https://file.4everland.app/font/Other/Pacifico-Regular.ttf)  

### Demo

>Due to CDN caching, you may need `Ctrl` + `F5` to force a browser cache refresh to see the latest results

- [xuelang's Homepage](https://lonly.love)
- [xuelang's Homepage - Standby](https://worst.love)

### Functions

- [x] Loading animation
- [x] Site description
- [x] Hitokoto
- [x] Date and time
- [x] Live weather
- [x] Time progress bar
- [x] Music player
- [x] Mobile adaptation

* [ ] Player cancels using Aplayer

### Deployment

* **Installation** [node.js](https://nodejs.org/zh-cn/) **Environment**

  > node > 16.16.0  
  > npm > 8.15.0
  
* Then run the `cmd` terminal with **administrator privileges** and `cd` to the project root directory
* In the `terminal` type:

```bash


# Install the dependencies
npm install

# Preview
npm run dev

# Build
npm run build
```

> Once the build is complete, the files in the `dist` folder can be uploaded to the server or imported and automatically deployed with one click using a hosting platform such as `Vercel`.

### Docker Deployment
❌**_Docker installation has not been verified, so it is uncertain whether it is usable!!_**
>The installation and configuration of Docker will not be covered here. Please resolve it on your own.
```bash
# Build
docker build -t home .
# Run
docker run -p 12445:12445 -d home
```
### Web Links

You can customize the website links (pointing to your own site) in src/assets/siteLinks.json:

```json
{
  "icon": "Blog",						
  "name": "Blog",						
  "link": "https://blog.worst.love/"	
},
```
### Icon

The icon for the website link can be added in src/components/Links/index.vue:

```js
// U can choose icon from https://www.xicons.org by urself
// // The type imported here is fa, but you can also import others like ionicons5
import {
  Link,
  Blog,
  CompactDisc,
  Cloud,
  Compass,
  Book,
  Fire,
  LaptopCode,
} from "@vicons/fa";

...


const siteIcon = {
  Blog,
  Cloud,
  CompactDisc,
  Compass,
  Book,
  Fire,
  LaptopCode,
};
```


### Weather

Weather and area access requires `高德开放平台` related API

- Go to [高德开放平台控制台](https://console.amap.com/dev/index) to create a `Key` of type `Web Service` and fill the `Key` into `VITE_WEATHER_KEY` in `.env` 
>*Not **Web（JS API）**
It can also be replaced by other methods

### Music

>This project uses the `Aplayer` music player based on `MetingJS` for quick song list customization  
>*Only supported in **Mainland China**

Please change the song related parameters in the `.env` file to customize the song list

```bash
# Songs API address
VITE_SONG_API = "https://api-meting.imsyy.top"
# Song server ( netease-netease, tencent-qq music )
VITE_SONG_SERVER = "netease"
# Playback type ( song-song, playlist-playlist, album-album, search-search, artist-artist )
VITE_SONG_TYPE = "playlist"
# Playback ID
VITE_SONG_ID = "7452421335"
```

### Fonts

Now using `HarmonyOS Sans` open source font, using font splitting to improve loading speed

>Because this site's `CDN` has opened anti-leech, **non-site domain name is not accessible**, please change the font import link to the following content, otherwise **custom fonts will be invalid**
>
>`https://cdn.jsdelivr.net/gh/imsyy/file/font/HarmonyOS_Sans/regular.min.css`

<details>
<summary>old way</summary>

>As Chinese fonts are introduced in this project, Chinese fonts need to be compressed to improve the loading speed of the page (you can also cancel the use of Chinese fonts)

#### Chinese font removal traditional

- Install `Python 3.7` and `pip`
- Run `pip install fonttools`
- Download [sc_unicode.txt](https://gist.githubusercontent.com/imaegoo/d64e5088b723c2e02c40985f55ff12db/raw/5ebd2ce49418c73459a9dfe050483409306a6c1d/sc_unicode.txt)
- Run `pyftsubset font-name.ttf --unicodes-file=sc_unicode.txt`

#### fonts further compressed

- Compile and install ``Google woff2``

```bash
sudo apt-get install -y git g++ make
git clone --recursive https://github.com/google/woff2.git
cd woff2
make clean all
```

- Compress the font again

```
. /woff2_compress . /font_name.ttf
```

- Eventually the original font can be slow loaded, **load the compressed font first**

>For more information, please go to [虹墨空间站](https://www.imaegoo.com/2020/chinese-font-compress/) to view the original article

</details>

### Technology Stack

* [Vue](https://cn.vuejs.org/)
* [Vite](https://vitejs.cn/vite3-cn/)
* [Pinia](https://pinia.vuejs.org/zh/)
* [IconPark](https://iconpark.oceanengine.com/official)
* [xicons](https://xicons.org/)
* [Aplayer](https://aplayer.js.org/)

### API

* [MetingAPI By 武恩赐](https://api.wuenci.com/meting/api/)
* [搏天 API](https://api.btstu.cn/doc/sjbz.php)
* [高德开放平台](https://lbs.amap.com/)
* [Hitokoto 一言](https://hitokoto.cn/)

### Acknowledgements
**Thanks to taidixiong for translating the project from Vue to TypeScript and providing technical support!**
