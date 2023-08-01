git clone https://github.com/element-plus/element-plus-vite-starter element-plus --depth 1
rm -rf element-plus/.git
cd element-plus
npm config set registry https://registry.npm.taobao.org
npm i
npm run dev
code .

