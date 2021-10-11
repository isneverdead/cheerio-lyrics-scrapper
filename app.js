const cheerio = require('cheerio')
const request = require('request')

const gettingLyrics = async (url) => {
  const result = await request(url, (error, response, html) => {
    if (error) {
      console.log(error)
    }
    const $ = cheerio.load(html)
    const lyrics = $('#view_lyrics').text()
    console.log(lyrics)
  })

  return result
}

// gettingLyrics(
//   'http://www.absolutelyrics.com/lyrics/view/olivia_rodrigo/good_4_u'
// )

const gettingAllAlbums = async (url) => {
  const result = await request(url, (error, response, html) => {
    if (error) {
      console.log(error)
    }
    const $ = cheerio.load(html)
    const allAlbums = $('.artist_albumlistitem')
    let allAlbumsArray = []
    const albumsArrays = $(allAlbums).each((index, value) => {
      const albumJudul = $(value).find('h3').text().replace(/\s+/g, '')

      let listSong = []
      const listSongData = $(value).find('li')
      listSongData.each((i, el) => {
        // console.log($(el).find('a').text() + '\n')
        // console.log($(el).find('a').attr('href'))
        listSong.push({
          title: $(el).find('a').text().replace(/\s+/g, ''),
          url: $(el).find('a').attr('href'),
        })
      })
      allAlbumsArray.push({
        albumTitle: albumJudul,
        listSong,
      })
    })
    console.log(allAlbumsArray)
    return allAlbumsArray
  })

  return result
}

gettingAllAlbums('http://www.absolutelyrics.com/lyrics/artist/justin_bieber')
// gettingAllAlbums('http://www.absolutelyrics.com/lyrics/artist/lil_nas_x')
