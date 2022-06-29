const Image = require('@11ty/eleventy-img');
const path = require("path");
// Responsive images
async function imageShortcode(src, alt, sizes = '(min-width: 1024px) 100vw, 50vw') {
    let metadata = await Image(src, {
        widths: [600, 900, 1500],
        formats: [null],
        urlPath: '/images/optimized',
        outputDir: './public/images/optimized',
        filenameFormat: function (id, src, width, format, options) {
            const extension = path.extname(src)
            const basename = path.basename(src, extension)
            let dir = path.dirname(src);
            dir = dir.replace('.\/src\/images\/', '');
            dir = dir.replace('.\/src\/images', '');
            dir = dir.replace(/\//g, '_');
            const name = `${dir}_${basename}`
            return `${name}-${width}w.${format}`
        }
    });

    let imageAttributes = {
        alt,
        sizes,
        loading: 'lazy',
        decoding: 'async',
    };


    // You bet we throw an error on missing alt in `imageAttributes` (alt='' works okay)
    return Image.generateHTML(metadata, imageAttributes);
}


module.exports = function (eleventyConfig) {

    eleventyConfig.addWatchTarget('./src/sass/');

    // // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/social/');
    eleventyConfig.addPassthroughCopy('./src/images/work/tools');
    eleventyConfig.addPassthroughCopy('./src/static/icons/');
    eleventyConfig.addPassthroughCopy('./src/manifest.json');




    //image shortcode
    eleventyConfig.addNunjucksAsyncShortcode('image', imageShortcode);


    // Universal filters (Adds to Liquid, Nunjucks, and Handlebars)
    eleventyConfig.addFilter('formatDate', function (date) {
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        date = new Date(date)
        let monthNumber = date.getMonth();
        let month = months[monthNumber];
        let day = date.getDate();
        let year = date.getFullYear();
        let formatedDate = `${month} ${day}, ${year}`

        return formatedDate
    });



    //collections
    eleventyConfig.addCollection('work', collection => {
        return collection
            .getFilteredByGlob('./src/work/*.md')
            .sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
    });

    // Returns a collection of blog posts in reverse date order
    eleventyConfig.addCollection('blog', collection => {
        return [...collection.getFilteredByGlob('./src/blog/*.md')].reverse();
    });


    return {
        // markdown files, data files, and HTML files should be processed by Nunjucks
        // set output and input folders
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'public'
        },
    };
};


