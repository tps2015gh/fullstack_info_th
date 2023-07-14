![](./_images/circle_red_16.png)[readme](/readme.md)
###![](./_images/circle_red_16.png) [Bower To YARN!!](./bower_to_yarn.md)

### Bower To YARN !!! 

- Bower - https://bower.io/
  - > ...psst! While Bower is maintained, we recommend using Yarn and Vite for front-end projects. Read how to migrate!
- https://bower.io/blog/2017/how-to-migrate-away-from-bower/

- (from page) psst! While Bower is maintained, we recommend using Yarn and Vite for front-end projects. Read how to migrate!
- (from page) I focused on this for a while and the result is pleasing: Yarn 1.x is able to install most of Bower packages. But there’s a catch: it cannot resolve Bower dependencies.
- (from page) หลังจากติดั้ง yarn 1.x แล้ว ให้ติดตั้ ว bower-away  
- after install Yarn 1.x , install bower-away  https://github.com/sheerun/bower-away
  - yarn global add bower-away # or "npm install -g bower-away"
bower-away # listen and repeat!
##### Migrate to yarn (under developement)
 1. npm i -g corepack
 2. corepack enable
 3. corepack prepare yarn@stable --activate
 4. yarn set version stable

##### Install Yarn for Migrate bower (success)
```text
 nvm list
 nvm install 18.16.0
 nvm use 18.16.0
 npm install -g yarn
 npm update
 yarn -v

```

#####change yarn to version 1.x

```text
>1.22.19
> #ต้องเปลี่ยน yarn เป็น version 1.x ก่อนด้วย 
>ตั้งค่า version เก่า 1.x
yarn set version stable
yarn -v 
> 3.6.0
yarn set version 1.22.19
yarn -v
```