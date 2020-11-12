### master

###### git子模块操作
* 当前项目添加一个git子模块
```
    git submodule add  https://xxxxxx
```
* clone 一个含有子模块的项目,子模块将不会直接被clone
```
    根目录执行命令：注意git版本不要过低 建议使用最新版git
    git submodule init  （初始化子模块）
    git submodule update（更新最新子模块）
```


###  react 项目部署到GitHub上预览运行

   * package.json 根结构配置加上：

     ``` "homepage":"https://bengdong.github.io/ReactDemo",``` 

   * scripts 中加入

     ```
     "deploy": "gh-pages -d build",
     "predeploy": "npm run build
     ```

   * 安装一个依赖

     ``` 
     npm install gh-pages --save-dev
     ```

   * ##### 部署项目到github page上

     ``` 
     npm run deploy
     ```

   * 注意：要可以访问项目，需要设置存储仓库的可见性为公开的

   * 修改项目的时候需要重新运行而部署到GitHub.io上

     ​	``` npm run deploy ```
     
   ### 配置GitHub/ gitee多ip登陆
