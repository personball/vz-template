git clone https://github.com/element-plus/element-plus-vite-starter vue --depth 1
rm -rf vue/.git
cd vue
npm config set registry https://registry.npm.taobao.org
npm i
npm run dev
code .

