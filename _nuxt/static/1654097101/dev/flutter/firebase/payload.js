__NUXT_JSONP__("/dev/flutter/firebase", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M){return {data:[{page:{slug:"firebase",description:"Как подключить Firebase-сервисы во Flutter, экономя на разработке сервера",title:"Flutter \u002F Firebase",toc:[{id:D,depth:z,text:E},{id:F,depth:z,text:G},{id:H,depth:z,text:I}],body:{type:"root",children:[{type:b,tag:l,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.google.com\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"Firebase"}]},{type:a,value:" - baas решение от гугл. BAAS - backend as a service - то есть есть все\nнеобходимое, что нужно фронту\u002Fмобилке от сервера: цдн, бд, аутентификация, бизнес логика и тд."}]},{type:a,value:c},{type:b,tag:C,props:{id:D},children:[{type:b,tag:f,props:{href:"#%D1%83%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B0",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Сначала создаем проект в "},{type:b,tag:f,props:{href:J,rel:[h,i,j],target:k},children:[{type:a,value:"Firebase Console"}]},{type:a,value:" + создаем Android приложение в\nпроекте"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:"Register app:"}]},{type:a,value:" "},{type:b,tag:e,props:{},children:[{type:a,value:"Android package name"}]},{type:a,value:", "},{type:b,tag:e,props:{},children:[{type:a,value:"App nickname"}]},{type:a,value:" - тут понятно, а с "},{type:b,tag:e,props:{},children:[{type:a,value:"Debug signing certificate SHA-1"}]},{type:a,value:",\nкоторый нужен для аутентификации, надо чуток попотеть."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Вот "},{type:b,tag:f,props:{href:"https:\u002F\u002Fdevelopers.google.com\u002Fandroid\u002Fguides\u002Fclient-auth",rel:[h,i,j],target:k},children:[{type:a,value:"подробная инструкция по генерации SHA-1"}]},{type:a,value:", а если попроще,\nто вот:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Если "},{type:b,tag:e,props:{},children:[{type:a,value:"java"}]},{type:a,value:" нет в "},{type:b,tag:e,props:{},children:[{type:a,value:"PATH"}]},{type:a,value:", то переходим в директорию с ней:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"cd C:\\Program Files\\Java\\jre1.8.0_271\\bin\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{start:B},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Генерим хеш"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"keytool -list -v -alias androiddebugkey -keystore %USERPROFILE%\\.android\\debug.keystore\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{start:z},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Enter keystore password"}]},{type:a,value:" оставляем пустым, затем копируем "},{type:b,tag:e,props:{},children:[{type:a,value:"SHA1"}]},{type:a,value:" из "},{type:b,tag:e,props:{},children:[{type:a,value:"Certificate fingerprints"}]},{type:a,value:" и вставляем в\nFirebase-консоль в "},{type:b,tag:e,props:{},children:[{type:a,value:"SDK setup and configuration"}]},{type:a,value:" в настройках Android-приложения"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:"ВАЖНО:"}]},{type:a,value:" Если работа с проектом осуществляется на нескольких машинах, то для каждой машины нужно генерить свой хеш"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:"Download config file:"}]},{type:a,value:" Качаем "},{type:b,tag:e,props:{},children:[{type:a,value:"google-services.json"}]},{type:a,value:" и закидываем в проект: "},{type:b,tag:e,props:{},children:[{type:a,value:"android\u002Fapp\u002Fgoogle-services.json"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:"Add Firebase SDK:"}]},{type:a,value:" Добавляем SDK в "},{type:b,tag:e,props:{},children:[{type:a,value:"android\u002Fbuild.gradle"}]},{type:a,value:" и в "},{type:b,tag:e,props:{},children:[{type:a,value:"android\u002Fapp\u002Fbuild.gradle"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ставим необходимые "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.flutter.dev\u002F",rel:[h,i,j],target:k},children:[{type:a,value:"либы для флаттера"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:"dopolnitelnye-telodvizheniya-dlya-autentifikacii"},children:[{type:b,tag:f,props:{href:"#%D0%B4%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%82%D0%B5%D0%BB%D0%BE%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B0%D1%83%D1%82%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Дополнительные телодвижения для аутентификации"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Для начала аутентификацию надо включить: Authentication \u003E Sign-in method"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Затем нужно задать настройки доступпа к Firestore: Firestore \u003E Rules:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"rules_version = '2';\nservice cloud.firestore {\n  match \u002Fdatabases\u002F{database}\u002Fdocuments {\n    match \u002F{document=**} {\n      allow read, write: if request.auth != null;\n    }\n  }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:"a-eshche"},children:[{type:b,tag:f,props:{href:"#%D0%B0-%D0%B5%D1%89%D0%B5",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"А еще"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Может такое вылезать:"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"W\u002FFirestore( 8432): (22.1.2) [WriteStream]: (86b47da) Stream closed with status: Status{code=NOT_FOUND, description=The project dnew-b9468 does not exist or it does not contain an active Cloud Datastore or Cloud Firestore database. Please visit http:\u002F\u002Fconsole.cloud.google.com to create a project or https:\u002F\u002Fconsole.cloud.google.com\u002Fdatastore\u002Fsetup?project=dnew-b9468 to add a Cloud Datastore or Cloud Firestore database. Note that Cloud Datastore or Cloud Firestore always have an associated App Engine app and this app must not be disabled., cause=null}.\nW\u002FFirestore( 8432): (22.1.2) [WriteStream]: (86b47da) Stream closed with status: Status{code=PERMISSION_DENIED, description=Cloud Firestore API has not been used in project 147399885899 before or it is disabled. Enable it by visiting https:\u002F\u002Fconsole.developers.google.com\u002Fapis\u002Fapi\u002Ffirestore.googleapis.com\u002Foverview?project=147399885899 then retry. If you enabled this API recently, wait a few minutes for the action to propagate to our systems and retry., cause=null}.\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Тут надо по ссылке перейти и все ок будет."}]},{type:a,value:c},{type:b,tag:w,props:{id:"eshche-heshi"},children:[{type:b,tag:f,props:{href:"#%D0%B5%D1%89%D0%B5-%D1%85%D0%B5%D1%88%D0%B8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Еще хеши"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Помимо добавления debug-sha1-фингерпринта в шаге 3 раздела Установка, нужно добавить еще пару хешей"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"При "},{type:b,tag:"nuxt-link",props:{to:"\u002Fdev\u002Fflutter\u002Fapk"},children:[{type:a,value:"релизе приложухи в гугл-плее"}]},{type:a,value:" нужно также сгенерить фингерпринт и прописать его в\nFirebase-консоли"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Если забыл это сделать, то вот такой командой можно вытянуть:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"keytool -list -v -keystore .\u002Fupload-keystore.jks -alias upload\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{start:B},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Когда апп залит в гугл-плей, необходимо скопировать фингерпринт и оттуда:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:"img-swiper",props:{},children:[{type:a,value:"\n  "},{type:b,tag:"img-block",props:{src:"\u002Fimages\u002Fdev\u002Fflutter\u002Ffirebase\u002Fgplay-fingerprint.png",alt:"Fingerprint в Google Play Console"},children:[]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:C,props:{id:F},children:[{type:b,tag:f,props:{href:"#%D0%B2%D0%B5%D0%B1%D1%87%D0%B8%D0%BA",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Здесь распишу что нужно сделать, чтобы firebase заробил в вебе, а именно cloud_firestore, firebase_auth"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Вроде бы все просто - "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.flutter.dev\u002Fdocs\u002Ffirestore\u002Foverview\u002F#3-web-only-add-the-sdk",rel:[h,i,j],target:k},children:[{type:a,value:"добавляем пару либ"}]},{type:a,value:"\n, но на самом деле надо больше телодвижений сделать:"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Создаем web-app в "},{type:b,tag:f,props:{href:J,rel:[h,i,j],target:k},children:[{type:a,value:"консоли"}]},{type:a,value:" + будет предложено скопировать Firebase SDK snippet"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"его вставляем в "},{type:b,tag:e,props:{},children:[{type:a,value:K}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{start:B},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"На момент написания статьи, последняя версия (8.4.1) не робит, и\nстоит "},{type:b,tag:f,props:{href:"https:\u002F\u002Fgithub.com\u002FFirebaseExtended\u002Fflutterfire\u002Fissues\u002F4127#issuecomment-728262667",rel:[h,i,j],target:k},children:[{type:a,value:"прописать версию 7.20.0"}]},{type:a,value:y}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u003Cscript src=\"https:\u002F\u002Fwww.gstatic.com\u002Ffirebasejs\u002F8.4.1\u002Ffirebase-app.js\"\u003E\u003C\u002Fscript\u003E\n\u003Cscript src=\"https:\u002F\u002Fwww.gstatic.com\u002Ffirebasejs\u002F8.4.1\u002Ffirebase-auth.js\"\u003E\u003C\u002Fscript\u003E\n\u003Cscript src=\"https:\u002F\u002Fwww.gstatic.com\u002Ffirebasejs\u002F7.20.0\u002Ffirebase-firestore.js\"\u003E\u003C\u002Fscript\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:"kak-obychno-dopolnitelnye-telodvizheniya-dlya-autentifikacii"},children:[{type:b,tag:f,props:{href:"#%D0%BA%D0%B0%D0%BA-%D0%BE%D0%B1%D1%8B%D1%87%D0%BD%D0%BE-%D0%B4%D0%BE%D0%BF%D0%BE%D0%BB%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B5-%D1%82%D0%B5%D0%BB%D0%BE%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B0%D1%83%D1%82%D0%B5%D0%BD%D1%82%D0%B8%D1%84%D0%B8%D0%BA%D0%B0%D1%86%D0%B8%D0%B8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Как обычно дополнительные телодвижения для аутентификации"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Основа "},{type:b,tag:f,props:{href:"https:\u002F\u002Fpub.dev\u002Fpackages\u002Fgoogle_sign_in_web#usage",rel:[h,i,j],target:k},children:[{type:a,value:"здесь"}]},{type:a,value:": надо создать\nOAuth-идентетификатор "},{type:b,tag:f,props:{href:"https:\u002F\u002Fconsole.cloud.google.com\u002Fapis\u002Fcredentials",rel:[h,i,j],target:k},children:[{type:a,value:"тут"}]},{type:a,value:" + прописать meta-тег\nв "},{type:b,tag:e,props:{},children:[{type:a,value:K}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Затем открываем редактирование OAuth-идентетификатора и прописываем в Authorized JavaScript origins локалхост с любым\nпортом, напр. "},{type:b,tag:e,props:{},children:[{type:a,value:"http:\u002F\u002Flocalhost:53523"}]},{type:a,value:" + домен, где будет крутиться приложуха"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Запускать флаттер апп, соответственно, нужно с этим портом, передавая "},{type:b,tag:e,props:{},children:[{type:a,value:"--web-port 53523"}]},{type:a,value:" при вызове "},{type:b,tag:e,props:{},children:[{type:a,value:"flutter run"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:"dop-telodvizheniya-dlya-cloud-storage"},children:[{type:b,tag:f,props:{href:"#%D0%B4%D0%BE%D0%BF-%D1%82%D0%B5%D0%BB%D0%BE%D0%B4%D0%B2%D0%B8%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B4%D0%BB%D1%8F-cloud-storage",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Доп телодвижения для Cloud Storage"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Для того, чтобы контент из Cloud Storage отображался в вебе,\nнужно "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Fstorage\u002Fweb\u002Fdownload-files#cors_configuration",rel:[h,i,j],target:k},children:[{type:a,value:"настроить CORS"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Ставим gsutil"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Заходим в Firebase Console \u002F Cloud Storage, копируем путь к бакету (напр. "},{type:b,tag:e,props:{},children:[{type:a,value:"gs:\u002F\u002Fdnew-b9468.appspot.com"}]},{type:a,value:")"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Создаем cors-конфиг - файл "},{type:b,tag:e,props:{},children:[{type:a,value:"cors.json"}]},{type:a,value:y}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"[\n  {\n    \"origin\": [\"*\"],\n    \"method\": [\"GET\"],\n    \"maxAgeSeconds\": 3600\n  }\n]\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{start:L},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Загружаем конфиг:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"gsutil cors set cors.json gs:\u002F\u002Fdnew-b9468.appspot.com\n"}]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:"deploy-na-firebase-hosting"},children:[{type:b,tag:f,props:{href:"#%D0%B4%D0%B5%D0%BF%D0%BB%D0%BE%D0%B9-%D0%BD%D0%B0-firebase-hosting",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Деплой на Firebase Hosting"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Деплой, на удивление, прост - достаточно посмотреть "},{type:b,tag:f,props:{href:"https:\u002F\u002Fwww.youtube.com\u002Fwatch?v=CAYa9AQGtdU",rel:[h,i,j],target:k},children:[{type:a,value:"3-минутный видос"}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"firebase init\n# На все отвечаем по умолчанию кроме пары пунктов:\n# ? What do you want to use as your public directory? build\u002Fweb\n# ? Configure as a single-page app (rewrite all urls to \u002Findex.html)? Yes\nflutter build web\nfirebase deploy --only hosting\n"}]}]}]},{type:a,value:c},{type:b,tag:C,props:{id:H},children:[{type:b,tag:f,props:{href:"#%D1%8D%D0%BC%D1%83%D0%BB%D0%B8%D0%BA",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"При запуске на эмулике девайса удобно запускать эмулик фаербейза. Ниже описано как запустить эмулик\nдля "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Ffirestore",rel:[h,i,j],target:k},children:[{type:a,value:"FireStore"}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Поставить "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Fcli#install-cli-windows",rel:[h,i,j],target:k},children:[{type:a,value:"firebase-cli"}]},{type:a,value:y}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"npm install -g firebase-tools"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"firebase login"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{start:B},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Перейти в папку с проектом"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.google.com\u002Fdocs\u002Femulator-suite\u002Finstall_and_configure",rel:[h,i,j],target:k},children:[{type:a,value:"поставить эмулики"}]},{type:a,value:y}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"firebase init"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Выбрать Yes, когда будет \"Would you like to download the emulators now?\""}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{start:z},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Запустить эмулик:"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"firebase emulators:start"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{start:L},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Подключиться к эмулику из "},{type:b,tag:f,props:{href:"https:\u002F\u002Ffirebase.flutter.dev\u002Fdocs\u002Ffirestore\u002Fusage\u002Findex.vue#emulator-usage",rel:[h,i,j],target:k},children:[{type:a,value:"аппа"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:w,props:{id:"vyklyuchenie-emulika"},children:[{type:b,tag:f,props:{href:"#%D0%B2%D1%8B%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D0%B5-%D1%8D%D0%BC%D1%83%D0%BB%D0%B8%D0%BA%D0%B0",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"Выключение эмулика"}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Отключение эмулика через ctrl+c не отключает эмулик на самом деле: порт остается занятым."}]},{type:a,value:c},{type:b,tag:l,props:{},children:[{type:a,value:"Для освобождения порта необходимо отключить процесс, занимающий его:"}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"powershell"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"taskkill \u002FPID {PID} \u002FF"}]}]},{type:a,value:c}]}]},dir:"\u002Fdev\u002Fflutter",path:"\u002Fdev\u002Fflutter\u002Ffirebase",extension:".md",createdAt:M,updatedAt:M}}],fetch:{},mutations:[]}}("text","element","\n","li","code","a","ol","nofollow","noopener","noreferrer","_blank","p","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","h4","ul",":",3,"strong",2,"h3","ustanovka","Установка","vebchik","Вебчик","emulik","Эмулик","https:\u002F\u002Fconsole.firebase.google.com\u002F","web\u002Findex.html",4,"2022-06-01T15:22:47.342Z")));