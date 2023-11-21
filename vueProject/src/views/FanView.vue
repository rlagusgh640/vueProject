<template>
  <v-card
    class="mx-auto"
    max-width="88%"
  >
  <v-system-bar

color="#000000"
dark
> Project2 </v-system-bar>
    <v-img
      src="img/dronfly.jpg"
      height="300px"
      cover
    ></v-img>

    <v-card-title>
    <h1> <strong> 임베디드 - dron 제작</strong></h1>
    </v-card-title>
    <br>

    <v-card-subtitle>
     자세한 정보를 알고싶으면 아래버튼 클릭
      
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="green"
        variant="text"
       
        @click="show=!show"
      >
       자세한정보
      </v-btn>

      <v-spacer></v-spacer>
      
      
    </v-card-actions>

    <v-expand-transition>
      <div v-if="show">
        <v-divider></v-divider>
  
        
   <v-card
  
    max-width="100%"
    height="100%"
  >
    <v-card-text>
      <p class="text-h4 text--primary">
        0.팀원 및 역할
        <v-card
    class=""
    max-width="50%"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
          김현호
        </v-list-item-title>
        <v-list-item-subtitle>알고리즘 작성 및 조립</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        
      ><img src="img/face1.png" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Group Member
        </div>
        <v-list-item-title class="text-h5 mb-1">
          건우
        </v-list-item-title>
        <v-list-item-subtitle>재료 조달및 조립 보조</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        
      ><img src="img/profile1.jpeg" alt="projects"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        to="/team"
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
      </p>
      <p class="text-h4 text--primary">
        1.참고자료 및 준비물
      </p>
      <v-list-item-avatar
        tile
        size="150"
        
      ><img src="img/dronbook.png" alt="projects"></v-list-item-avatar>
      <v-list-item-avatar
        tile
        size="150"
        
      ><img src="img/flyfan.png" alt="projects"></v-list-item-avatar>
      <v-list-item-avatar
        tile
        size="150"
        
      ><img src="img/aduino.jpg" alt="projects"></v-list-item-avatar>
    
        
     
      
      <strong><p>1.아두이노 우노R3 or 라즈베리 파이,센서,모터,4중 날개 </p></strong>
      <div class="text--primary">
        <p class="text-h4 text--primary">
        2.아두이노 배선
      </p>
        
        
      </div>
      <img src="img/dronpage1.png" alt="projects" width="60%">
      <img src="img/dronpage2.png" alt="projects" width="60%">
    </v-card-text>
    <v-card-actions>
      
    </v-card-actions>
  </v-card>
       
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
  export default {
    data: () => ({
      show: false,
    }),
    
    
  }
</script>
