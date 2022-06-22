module.exports = function (eleventyConfig) {
  
    eleventyConfig.addWatchTarget("./src/sass/");

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

    // // Set directories to pass through to the dist folder
    // config.addPassthroughCopy('./src/images/');
    // config.addPassthroughCopy('./src/static/icons/');