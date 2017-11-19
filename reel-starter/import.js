const mongoose = require('mongoose');
const Movie = require('./movieModel.js');

mongoose.connect('mongodb://localhost/reel');

const movies = [
    {
        title: 'The Shawshank Redemption',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg',
        director: 'Frank Darabont',
        year: 1994,
        plot: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.'
    },
    {
        title: 'The Godfather',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg',
        year: 1972,
        director: 'Francis Ford Coppola',
        plot: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.'
    },
    {
        title: 'Black Mirror',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/he609rnU3tiwBjRklKNa4n2jQSd.jpg',
        director: 'Carl Tibbetts',
        year: 2016,
        plot: 'This feature-length special consists of three interwoven stories. In a mysterious and remote snowy outpost, Matt and Potter share a Christmas meal, swapping creepy tales of their earlier lives in the outside world. Matt is a charismatic American trying to bring the reserved, secretive Potter out of his shell. But are both men who they appear to be? A woman gets thrust into a nightmarish world of smart gadgetry. Plus a look at what would happen if you could block people in real life.'
    },
    {
        title: 'Schindlers List',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/yPisjyLweCl1tbgwgtzBCNCBle.jpg',
        year: 1993,
        director: 'Steven Spielberg',
        plot: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.'
    },
    {
        title: 'Whiplash',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
        year: 2014,
        director: 'Damien Chazelle',
        plot: 'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.'
    },
    {
        title: 'Spirited Away',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/dL11DBPcRhWWnJcFXl9A07MrqTI.jpg',
        year: 2001,
        director: 'Hayao Miyazaki',
        plot: 'A ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?'
    },
    {
        title: 'Life is Beautiful',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/f7DImXDebOs148U4uPjI61iDvaK.jpg',
        year: 1997,
        director: 'Roberto Benigni',
        plot: 'A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.'
    },
    {
        title: 'Fight Club',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg',
        year: 1999,
        director: 'David Fincher',
        plot: 'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.'
    },
    {
        title: 'Sherlock: The Final Problem',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/ySiqbi1sW7imVYbtECZS0xQ3Hmj.jpg',
        year: 2017,
        director: 'Benjamin Caron',
        plot: 'Long buried secrets finally come to light as someone has been playing a very long game indeed. Sherlock and John face their greatest ever challenge. Is the game finally over?'
    },
    {
        title: 'Pulp Fiction',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/dM2w364MScsjFf8pfMbaWUcWrR.jpg',
        year: 1994,
        director: 'Quentin Tarantino',
        plot: 'A burger-loving hit man, his philosophical partner, a drug-addled gangsters moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.'
    },
    {
        title: 'The Dark Knight',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg',
        year: 2008,
        director: 'Christopher Nolan',
        plot: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.'
    },
    {
        title: 'Doctor Who: The Day of the Doctor',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/lQy2QVcacuH55k37K9Ox0gw3YpZ.jpg',
        year: 2013,
        director: 'Nick Hurran',
        plot: 'In 2013, something terrible is awakening in Londons National Gallery; in 1562, a murderous plot is afoot in Elizabethan England; and somewhere in space an ancient battle reaches its devastating conclusion. All of reality is at stake as the Doctors own dangerous past comes back to haunt him.'
    },
    {
        title: 'One Flew Over the Cuckoos Nest',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/2Sns5oMb356JNdBHgBETjIpRYy9.jpg',
        year: 1975,
        director: 'Miloš Forman',
        plot: 'While serving time for insanity at a state mental hospital, implacable rabble-rouser, Randle Patrick McMurphy inspires his fellow patients to rebel against the authoritarian rule of head nurse, Mildred Ratched.'
    },
    {
        title: 'Forrest Gump',
        posterUrl: 'https://image.tmdb.org/t/p/w1280/yE5d3BUhE8hCnkMUJOo1QDoOGNz.jpg',
        year: 1994,
        director: 'Robert Zemeckis',
        plot: 'A man with a low IQ has accomplished great things in his life and been present during significant historic events - in each case, far exceeding what anyone imagined he could do. Yet, despite all the things he has attained, his one true love eludes him. Forrest Gump is the story of a man who rose above his challenges, and who proved that determination, courage, and love are more important than ability.'
    }
]

// Drop any existing data inside of the movies table
Movie.remove({}, () => {
    console.log('All movies removed');
});

movies.forEach((movie) => {
    const model = new Movie();
    Object.assign(model, movie);
    model.save((err, doc) => {
        if (err) {
            console.log(err);
        }
        console.log(doc);
    });
    return;
});
