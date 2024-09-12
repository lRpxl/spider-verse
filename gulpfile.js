const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require ("gulp-sass")(require('sass'));

// tarefa para minificar o js
function scripts(){
    return gulp.src('./src/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}


// Tarefa para minificar o Sass
function styles() {
    return gulp.src('./src/styles/*.scss')
    .pipe(sass({outputStyles: 'compressed'}))
    .pipe(gulp.dest('./dist/css'));
}

// Tarefa para otimizar imagens
function images (){
    return gulp.src('./src/images/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
}

// Tarefa para monitoramento de alterações
function watch(){
    gulp.watch('./src/styles/*.scss', styles)
    gulp.watch('./src/scripts/*.js', scripts)
}


// Tarefa padrão para rodar sripts, styles e imagem em paralelo
exports.default = gulp.parallel(styles, images, scripts);

// Tarefa para assistir mudança no arquivos
exports.watch = watch;