module.exports = function (eleventyConfig) {
  
    eleventyConfig.addWatchTarget("./src/sass/");

    // // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/static/icons/');

    return {
        // markdown files, data files, and HTML files should be processed by Nunjucks
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public" 
        },
    };
};

