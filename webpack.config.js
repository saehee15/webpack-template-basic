// parcel 번들러와 달리 구성요소 설정 해줘야함

// 절대경로로 설정해줘야함, 노드 js에서 기본적으로 제공하는 전역모듈인 'path'사용 
// import
const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

// export
module.exports = {
    // parcel main.js
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    
    // 결과물(번들)을 반환하는 설정,
    // reslove메소드는()안에 첫번쨰와 2번째 경로를 합쳐주는 역활, 밑에 _dirname(현재 실행중인 폴더경로)도 전역변수
    output: {
        // path: path.resolve(__dirname,'dist'),
        // filename:'main.js',
        clean: true
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use:[
                    'babel-loader'
                ]
            }
        ]
    },
    
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template:'./index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ],
    
    devServer: {
        host: 'localhost'
    }
}

