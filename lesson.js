//! Proje dersi linki : https://www.udemy.com/course/komple-sifirdan-web-gelistirme-kursu/learn/lecture/12244754#overview

/* Öncelikle terminalimizde projemizi initialize etmek için npm init yazıyoruz
ve sonrasında packagelerimizi yüklemek için:

--save-dev @babel/cli @babel/core @babel/preset-env komutunu terminale yazıyoruz.

Packagelerimiz indikten ve package.json sayfamız oluştuktan sonra babel.config.json
adında bir dosya oluşturuyor ve  içerisine 
{
    "presets": ["@babel/preset-env"]
  }
  
Yapıştırıyoruz. Sonrasında package.json sayfamızda yeni bir script
oluşturuyoruz. Build adında bir script oluşturuyoruz ve bu script 
sayesinde bizler ES6 ve sonrası standartlarda yazılmış kodlarımızı
ES5 ve öncesi standartlara çevirmek için npm run build yazıyoruz.

Bu script içerisine babel src -d lib yazıyoruz ve npm run build yazdığımızda
bu script çalıştırılmış oluyor. */