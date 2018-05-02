import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

export default {
    input: 'src/global-sensors.js',
    output: {
        file: 'index.js',
        format: 'umd',
        name: 'allsensors',
        sourcemap: true
    },
    plugins: [
        resolve(),
        commonjs(),
        // babel(),
        // uglify()
    ]
};