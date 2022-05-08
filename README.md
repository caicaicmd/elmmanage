# elm-manage

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 一、初始化

- 删除无关组件

  `components views`下的

- 引入相关库

  ```vue
  1. yarn add axios -S -- axios请求
  2. vue add element -- elementui(按需导入) 组件库
  	 ① 在plugns下先暂时导入完整组件，后头再删没有用到的
  	 ② 找一个组件 测试
  ```

- 引入阿里图标库

  ```css
  @import url('https://at.alicdn.com/t/font_3383924_55j4q192rgw.css?spm=a313x.7781069.1998910419.57&file=font_3383924_55j4q192rgw.css');
  
  进行测试：
      <i class="iconfont icon-shangpu"></i>
      <span>哈哈哈</span>
  ```

- 引入reset.css

  ```css
  @import url('https://at.alicdn.com/t/font_3383924_55j4q192rgw.css?spm=a313x.7781069.1998910419.57&file=font_3383924_55j4q192rgw.css');  // 引入阿里图标库
  /* @charset 'utf-8'; */
  /*这些元素都建议重新初始化*/
  body,div,dl,dt,dd,ul,ol,li,tr,td,th,
  h1,h2,h3,h4,h5,h6,hr,br,img,table,
  input,form,a,p,textarea{
      padding:0;
      margin:0;
      font-family:Arial,'Microsoft YaHei','宋体';
      font-size: 14px;
  }
  /*去掉列表默认排列*/
  ul,ol,li{
      list-style:none;
  }
  /*去掉底部横线*/
  /*把a元素更改设置成块级元素，这个根据实际情况决定要不要*/
  a{
      text-decoration:none;
  }
  /*img标签要清除border。*/
  /*display设为block设置为块级元素，默认为display:inline;
  存在下边线多出4px状况,所以一般设为block*/
  img{
      border: 0;
      vertical-align: middle;
  }
  /*清除浮动破坏带来的塌陷问题*/
  /*清除浮动的兼容IE*/
  .clearfloat {
  	zoom: 1;
  }
  .clearfloat:after {
  	display:block;
  	clear:both;
  	content:"";
  	visibility:hidden;
  	height:0;
  }
  ```

- `main.js` 引入重置reset.css

  ```js
  // 导入css重置样式表
  import './assets/css/reset.css'
  ```



# 二、路由配置

1. 先作为测试，后续会做登录权限

   `router.vue`

   ```vue
   const routes = [
     {
       path: '/',
       name: 'Layout',
       component: Layout
     },
     {
       path: '/login',
       name: 'Login',
       component: Login
     },
   ]
   ```

   `App.vue`添加出口

   ```vue
   <router-view />
   ```

2. 配置三级路由

   - 新建index.vue里面添加标签<router-view/>

   - 完整路由配置

     ```vue
     const routes = [
       {
         path: '',
         name: 'Layout',
         component: Layout,
         children: [
           {
             path: '/',
             name: 'Home',
             component: Home
           },
           {
             path: '/datamanage',
             name: 'DataManage',
             component: DataManage,
             redirect: '/datamanage/userlist',
             children: [
               {
                 path: 'userlist',
                 name: 'UserList',
                 component: UserList
               },
               {
                 path: 'merchantlist',
                 name: 'MerChantList',
                 component: MerChantList
               },
               {
                 path: 'foodlist',
                 name: 'FoodList',
                 component: FoodList
               },
               {
                 path: 'orderlist',
                 name: 'OrderList',
                 component: OrderList
               },
               {
                 path: 'adminlist',
                 name: 'AdminList',
                 component: AdminList
               }
             ]
     
           },
           {
             path: '/dataadd',
             name: 'DataAdd',
             component: DataAdd,
             redirect: '/dataadd/addmerchant',
             children: [
               {
                 path: 'addmerchant',
                 name: 'AddMerChant',
                 component: AddMerChant
               },
               {
                 path: 'addfood',
                 name: 'AddFood',
                 component: AddFood
               }
             ]
           },
           {
             path: '/adminsetting',
             name: 'AdminSetting',
             component: AdminSetting
           },
           {
             path: '/userfenbu',
             name: 'UserFenbu',
             component: UserFenbu
           },
           {
             path: '/adout',
             name: 'About',
             component: About
           }
         ]
       },
       {
         path: '/login',
         name: 'Login',
         component: Login
       },
     ```

     