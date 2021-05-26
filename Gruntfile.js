module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ["*.js"]
        },
        qunit: {
            options: {
                timeout: 10000,
            },
            all: {
                options: {
                    urls: ['http://localhost:8000/tests.html']
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    base: '.'
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'resume.css': 'resume.scss'
                }
            }
        },
        copy: {
            main: {
                files: [
                    { src: ["*.html"], dest: "public/" },
                    { src: ["*.css"], dest: "public/" },
                    { src: ["*.map"], dest: "public/" },
                    { src: ["functions.js", "listeners.js"], dest: "public/" },
                    { src: ["*.jpg"], dest: "public/" },
                    { src: ["favicon/**"], dest: "public/" },
                    { src: ["*.doc", "*.pdf"], dest: "public/" },
                    { src: ["sitemap.xml", "robots.txt"], dest: "public/" }
                ]
            }
        },
        replace: {
            analytics: {
                src: ["public/*.html", "public/*.js"],
                overwrite: true,
                replacements: [{ from: "UA-107692434-2", to: "UA-107692434-1" }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint', 'sass', 'connect', 'qunit', 'copy', 'replace']);
    grunt.registerTask('build', ['jshint', 'sass']);
    grunt.registerTask('test', ['connect', 'qunit']);
    grunt.registerTask('package', ['copy', 'replace']);
};
