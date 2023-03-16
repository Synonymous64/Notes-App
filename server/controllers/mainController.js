// GET HOMEPAGE

exports.homepage = async (req, res) => {
    const locals = {
        title: 'Notes App',
        description: 'Free NodeJs Notes app'
    };
    res.render('index', { locals, layout: '../views/layouts/Front-Page' });
}

// GET ABOUT
exports.about = async (req, res) => {
    const locals = {
        title: 'This is an About Page',
        description: 'Free NodeJs Notes app'
    };
    res.render('about', locals);
}