<template>
  
  <div class="MyProject">
    <v-system-bar

color="black"
dark
> <v-icon>mdi-account-multiple</v-icon>Team Information  </v-system-bar>
     <h1 class="text-md-center">TEAM</h1>
     <v-container>
       <v-row>
         <v-col v-for="pro in projects" :key="pro.title" cols="12" sm="5" md="3">
           <v-card
     class="mx-auto"
     max-width="400
     "
     height="200"
     outlined
   >
     <v-list-item three-line>
       <v-list-item-content>
         <div class="text-overline mb-4">
           {{ pro.title }}
           
         </div>
         <v-list-item-title class="text-h5 mb-1">
           {{ pro.lan }}
         </v-list-item-title>
         <v-list-item-subtitle>{{ pro.language }}</v-list-item-subtitle>
       </v-list-item-content>
 
       <v-list-item-avatar
         tile
         size="90"
       ><img :src="pro.avatar"></v-list-item-avatar>
     </v-list-item>
 
     <v-card-actions>
       <v-btn
         depressed
         color="primary"
         outlined
         rounded
         text
       >
         추가정보
       </v-btn>
     </v-card-actions>
   </v-card>
         </v-col>
       </v-row>
     </v-container>
   </div>
 </template>
 <script>
 
 export default {
     data(){
       return {
         projects:[
           {title:"MICT 융합과목 조원"  ,language:"3D프린터 조립 담당",avatar:"img/dog.jpg",lan:"정원"},
           {title:"MICT 융합과목 조원"  ,language:"3D프린터 조립 보조",avatar:"img/chunsik.jpeg",lan:"정우"},
           {title:"Java 조원",language:"프로그래밍 보조",avatar:"img/jeong.jpeg",lan:"태형"}
           ,{title:"LAB SCALE 조원", language:"재료조달 코딩보조",avatar:"img/mahyeong.jpeg",lan:"진수"}
           ,{title:"임베디드 조원",language:"드론 조립 도움",avatar:"img/profile1.jpeg",lan:"건우"}
         
 
         ]
       }
     },
    
   
   }
 </script>
 <style>
 
 </style>
 