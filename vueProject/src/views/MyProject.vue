<!-- <template>
  <div class="team">
    <h1 class="text-md-center">Team</h1>
    <v-container>
      <v-row>
        <v-col v-for="person in team" :key="person.name" cols="12" sm="4" md="3">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-6 mb-10">
              <v-avatar size="100">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div>{{ person.name }}</div>
              <div>{{ person.role }}</div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
 export default{
  data(){
    return{
    team:[
    {name:'김현호',role:'team leader',avatar:'img/face1.png'},
    {name:'정진수',role:'team member',avatar:'img/face1.png'},
    {name:'하태형',role:'team member',avatar:'img/face1.png'},
    {name:'정원',role:'team member',avatar:'img/face1.png'},
    {name:'정건우',role:'team member',avatar:'img/face1.png'},

    ]
    }
     
    
  }
 }
</script> -->
<template>
  <v-card
    class="mx-auto"
    max-width="100%"
  >
    <v-system-bar
      color="#330461"
      dark
    >
    <h3><v-icon>mdi-school</v-icon>
      myProjects</h3>
    </v-system-bar>

    <!-- <v-toolbar
      color="indigo"
      dark
    >
      
      <v-toolbar-title>Discover</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-school</v-icon>
      </v-btn>
    </v-toolbar> -->

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="card in cards"
          :key="card.title"
          :cols="card.flex"
        >
          <v-card>
            <v-img
              :src="card.src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="300px"
            >
              <v-card-title > {{ card.title }}</v-card-title>
            </v-img>

            <v-card-actions>
              <v-spacer></v-spacer>

              <!-- <v-btn icon>
                <v-icon>mdi-heart</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-bookmark</v-icon>
              </v-btn>

              <v-btn icon>
                <v-icon>mdi-share-variant</v-icon>
              </v-btn> -->
              <v-btn
              x-large
              color="success"
              dark
              :to="card.go"
            >
              추가정보
            </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        { title: 'LAB SCALE', src: 'img/fan.jpg', flex: 6 ,go:'/labscaleview'},
        { title: '임베디드 프로그래밍', src: 'img/dron.jpg', flex: 6 ,go:'/fanview'},
        { title: 'Java 프로그래밍', src: 'img/pos.jpg', flex: 6,go:'/javaview' },
        { title: 'MICT 융합과목', src: 'img/robot.jpg', flex: 6, go:'/mictview'},
        { title: '포토폴리오', src: 'img/poto.png', flex: 6 ,go:'/'},


      ],
    }),
  }
</script>

