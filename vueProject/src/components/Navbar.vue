<template>
  <nav>
    <v-toolbar
    color="indigo darken-2"
    dark
    >
      <v-app-bar-nav-icon @click.stop="$event=>drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>KIM HYUN HO</v-toolbar-title>
        <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>

          <v-btn icon
          to="/">
           <v-icon>mdi-home</v-icon>
          </v-btn>
     </v-toolbar>
     <v-navigation-drawer v-model="drawer" absolute bottom temporary
     :src="require('@/assets/BACK.png')"
     >
      
      <v-layout column align-center>
        <v-flex class="mt-4">
          <v-avatar size="100">
            <img src="/img/face1.png">
          </v-avatar>
          <p class="mt-5">Kim hyun ho</p>
        </v-flex>
      </v-layout> 
      <v-list nav dense>
          <v-list-item-group v-model="group">
           
            <v-list-item v-for="(item,i) in items" :key="i" :to="item.router">
             
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-contents>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </v-list-item-contents>
             
            </v-list-item>
          </v-list-item-group>
        </v-list>
     </v-navigation-drawer>
   
  </nav>
</template>
<script>
 export default{
  data:()=>({
    drawer:false,
    group:null,
    items:[
    {icon:'mdi-account',text:'Dashboard',router:'/'},
      {icon:'mdi-inbox',text:'My Project',router:'/MyProject'},
      {icon:'mdi-account-multiple',text:'Team',router:'/Team'},
      {icon:'mdi-school',text:'Education',router:'/Education'},
      {icon:'mdi-content-paste',text:'Labscale',router:'/LabscaleView'},
      {icon:'mdi-content-paste',text:'Dron',router:'/FanView'},
      {icon:'mdi-content-paste',text:'JavaPrograming',router:'/JavaView'},
      {icon:'mdi-content-paste',text:'MictProject',router:'/MictView'},
      {icon:'mdi-content-paste',text:'Potofolio',router:'/'},

    ]
  })
 }
</script>
