__NUXT_JSONP__("/dev/flutter/apk", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{page:{slug:"apk",description:"Нужно сгенерить файлик, добавить пару строк в пару файликов, и можно собирать apk",title:"Flutter \u002F Как собирать apk для Google Play",toc:[{id:H,depth:3,text:I}],body:{type:"root",children:[{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Генерим "},{type:b,tag:g,props:{},children:[{type:a,value:J}]},{type:a,value:B}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,C]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"keytool -genkey -v -keystore "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,"environment","constant"]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:O}]},{type:a,value:P}]}]}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"keytool"}]},{type:a,value:" - утилита для генерации подписи, идет в коробке вместе с "},{type:b,tag:g,props:{},children:[{type:a,value:"java"}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:K}]},{type:a,value:" - путь к проекту или директория, куда генерим "},{type:b,tag:g,props:{},children:[{type:a,value:J}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Пример команды с путями:\n"},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,C]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"C:\\Program Files (x86)\\Java\\jre1.8.0_251"},{type:b,tag:c,props:{className:[d,"entity"],title:R},children:[{type:a,value:R}]},{type:a,value:"in\\keytool\""}]},{type:a,value:" -genkey -v -keystore C:"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"Users"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"potyk"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"IdeaProjects"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"dnew"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:O}]},{type:a,value:P}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Создаем "},{type:b,tag:g,props:{},children:[{type:a,value:"android\u002Fkey.properties"}]},{type:a,value:" с пароликами, введенными выше:"}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,"language-text"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"storePassword={PASSWORD_2}\nkeyPassword={PASSWORD_1}\nkeyAlias=upload\nstoreFile={PATH}\u002Fupload-keystore.jks\n"}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Прописываем пару вещей в "},{type:b,tag:g,props:{},children:[{type:a,value:"android\u002Fapp\u002Fbuild.gradle"}]},{type:a,value:B}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,"language-groovy"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F\u002F Этот код до директивы android"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:S}]},{type:a,value:" keystoreProperties "},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"Properties"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:S}]},{type:a,value:" keystorePropertiesFile "},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:E}]},{type:a,value:" rootProject"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'key.properties'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"if"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"exists"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n    keystoreProperties"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"load"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:T}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,U]},children:[{type:a,value:"FileInputStream"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F\u002F Этот код в директиве android"}]},{type:a,value:"\nsigningConfigs "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n        keyAlias keystoreProperties"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'keyAlias'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n        keyPassword keystoreProperties"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'keyPassword'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n        storeFile keystoreProperties"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"?"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"keystoreProperties"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:Y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:" null\n        storePassword keystoreProperties"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"'storePassword'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F\u002F Тут обычно тудушка TODO: Add your own signing config for the release build"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,y]},children:[{type:a,value:"\u002F\u002F Ее заменяем на этот код"}]},{type:a,value:"\nbuildTypes "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n        signingConfig signingConfigs"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:z}]},{type:a,value:"release\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:F}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Добавляем пермишн в "},{type:b,tag:g,props:{},children:[{type:a,value:"AndroidManifest.xml"}]},{type:a,value:" в тег "},{type:b,tag:g,props:{},children:[{type:a,value:"manifest"}]}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,"language-xml"]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:c,props:{className:[d,Z]},children:[{type:b,tag:c,props:{className:[d,Z]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u003C"}]},{type:a,value:"uses-permission"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,"attr-name"]},children:[{type:b,tag:c,props:{className:[d,"namespace"]},children:[{type:a,value:"android:"}]},{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,"attr-value"]},children:[{type:b,tag:c,props:{className:[d,e,"attr-equals"]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]},{type:a,value:"com.android.vending.INTERNET"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:_}]}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:f}]}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Собираем апкашку:"}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,C]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"flutter build apk\n"}]}]}]},{type:a,value:f}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:"h3",props:{id:H},children:[{type:b,tag:G,props:{href:"#%D1%81%D1%81%D1%8B%D0%BB%D0%BE%D1%87%D0%BA%D0%B8",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:Q,props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:G,props:{href:"https:\u002F\u002Fflutter.dev\u002Fdocs\u002Fdeployment\u002Fandroid",rel:[$,aa,ab],target:ac},children:[{type:a,value:"Официальный гайд от гугла"}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:G,props:{href:"https:\u002F\u002Fcodelabs.developers.google.com\u002Fcodelabs\u002Fflutter-in-app-purchases#3",rel:[$,aa,ab],target:ac},children:[{type:a,value:"Еще один неплохой гайд"}]}]},{type:a,value:f}]}]},dir:"\u002Fdev\u002Fflutter",path:"\u002Fdev\u002Fflutter\u002Fapk",extension:".md",createdAt:ad,updatedAt:ad}}],fetch:{},mutations:[]}}("text","element","span","token","punctuation","\n","code","li"," ","string","(",")","div","nuxt-content-highlight","pre","line-numbers","{","}","\\","p","keyword","[","]","number","comment",".","function",":","language-bash","operator","=","\n\n","a","ssylochki","Ссылочки","upload-keystore.jks","PATH","upload-keystore.jks -storetype JKS -keyalg RSA -keysize ","2048"," -validity ","10000"," -alias upload\n","ul","\\b","def","new","class-name","file","keystorePropertiesFile","\n    release ","'storeFile'","tag","\"","nofollow","noopener","noreferrer","_blank","2022-06-01T15:22:47.342Z")));